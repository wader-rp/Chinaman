import { useEffect, useState } from "react";
import { useGameContext } from "../../contexts/gameContext/gameContext";
import "../homePage/homePage.css";
import "../../styles/buttons.css";
import { generatePlayerListByNumberOfPlayers } from "../../contexts/gameContext/helpers/generatePlayerListByNumberOfPlayers";
import { INITIAL_PLAYERS } from "../../components/playerSetupForm/data/startPlayers";
import { NavLink } from "react-router-dom";

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
      <h2>RULES</h2>
      <hr />
      <div className="rules">
        <p> ) Each throw, the player decides which piece to move </p>
        <br />
        <p>
          ) A piece simply moves in a clockwise direction around the track given
          by the number thrown.
        </p>
        <br />
        <p>
          ) If no piece can legally move according to the number thrown, play
          passes to the next player.
        </p>
        <br />
        <p>
          ) A throw of 6 gives another turn. A player must throw a 6 to move a
          piece from the starting circle onto the first square on the track.
          (and the player then has another throw).
        </p>
        <br />
        <p>
          ) If a piece lands on a piece of a different colour, the piece jumped
          upon is returned to its starting circle. If a piece lands upon a piece
          of the same colour, this forms a block.
        </p>
        <br />
        <p>
          ) When a piece has circumnavigated the board, it proceeds up the home
          column. A piece can only be moved onto the home triangle by an exact
          throw. The first person to move all 4 pieces into the home triangle
          wins.
        </p>
      </div>
      <hr />
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
