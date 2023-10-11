import { diceNumbers } from "./diceNumbers";
import { useGameContext } from "../../contexts/gameContext/gameContext";
import "./dice.css";
import { useEffect, useState } from "react";
import { diceRoll } from "./helpers/diceRoll";

export const Dice = () => {
  const { valueFromDiceRoll, setValueFromDiceRoll, rollCountIncrement } =
    useGameContext();

  const initialValue = valueFromDiceRoll;

  const [diceRollDisplay, setDiceRollDisplay] = useState<number>(initialValue);
  const [isRolling, setIsRolling] = useState(false);

  useEffect(() => {
    let iteration = 0;
    let interval: NodeJS.Timer;
    if (isRolling) {
      interval = setInterval(() => {
        iteration++;
        const diceValue = diceRoll();
        setDiceRollDisplay(diceValue);
        if (iteration > 6) {
          setValueFromDiceRoll(diceValue);
          clearInterval(interval);
          setIsRolling(false);
          rollCountIncrement();
        }
      }, 150);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isRolling]);

  const handleRollClick = () => {
    setIsRolling(true);
  };

  return (
    <>
      <img
        src={diceNumbers[diceRollDisplay - 1].srcPath}
        onClick={handleRollClick}
        className="dice"
      />
    </>
  );
};
