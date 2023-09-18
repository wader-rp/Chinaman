import { FIELDS } from "../components/board/data/fields";
import React, { ReactNode, createContext, useContext, useState } from "react";
import { Field } from "../components/board/data/types/fieldsTypes";
import { Player } from "../components/playerSetupForm/data/types/playerTypes";
import { PLAYERS } from "../components/playerSetupForm/data/startPlayers";

type GameContextProviderProps = {
  children: ReactNode;
};

type GameContextType = {
  fieldStatus: Field[];
  players: Player[];
  setFieldStatus: React.Dispatch<React.SetStateAction<Field[]>>;
  setPlayers: React.Dispatch<React.SetStateAction<Player[]>>;
};

export const GameContext = createContext<GameContextType>(
  {} as GameContextType
);

export const GameContextProvider = ({ children }: GameContextProviderProps) => {
  const [fieldStatus, setFieldStatus] = useState(FIELDS);
  const [players, setPlayers] = useState<Player[]>(PLAYERS);
  console.log(players);
  return (
    <GameContext.Provider
      value={{ fieldStatus, setFieldStatus, players, setPlayers }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => useContext(GameContext);
