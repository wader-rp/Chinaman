import { useState } from "react";
import { GameContextType } from "../contexts/gameContext/gameContext";
import { diceRoll } from "../components/dice_roll/helpers/diceRoll";

export type DiceRollAPI = {
  diceRollDisplay: number;
  handleRollClick: () => Promise<void>;
  isRolling: boolean;
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
  const [isRolling, setIsRolling] = useState(false);

  // useEffect(() => {
  //   let iteration = 0;
  //   let interval: NodeJS.Timer;
  //   if (isRolling) {
  //     interval = setInterval(() => {
  //       iteration++;
  //       const diceValue = diceRoll();
  //       setDiceRollDisplay(diceValue);
  //       if (iteration > 6) {
  //         setValueFromDiceRoll(diceValue);
  //         clearInterval(interval);
  //         setIsRolling(false);
  //         rollCountIncrement();
  //         setIsRolled(true);
  //       }
  //     }, 150);
  //   }

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [isRolling]);

  const rollDiceAsync = async () => {
    return new Promise<void>((resolve) => {
      setIsRolling(true);
      let iteration = 0;
      // let interval: NodeJS.Timer;

      const interval = setInterval(() => {
        iteration++;
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
      }, 150);
    });
  };

  const handleRollClick = async () => {
    if (!roundState.permissionToMove && !isRolling) {
      await rollDiceAsync();
    }
  };

  return { diceRollDisplay, handleRollClick, isRolling };
};
