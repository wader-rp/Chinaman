import React from "react";
import { PlayerPanel } from "../../components/playerpanels/PlayerPanels";
import { Board } from "../../components/board/Board";
import "../../pages/gameBoard/gameBoard.css";
import { useGameContext } from "../../contexts/gameContext/gameContext";

export const GameBoard = () => {
  const { players } = useGameContext();

  return (
    <div className="gameBoard-container">
      <div className="playerPanels">
        <PlayerPanel
          id={players[0].id}
          isHuman={players[0].isHuman}
          playerName={players[0].playerName}
          playerAvatar={players[0].playerAvatar}
          playerClass={players[0].playerClass}
        />
        <PlayerPanel
          id={players[3].id}
          isHuman={players[3].isHuman}
          playerName={players[3].playerName}
          playerAvatar={players[3].playerAvatar}
          playerClass={players[3].playerClass}
        />
      </div>
      <div className="board">
        <Board />
      </div>
      <div className="playerPanels">
        <PlayerPanel
          id={players[1].id}
          isHuman={players[1].isHuman}
          playerName={players[1].playerName}
          playerAvatar={players[1].playerAvatar}
          playerClass={players[1].playerClass}
        />
        <PlayerPanel
          id={players[2].id}
          isHuman={players[2].isHuman}
          playerName={players[2].playerName}
          playerAvatar={players[2].playerAvatar}
          playerClass={players[2].playerClass}
        />
      </div>
    </div>
  );
};
