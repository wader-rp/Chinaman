import { useGameContext } from "../../contexts/gameContext/gameContext";
import { PlayerSetup } from "./playerSetup";
import { getPlayerById } from "../playerpanels/helpers/getPlayerById";
import "./playerSetupForm.css";

type playerProps = {
  id: number;
};

export const PlayerSetupForm = ({ id }: playerProps) => {
  const { players } = useGameContext();

  const { playerName } = getPlayerById(id, players);

  return (
    <div className="playerSetup-form">
      <PlayerSetup id={id} playerName={playerName} />
    </div>
  );
};
