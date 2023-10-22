import { PlayerPanel } from "../../components/playerpanels/PlayerPanels";
import { Board } from "../../components/board/Board";
import "./gameBoard.css";
import { useGameContext } from "../../contexts/gameContext/gameContext";
import { Player } from "../../components/playerSetupForm/data/types/playerTypes";

export const GameBoard = () => {
  const { players } = useGameContext();

  // const getMarginForTwoPlayers = (players: Player[]) => {
  //   players.length === 2 ? "50%" : undefined;
  // }

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
