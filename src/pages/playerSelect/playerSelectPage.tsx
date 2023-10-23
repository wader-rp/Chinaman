import { PlayerSetupForm } from "../../components/playerSetupForm/PlayerSetupForm";
import "./playerSelectPage.css";
import { useGameContext } from "../../contexts/gameContext/gameContext";

export const PlayerSelectPage = () => {
  const { players } = useGameContext();
  return (
    <div className="playersSetup-page">
      <h1 className="header">Please choose as you wish: </h1>
      <div className="playersSetup-forms">
        {players.map((player) => {
          return <PlayerSetupForm key={player.id} id={player.id} />;
        })}
      </div>
    </div>
  );
};
