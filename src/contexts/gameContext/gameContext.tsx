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
import { DiceRollAPI, useDiceRoll } from "../../hooks/useDiceRoll";

type GameContextProviderProps = {
  children: ReactNode;
};

export type GameContextType = {
  fieldStatus: Field[];
  players: Player[];
  setFieldStatus: React.Dispatch<React.SetStateAction<Field[]>>;
  setPlayers: React.Dispatch<React.SetStateAction<Player[]>>;
  valueFromDiceRoll: number;
  roundState: Round;
  setNextActivePlayer: () => void;
  setValueFromDiceRoll: React.Dispatch<React.SetStateAction<number>>;
  rollCountIncrement: () => void;
  moveCountDecrement: () => void;
  setIsRolled: (value: boolean) => void;
  diceRollAPI: DiceRollAPI;
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
  console.log(players);
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
      activePlayer:
        prev.activePlayer < players.length ? prev.activePlayer + 1 : 1,
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

  const setIsRolled = (value: boolean) => {
    setRoundState((prev) => ({ ...prev, isDiceRolled: value }));
  };

  const afterMove = () => {
    setRoundState((prev) => ({ ...prev, permissionToMove: false }));
  };

  const setMoveCountToLast = () => {
    setRoundState((prev) => ({ ...prev, moveCount: 1 }));
  };

  const diceRollAPI = useDiceRoll({
    valueFromDiceRoll,
    setValueFromDiceRoll,
    rollCountIncrement,
    setIsRolled,
    roundState,
  });

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
        setIsRolled,
        afterMove,
        diceRollAPI,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => useContext(GameContext);
