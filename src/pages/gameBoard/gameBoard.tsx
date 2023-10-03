import React from "react";
import { PlayerPanel } from "../../components/playerpanels/PlayerPanels";
import { Board } from "../../components/board/Board";
import "../../pages/gameBoard/gameBoard.css";
import { useGameContext } from "../../contexts/gameContext/gameContext";

export const GameBoard = () => {
  const { players } = useGameContext();

  return (
    <div className="gameBoard-container">
      <div className="board">
        <Board />
      </div>
      <div className="playerPanels">
        {players.map((player) => {
          return (
            <PlayerPanel
              key={player.id}
              id={player.id}
              isHuman={player.isHuman}
              playerName={player.playerName}
              playerAvatar={player.playerAvatar}
              playerClass={player.playerClass}
            />
          );
        })}
      </div>
    </div>
  );
};
