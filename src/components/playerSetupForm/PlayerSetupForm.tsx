import React, { useEffect, useState, ChangeEvent } from "react";

import "./playerSetupForm.css";
import { useGameContext } from "../../contexts/gameContext";

type playerProps = {
  id: number;
};

export const PlayerSetupForm = ({ id }: playerProps) => {
  const { setPlayers, players } = useGameContext();

  const [isHumanSelect, setIsHumanSelect] = useState(false);
  const onOptionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setIsHumanSelect(e.target.value === "human");
  };
  //   useEffect(() => {}, [isHumanSelect]);
  console.log(isHumanSelect);
  return (
    <div className="playerSetup-form">
      <h2>{`Are you a human ? ${id}`}</h2>
      <select name="isHuman" id="isHuman" onChange={onOptionChange}>
        <option value="pc">No, let my computer play</option>
        <option value="human">Yes!</option>
      </select>
    </div>
  );
};
