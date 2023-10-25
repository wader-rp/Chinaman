import { ChangeEvent } from "react";
import { useGameContext } from "../../contexts/gameContext/gameContext";
import { changePlayerProperty } from "../../contexts/gameContext/helpers/changePlayerProperty";
import "./playerSetup.css";
import { Colors } from "./data/colors";

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
  const onPawnColorChange = (e: ChangeEvent<HTMLSelectElement>) => {
    changePlayerProperty(id, "pawnColor", e.target.value, players, setPlayers);
  };

  const getDefaultValue = () => {
    return players.find((p) => p.id === id)?.pawnColor;
  };

  const getTakenColors = (colorCode: string): boolean => {
    return players.some((p) => p.pawnColor === colorCode);
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
      <div>
        <select
          id="numberOfPlayers"
          name="colorSelect"
          onChange={onPawnColorChange}
          defaultValue={getDefaultValue()}
        >
          {Colors.map((color) => (
            <option
              value={color.colorCode}
              key={color.name}
              disabled={getTakenColors(color.colorCode)}
            >{`${color.icon} ${color.name}`}</option>
          ))}
        </select>
      </div>
    </div>
  );
};
