import { diceNumbers } from "./diceNumbers";
import { useGameContext } from "../../contexts/gameContext/gameContext";
import "./dice.css";

export const Dice = () => {
  const { diceRollAPI } = useGameContext();
  const { diceRollDisplay, handleRollClick } = diceRollAPI;

  return (
    <img
      src={diceNumbers[diceRollDisplay - 1].srcPath}
      onClick={handleRollClick}
      className="dice"
    />
  );
};
