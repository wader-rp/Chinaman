import { useEffect, ChangeEvent } from "react";

import "./playerSetupForm.css";
import { useGameContext } from "../../contexts/gameContext/gameContext";

type playerProps = {
  id: number;
};

export const PlayerSetupForm = ({ id }: playerProps) => {
  const { changePlayerProperty, getPlayerById } = useGameContext();

  const { isHuman, playerName } = getPlayerById(id);

  const onOptionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    changePlayerProperty(id, "isHuman", e.target.value === "human");
  };
  const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    changePlayerProperty(id, "playerName", e.target.value);
  };

  useEffect(() => {
    const newName = isHuman
      ? playerName.replace("BOT ", "")
      : `BOT ${playerName}`;
    changePlayerProperty(id, "playerName", newName);
    console.log(newName);
  }, [isHuman]);

  return (
    <div className="playerSetup-form">
      <h2>{`Are you a human ? ${name}`}</h2>
      <select name="isHuman" id="isHuman" onChange={onOptionChange}>
        <option value="pc">No, let my computer play</option>
        <option value="human">Yes!</option>
      </select>
      <span>{playerName}</span>
      {isHuman && (
        <div>
          <input value={playerName} onChange={onNameChange} />
        </div>
      )}
    </div>
  );
};
