import { INITIAL_FIELDS } from "../../components/board/data/fields";
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
  //handleRollClick: () => void;
  roundState: Round;
  setNextActivePlayer: () => void;
  setValueFromDiceRoll: React.Dispatch<React.SetStateAction<number>>;
  // setRoundState: React.Dispatch<React.SetStateAction<Round>>;
  rollCountIncrement: () => void;
};

export const GameContext = createContext<GameContextType>(
  {} as GameContextType
);

export type Round = {
  activePlayer: Player["id"];
  rollCounter: number;
};
export const INITIAL_ROUND_STATE = {
  activePlayer: 1,
  rollCounter: 0,
};

export const GameContextProvider = ({ children }: GameContextProviderProps) => {
  const [fieldStatus, setFieldStatus] = useState(INITIAL_FIELDS);
  const [players, setPlayers] = useState<Player[]>(INITIAL_PLAYERS);
  const [valueFromDiceRoll, setValueFromDiceRoll] = useState<number>(1);
  const [roundState, setRoundState] = useState<Round>(INITIAL_ROUND_STATE);
  useEffect(() => {
    if (roundState.rollCounter > 2) return setNextActivePlayer();
  }, [roundState.rollCounter]);

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
      rollCounter: 0,
    }));
  };

  const rollCountIncrement = () => {
    setRoundState((prev) => ({ ...prev, rollCounter: prev.rollCounter + 1 }));
  };
  console.log(`${roundState.rollCounter} counter , ${roundState.activePlayer}`);
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
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => useContext(GameContext);
