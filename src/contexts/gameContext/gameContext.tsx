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
import { areBaseFieldsOccupied } from "./helpers/helpers";
import { getPermissionToMoveAPawn } from "../../components/board/helpers/getPermissionToMoveAPawn";

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
  moveCountDecrement: () => void;
  isRolled: () => void;
  isRolledToFalse: () => void;
  afterMove: () => void;
};

export const GameContext = createContext<GameContextType>(
  {} as GameContextType
);

export type Round = {
  activePlayer: Player["id"];
  rollCount: number;
  moveCount: number;
  isDiceRolled: boolean;
  permissionToMove: boolean;
};
export const INITIAL_ROUND_STATE = {
  activePlayer: 1,
  rollCount: 0,
  moveCount: 3,
  isDiceRolled: false,
  permissionToMove: false,
};

export const GameContextProvider = ({ children }: GameContextProviderProps) => {
  const [fieldStatus, setFieldStatus] = useState(INITIAL_FIELDS);
  const [players, setPlayers] = useState<Player[]>(INITIAL_PLAYERS);
  const [valueFromDiceRoll, setValueFromDiceRoll] = useState<number>(3);
  const [roundState, setRoundState] = useState<Round>(INITIAL_ROUND_STATE);
  const previousValueFromDiceRoll = usePrevious(valueFromDiceRoll);

  useEffect(() => {
    const isBaseFull = !areBaseFieldsOccupied(roundState.activePlayer);
    const permissionToMove = fieldStatus.map((f) => {
      return f.presentPawns.length
        ? getPermissionToMoveAPawn(
            f,
            valueFromDiceRoll,
            fieldStatus,
            roundState
          )
        : false;
    });

    const isPermittedToMove = permissionToMove.find((b) => b === true);

    if (roundState.moveCount === 0) setNextActivePlayer();

    if (isBaseFull) {
      if (roundState.rollCount === 3 && valueFromDiceRoll !== 6) {
        setNextActivePlayer();
      } else {
        if (isPermittedToMove)
          setRoundState((prev) => ({ ...prev, permissionToMove: true }));
      }
    } else {
      if (isPermittedToMove) {
        setRoundState((prev) => ({ ...prev, permissionToMove: true }));
        if (previousValueFromDiceRoll === 6 && valueFromDiceRoll !== 6)
          setMoveCountToLast();
        if (valueFromDiceRoll !== 6) setMoveCountToLast();
      }
    }

    console.log(roundState.permissionToMove);
  }, [roundState.rollCount, roundState.moveCount]);

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
      moveCount: 3,
      isDiceRolled: false,
    }));
  };

  const rollCountIncrement = () => {
    setRoundState((prev) => ({ ...prev, rollCount: prev.rollCount + 1 }));
  };
  const moveCountDecrement = () => {
    setRoundState((prev) => ({ ...prev, moveCount: prev.moveCount - 1 }));
  };
  const setMoveCountToLast = () => {
    setRoundState((prev) => ({ ...prev, moveCount: 1 }));
  };
  const isRolled = () => {
    setRoundState((prev) => ({ ...prev, isDiceRolled: true }));
  };
  const isRolledToFalse = () => {
    setRoundState((prev) => ({ ...prev, isDiceRolled: false }));
  };
  const afterMove = () => {
    setRoundState((prev) => ({ ...prev, permissionToMove: false }));
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
        moveCountDecrement,
        isRolled,
        isRolledToFalse,
        afterMove,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => useContext(GameContext);
