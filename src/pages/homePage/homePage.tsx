import { useEffect, useState } from "react";
import { useGameContext } from "../../contexts/gameContext/gameContext";
import "../homePage/homePage.css";
import { generatePlayerListByNumberOfPlayers } from "../../contexts/gameContext/helpers/generatePlayerListByNumberOfPlayers";
import { INITIAL_PLAYERS } from "../../components/playerSetupForm/data/startPlayers";

export const HomePage = () => {
  const { setPlayers } = useGameContext();
  const [numberOfPlayers, setNumberOfPlayers] = useState<number>(4);

  useEffect(() => {
    setPlayers(
      generatePlayerListByNumberOfPlayers(numberOfPlayers, INITIAL_PLAYERS)
    );
  }, [numberOfPlayers]);

  return (
    <div>
      <h1>CHINAMAN</h1>
      <h3>Lorem ipsum dolor sit chujem</h3>
      <span>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
        deleniti pariatur cumque totam, velit mollitia vitae quos est! Nam cum
        modi molestias earum, tempora cumque dignissimos soluta id recusandae
        maxime?
      </span>

      <label>How many players are playing ??</label>
      <select
        id="numberOfPlayers"
        name="numberOfPlayers"
        defaultValue={4}
        onChange={(event) => setNumberOfPlayers(parseInt(event.target.value))}
      >
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
      </select>
    </div>
  );
};
