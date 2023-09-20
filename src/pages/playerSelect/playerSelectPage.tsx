import React from "react";
import { PlayerSetupForm } from "../../components/playerSetupForm/PlayerSetupForm";
import "./playerSelectPage.css";
import { INITIAL_PLAYERS } from "../../components/playerSetupForm/data/startPlayers";

export const PlayerSelectPage = () => {
  return (
    <div className="playersSetup-page">
      <h1 className="header">Please choose as you wish: </h1>
      <div className="playersSetup-forms">
        {INITIAL_PLAYERS.map((player) => {
          return <PlayerSetupForm key={player.id} id={player.id} />;
        })}
      </div>
    </div>
  );
};
