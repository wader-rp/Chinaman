import { INITIAL_FIELDS } from "../../components/board/data/fields";
import React, { ReactNode, createContext, useContext, useState } from "react";
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
  activePlayer: Player["id"];
  setActivePlayer: React.Dispatch<React.SetStateAction<Player["id"]>>;
  setNextActivePlayer: () => void;
  setValueFromDiceRoll: React.Dispatch<React.SetStateAction<number>>;
};

export const GameContext = createContext<GameContextType>(
  {} as GameContextType
);

export const GameContextProvider = ({ children }: GameContextProviderProps) => {
  const [fieldStatus, setFieldStatus] = useState(INITIAL_FIELDS);
  const [players, setPlayers] = useState<Player[]>(INITIAL_PLAYERS);
  const [valueFromDiceRoll, setValueFromDiceRoll] = useState<number>(1);
  const [activePlayer, setActivePlayer] = useState<Player["id"]>(2);

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

  const setNextActivePlayer = () =>
    setActivePlayer((prev) => (prev < 4 ? prev + 1 : 1));
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
        activePlayer,
        setActivePlayer,
        setNextActivePlayer,
        setValueFromDiceRoll,
        //handleRollClick,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => useContext(GameContext);
