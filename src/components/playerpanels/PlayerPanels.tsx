import { FC } from "react";

import "./playerPanels.css";
import { Player } from "../playerSetupForm/data/types/playerTypes";
import { useGameContext } from "../../contexts/gameContext/gameContext";
import { Dice } from "../dice_roll/Dice";

export const PlayerPanel: FC<Player> = ({ playerName, playerAvatar, id }) => {
  const {
    roundState: { activePlayer },
  } = useGameContext();

  return (
    <div className="playerPanel">
      <img alt="avatar" className="playerPanel-avatar" src={playerAvatar}></img>
      <span className="player-name">{playerName}</span>
      <div>{id === activePlayer && <Dice />}</div>
    </div>
  );
};
