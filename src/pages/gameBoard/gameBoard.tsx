import { PlayerPanel } from "../../components/playerpanels/PlayerPanels";
import { Board } from "../../components/board/Board";
import "./gameBoard.css";
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
                playerName={player.playerName}
                pawnColor={player.pawnColor}
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
                playerName={player.playerName}
                pawnColor={player.pawnColor}
              />
            );
          })}
      </div>
    </div>
  );
};
