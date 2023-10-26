import { Player } from "../../playerSetupForm/data/types/playerTypes";

export const fieldColors = (
  fieldId: number,
  players: Player[]
): string | undefined => {
  const findPlayerId = (playerId: number) => {
    return players.find((p) => p.id === playerId)?.pawnColor;
  };

  if ((fieldId >= 1001 && fieldId <= 1008) || fieldId === 1) {
    return findPlayerId(1);
  }
  if ((fieldId >= 2001 && fieldId <= 2008) || fieldId === 11) {
    return findPlayerId(2);
  }
  if ((fieldId >= 3001 && fieldId <= 3008) || fieldId === 21) {
    return findPlayerId(3);
  }
  if ((fieldId >= 4001 && fieldId <= 4008) || fieldId === 31) {
    return findPlayerId(4);
  }

  return "#818181";
};
