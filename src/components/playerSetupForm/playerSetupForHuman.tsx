import { ChangeEvent } from "react";
import { useGameContext } from "../../contexts/gameContext/gameContext";

type FormForHumanProps = {
  id: number;
  playerName: string;
};

export const PlayerSetupForHuman = ({ id, playerName }: FormForHumanProps) => {
  const { changePlayerProperty } = useGameContext();

  const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    changePlayerProperty(id, "playerName", e.target.value);
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
