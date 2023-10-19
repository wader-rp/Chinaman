import { Player } from "../../playerSetupForm/data/types/playerTypes";

export const getPlayerById = (id: Player["id"], players: Player[]): Player => {
  const playerIndex = players.findIndex((player) => player.id === id);
  if (playerIndex === -1) {
    throw new Error(`Player with id ${id} not found`);
  }

  return players[playerIndex];
};
