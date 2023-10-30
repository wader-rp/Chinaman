import "./playerSelectPage.css";
import "../../styles/buttons.css";
import { useGameContext } from "../../contexts/gameContext/gameContext";
import { NavLink } from "react-router-dom";
import { PlayerSetup } from "../../components/playerSetupForm/playerSetup";

export const PlayerSetupPage = () => {
  const { players } = useGameContext();
  return (
    <div className="playersSetup-page">
      <h1 className="header">PLAYERS SETUP</h1>
      <div className="playersSetup-forms">
        {players.map((player) => {
          return (
            <PlayerSetup
              key={player.id}
              id={player.id}
              playerName={player.playerName}
            />
          );
        })}
      </div>
      <NavLink to={"/gameboard"} className="nav-link">
        <button className="nav-button">START !</button>
      </NavLink>
    </div>
  );
};
