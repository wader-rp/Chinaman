import { Player } from "../../playerSetupForm/data/types/playerTypes";

export const fieldColors = (
  fieldId: number,
  players: Player[]
): string | undefined => {
  if ((fieldId >= 1001 && fieldId <= 1008) || fieldId === 1) {
    return players.find((p) => p.id === 1)?.pawnColor;
  }
  if ((fieldId >= 2001 && fieldId <= 2008) || fieldId === 11) {
    return players.find((p) => p.id === 2)?.pawnColor;
  }
  if ((fieldId >= 3001 && fieldId <= 3008) || fieldId === 21) {
    return players.find((p) => p.id === 3)?.pawnColor;
  }
  if ((fieldId >= 4001 && fieldId <= 4008) || fieldId === 31) {
    return players.find((p) => p.id === 4)?.pawnColor;
  }

  return "#818181";
};
