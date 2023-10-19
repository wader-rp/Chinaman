import { ChangeEvent } from "react";

import "./playerSetupForm.css";
import { useGameContext } from "../../contexts/gameContext/gameContext";
import { PlayerSetupForHuman } from "./playerSetupForHuman";
import { getPlayerById } from "../playerpanels/helpers/getPlayerById";
import { changePlayerProperty } from "../../contexts/gameContext/helpers/changePlayerProperty";

type playerProps = {
  id: number;
};

export const PlayerSetupForm = ({ id }: playerProps) => {
  const { players, setPlayers } = useGameContext();

  const { isHuman, playerName } = getPlayerById(id, players);

  const onOptionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    changePlayerProperty(
      id,
      "isHuman",
      e.target.value === "human",
      players,
      setPlayers
    );
  };

  return (
    <div className="playerSetup-form">
      <h2 className="playerSetup-title">Are you a human ?</h2>
      <select
        name="isHuman"
        id={playerName}
        className="playerSetup-isHuman-select"
        onChange={onOptionChange}
      >
        <option value="pc">No, let my computer play</option>
        <option value="human">Yes!</option>
      </select>

      {isHuman && <PlayerSetupForHuman id={id} playerName={playerName} />}
    </div>
  );
};
