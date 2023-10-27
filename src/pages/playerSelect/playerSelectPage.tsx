import { PlayerSetupForm } from "../../components/playerSetupForm/PlayerSetupForm";
import "./playerSelectPage.css";
import "../../styles/buttons.css";
import { useGameContext } from "../../contexts/gameContext/gameContext";
import { NavLink } from "react-router-dom";

export const PlayerSetupPage = () => {
  const { players } = useGameContext();
  return (
    <div className="playersSetup-page">
      <h1 className="header">PLAYERS SETUP</h1>
      <div className="playersSetup-forms">
        {players.map((player) => {
          return <PlayerSetupForm key={player.id} id={player.id} />;
        })}
      </div>
      <NavLink to={"/gameboard"} className="nav-link">
        <button className="nav-button">START !</button>
      </NavLink>
    </div>
  );
};
