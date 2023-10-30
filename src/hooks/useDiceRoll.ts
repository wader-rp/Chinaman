import { useState } from "react";
import { GameContextType } from "../contexts/gameContext/gameContext";
import { diceRoll } from "../components/dice_roll/helpers/diceRoll";

export type DiceRollAPI = {
  diceRollDisplay: number;
  handleRollClick: () => Promise<void>;
  isRolling: boolean;
  rollDeg: number;
};

export type UseDiceRollProps = Pick<
  GameContextType,
  | "valueFromDiceRoll"
  | "setValueFromDiceRoll"
  | "rollCountIncrement"
  | "setIsRolled"
  | "roundState"
>;

export const useDiceRoll = ({
  valueFromDiceRoll,
  setValueFromDiceRoll,
  rollCountIncrement,
  setIsRolled,
  roundState,
}: UseDiceRollProps): DiceRollAPI => {
  const initialValue = valueFromDiceRoll;

  const [diceRollDisplay, setDiceRollDisplay] = useState<number>(initialValue);
  const [rollDeg, setRollDeg] = useState<number>(0);
  const [isRolling, setIsRolling] = useState(false);

  const rollDiceAsync = async () => {
    return new Promise<void>((resolve) => {
      setIsRolling(true);
      let iteration = 0;
      const interval = setInterval(() => {
        iteration++;
        handleDegreeChange(iteration);
        const diceValue = diceRoll();
        setDiceRollDisplay(diceValue);
        if (iteration > 6) {
          setValueFromDiceRoll(diceValue);
          clearInterval(interval);
          setIsRolling(false);
          rollCountIncrement();
          setIsRolled(true);
          resolve();
        }
      }, 100);
    });
  };

  const handleDegreeChange = (iteration: number) => {
    setRollDeg((prev) => {
      if (iteration > 6) {
        return 0;
      }
      return prev + 25;
    });
  };

  const handleRollClick = async () => {
    if (!roundState.permissionToMove && !isRolling) {
      await rollDiceAsync();
    }
  };

  return { diceRollDisplay, handleRollClick, isRolling, rollDeg };
};
