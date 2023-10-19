import { Player } from "../../playerSetupForm/data/types/playerTypes";
import { PAWNS, Pawn } from "../data/pawns";

export const getPlayerIdByPawnId = (pawnId: Pawn["id"]): Player["id"] => {
  const pawnIndex = PAWNS.findIndex((pawn) => pawn.id === pawnId);

  return PAWNS[pawnIndex].owner;
};
