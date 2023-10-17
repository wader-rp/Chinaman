import { ChangeEvent } from "react";
import { useGameContext } from "../../contexts/gameContext/gameContext";
import { changePlayerProperty } from "../../contexts/gameContext/helpers/changePlayerProperty";

type FormForHumanProps = {
  id: number;
  playerName: string;
};

export const PlayerSetupForHuman = ({ id, playerName }: FormForHumanProps) => {
  const { players, setPlayers } = useGameContext();

  const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    changePlayerProperty(id, "playerName", e.target.value, players, setPlayers);
  };
  return (
    <div>
      <div>
        <h5>Insert player name:</h5>
        <input value={playerName} onChange={onNameChange} />
      </div>
    </div>
  );
};
