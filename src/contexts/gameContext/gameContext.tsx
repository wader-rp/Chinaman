import {
  INITIAL_FIELDS,
  PLAYERS_BASE_FIELDS,
} from "../../components/board/data/fields";
import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { Field } from "../../components/board/data/types/fieldsTypes";
import { Player } from "../../components/playerSetupForm/data/types/playerTypes";
import { INITIAL_PLAYERS } from "../../components/playerSetupForm/data/startPlayers";
import { usePrevious } from "../../hooks/usePreviousValue";

type GameContextProviderProps = {
  children: ReactNode;
};

type GameContextType = {
  fieldStatus: Field[];
  players: Player[];
  setFieldStatus: React.Dispatch<React.SetStateAction<Field[]>>;
  setPlayers: React.Dispatch<React.SetStateAction<Player[]>>;
  changePlayerProperty: <P extends keyof Omit<Player, "id">>(
    id: Player["id"],
    property: P,
    newValue: Player[P]
  ) => void;
  getPlayerById: (id: Player["id"]) => Player;
  valueFromDiceRoll: number;
  roundState: Round;
  setNextActivePlayer: () => void;
  setValueFromDiceRoll: React.Dispatch<React.SetStateAction<number>>;
  rollCountIncrement: () => void;
  moveCountIncrement: () => void;
  isRolled: () => void;
  isRolledToFalse: () => void;
};

export const GameContext = createContext<GameContextType>(
  {} as GameContextType
);

export type Round = {
  activePlayer: Player["id"];
  rollCount: number;
  moveCount: number;
  isDiceRolled: boolean;
};
export const INITIAL_ROUND_STATE = {
  activePlayer: 1,
  rollCount: 0,
  moveCount: 0,
  isDiceRolled: false,
};

export const GameContextProvider = ({ children }: GameContextProviderProps) => {
  const [fieldStatus, setFieldStatus] = useState(INITIAL_FIELDS);
  const [players, setPlayers] = useState<Player[]>(INITIAL_PLAYERS);
  const [valueFromDiceRoll, setValueFromDiceRoll] = useState<number>(6);
  const [roundState, setRoundState] = useState<Round>(INITIAL_ROUND_STATE);

  useEffect(() => {
    const isBaseFull = !areBaseFieldsOccupied(roundState.activePlayer);

    if (isBaseFull) {
      if (roundState.rollCount === 3 && valueFromDiceRoll !== 6) {
        return setNextActivePlayer();
      }
    } else {
      if (
        roundState.rollCount > 3 &&
        roundState.moveCount === 3 &&
        valueFromDiceRoll !== 6
      ) {
        return setNextActivePlayer();
      }
    }

    if (roundState.moveCount > 3) return setNextActivePlayer();
  }, [roundState.rollCount, roundState.moveCount]);

  const areBaseFieldsOccupied = (activePlayer: Player["id"]): boolean => {
    const activePlayerBaseFields = PLAYERS_BASE_FIELDS.filter(
      (f) => f.baseFor === activePlayer
    );
    const isThereNoPawn = activePlayerBaseFields.find(
      (f) => f.presentPawns.length === 0
    );
    return isThereNoPawn ? true : false;
  };

  const changePlayerProperty = <P extends keyof Omit<Player, "id">>(
    id: Player["id"],
    property: P,
    newValue: Player[P]
  ) => {
    const playerIndex = players.findIndex((player) => player.id === id);
    if (playerIndex === -1) {
      throw new Error(`Player with id ${id} not found`);
    }

    setPlayers((prev) => {
      const copy = [...prev];
      copy[playerIndex][property] = newValue;
      return copy;
    });
  };

  const getPlayerById = (id: Player["id"]): Player => {
    const playerIndex = players.findIndex((player) => player.id === id);
    if (playerIndex === -1) {
      throw new Error(`Player with id ${id} not found`);
    }

    return players[playerIndex];
  };

  const setNextActivePlayer = () => {
    setRoundState((prev) => ({
      ...prev,
      activePlayer: prev.activePlayer < 4 ? prev.activePlayer + 1 : 1,
      rollCount: 0,
      moveCount: 0,
      isDiceRolled: false,
    }));
  };

  const rollCountIncrement = () => {
    setRoundState((prev) => ({ ...prev, rollCount: prev.rollCount + 1 }));
  };
  const moveCountIncrement = () => {
    setRoundState((prev) => ({ ...prev, moveCount: prev.moveCount + 1 }));
  };
  const isRolled = () => {
    setRoundState((prev) => ({ ...prev, isDiceRolled: true }));
  };
  const isRolledToFalse = () => {
    setRoundState((prev) => ({ ...prev, isDiceRolled: false }));
  };

  console.log(
    `${roundState.rollCount} counter , ${roundState.activePlayer} activePlayer , ${roundState.moveCount} moveCOunt , ${roundState.isDiceRolled} isRolled`
  );
  return (
    <GameContext.Provider
      value={{
        fieldStatus,
        setFieldStatus,
        players,
        setPlayers,
        changePlayerProperty,
        getPlayerById,
        valueFromDiceRoll,
        roundState,
        setNextActivePlayer,
        setValueFromDiceRoll,
        rollCountIncrement,
        moveCountIncrement,
        isRolled,
        isRolledToFalse,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => useContext(GameContext);
