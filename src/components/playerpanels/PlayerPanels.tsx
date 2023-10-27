import { FC } from "react";

import "./playerPanels.css";
import { Player } from "../playerSetupForm/data/types/playerTypes";
import { useGameContext } from "../../contexts/gameContext/gameContext";
import { Dice } from "../dice_roll/Dice";

export const PlayerPanel: FC<Player> = ({ playerName, id, pawnColor }) => {
  const {
    roundState: { activePlayer },
    players,
  } = useGameContext();

  const activePlayerBackground = () => {
    if (activePlayer === id) {
      return players.find((p) => p.id === id)?.pawnColor;
    }
  };

  return (
    <div className="playerPanel">
      <span
        className="player-name"
        style={{
          borderColor: `${pawnColor}`,
          backgroundColor: activePlayerBackground(),
        }}
      >
        {playerName}
      </span>
      <div className="dice-wrapper">{id === activePlayer && <Dice />}</div>
    </div>
  );
};
