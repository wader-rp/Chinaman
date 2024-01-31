import { useEffect, useState } from "react";
import { useGameContext } from "../../contexts/gameContext/gameContext";
import "../homePage/homePage.css";
import "../../styles/buttons.css";
import { generatePlayerListByNumberOfPlayers } from "../../contexts/gameContext/helpers/generatePlayerListByNumberOfPlayers";
import { INITIAL_PLAYERS } from "../../components/playerSetupForm/data/startPlayers";
import { NavLink } from "react-router-dom";
import { Rules } from "./Rules";

export const HomePage = () => {
  const { setPlayers } = useGameContext();
  const [numberOfPlayers, setNumberOfPlayers] = useState<number>(4);

  useEffect(() => {
    setPlayers(
      generatePlayerListByNumberOfPlayers(numberOfPlayers, INITIAL_PLAYERS)
    );
  }, [numberOfPlayers]);

  return (
    <div className="home-page">
      <h1 className="title">CHINAMAN</h1>
      <Rules />
      <div className="select-container">
        <label>Set number of players</label>
        <select
          id="numberOfPlayers"
          name="numberOfPlayers"
          defaultValue={4}
          onChange={(event) => setNumberOfPlayers(parseInt(event.target.value))}
          style={{ fontSize: "2rem" }}
        >
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
        </select>
      </div>
      <NavLink to={"/players-setup"} className="nav-link">
        <button className="nav-button">NEXT</button>
      </NavLink>
    </div>
  );
};
