import { useEffect, ChangeEvent } from "react";

import "./playerSetupForm.css";
import { useGameContext } from "../../contexts/gameContext/gameContext";
import { PlayerSetupForHuman } from "./playerSetupForHuman";

type playerProps = {
  id: number;
};

export const PlayerSetupForm = ({ id }: playerProps) => {
  const { changePlayerProperty, getPlayerById } = useGameContext();

  const { isHuman, playerName } = getPlayerById(id);

  const onOptionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    changePlayerProperty(id, "isHuman", e.target.value === "human");
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
      <h2 className="playerSetup-title">Are you a human ?</h2>
      <select
        name="isHuman"
        id="isHuman"
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
