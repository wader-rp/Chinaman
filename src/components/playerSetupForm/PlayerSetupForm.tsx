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

  const { playerName } = getPlayerById(id, players);

  // const onOptionChange = (e: ChangeEvent<HTMLSelectElement>) => {
  //   changePlayerProperty(id, e.target.value === "human", players, setPlayers);
  // };

  return (
    <div className="playerSetup-form">
      <PlayerSetupForHuman id={id} playerName={playerName} />
    </div>
  );
};
