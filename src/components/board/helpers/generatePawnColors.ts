import { Player } from "../../playerSetupForm/data/types/playerTypes";

export const getPawnColor = (
  pawnId: string,
  players: Player[]
): string | undefined => {
  const idOfPlayer = pawnId.substring(1, 2);
  return players.find((p) => p.id === parseInt(idOfPlayer))?.pawnColor;
};
