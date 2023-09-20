import React, { FC } from "react";

import "./playerPanels.css";
import { Player } from "../playerSetupForm/data/types/playerTypes";
import { useGameContext } from "../../contexts/gameContext/gameContext";

export const PlayerPanel: FC<Player> = ({
  playerName,
  playerClass,
  playerAvatar,
}) => {
  const { getValueFromDiceRoll } = useGameContext();

  return (
    <div className="playerPanel">
      <img alt="avatar" className="playerPanel-avatar" src={playerAvatar}></img>
      <span className="player-name">{playerName}</span>
      <span className="player-class">{playerClass}</span>
      <button className="dice-button" onClick={getValueFromDiceRoll}>
        {" "}
        ROLL
      </button>
    </div>
  );
};
