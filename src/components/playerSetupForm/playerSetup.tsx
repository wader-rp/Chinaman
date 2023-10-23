import { ChangeEvent } from "react";
import { useGameContext } from "../../contexts/gameContext/gameContext";
import { changePlayerProperty } from "../../contexts/gameContext/helpers/changePlayerProperty";
import "./playerSetup.css";

type FormForHumanProps = {
  id: number;
  playerName: string;
};

export const PlayerSetup = ({ id, playerName }: FormForHumanProps) => {
  const { players, setPlayers } = useGameContext();

  const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    changePlayerProperty(id, "playerName", e.target.value, players, setPlayers);
  };
  const onFocusNameClear = () => {
    changePlayerProperty(id, "playerName", "", players, setPlayers);
  };
  return (
    <div className="playerSetup-container">
      <span className="playerSetup-text">Player name</span>
      <input
        value={playerName}
        onChange={onNameChange}
        onFocus={onFocusNameClear}
      />
      <span className="playerSetup-text">
        Choose your avatar and Pawn Color
      </span>
    </div>
  );
};
