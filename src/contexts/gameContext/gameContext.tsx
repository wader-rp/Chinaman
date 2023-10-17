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
import { Round } from "./types/round";
import { INITIAL_FIELDS } from "../../components/board/data/fields";
import { rulesCheckManager } from "./helpers/rulesLogic";
import { usePrevious } from "../../hooks/usePreviousValue";

type GameContextProviderProps = {
  children: ReactNode;
};

type GameContextType = {
  fieldStatus: Field[];
  players: Player[];
  setFieldStatus: React.Dispatch<React.SetStateAction<Field[]>>;
  setPlayers: React.Dispatch<React.SetStateAction<Player[]>>;
  // changePlayerProperty: <P extends keyof Omit<Player, "id">>(
  //   id: Player["id"],
  //   property: P,
  //   newValue: Player[P]
  // ) => void;
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

const INITIAL_ROUND_STATE: Round = {
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
    rulesCheckManager(
      roundState,
      fieldStatus,
      previousValueFromDiceRoll,
      valueFromDiceRoll,
      setNextActivePlayer,
      setRoundState,
      setMoveCountToLast
    );
  }, [roundState.rollCount, roundState.moveCount]);


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

  const isRolled = () => {
    setRoundState((prev) => ({ ...prev, isDiceRolled: true }));
  };
  const isRolledToFalse = () => {
    setRoundState((prev) => ({ ...prev, isDiceRolled: false }));
  };
  const afterMove = () => {
    setRoundState((prev) => ({ ...prev, permissionToMove: false }));
  };

  const setMoveCountToLast = () => {
    setRoundState((prev) => ({ ...prev, moveCount: 1 }));
  };

  return (
    <GameContext.Provider
      value={{
        fieldStatus,
        setFieldStatus,
        players,
        setPlayers,
    
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
