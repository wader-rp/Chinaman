import { PlayerPanel } from "../../components/playerpanels/PlayerPanels";
import { Board } from "../../components/board/Board";
import "./GameBoard.css";
import { useGameContext } from "../../contexts/gameContext/gameContext";

export const GameBoard = () => {
  const { players } = useGameContext();

  return (
    <div className="gameBoard-container">
      <div className="playerPanels">
        {players
          .filter((player) => player.id === 1 || player.id === 4)
          .map((player) => {
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

      <div className="board">
        <Board />
      </div>
      <div className="playerPanels">
        {players
          .filter((player) => player.id === 2 || player.id === 3)
          .map((player) => {
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
