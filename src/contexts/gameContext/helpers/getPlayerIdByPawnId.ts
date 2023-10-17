import { Player } from "../../../components/playerSetupForm/data/types/playerTypes";
import { PAWNS, Pawn } from "../../../components/board/data/pawns";

export const getPlayerIdByPawnId = (pawnId: Pawn["id"]): Player["id"] => {
  const pawnIndex = PAWNS.findIndex((pawn) => pawn.id === pawnId);

  return PAWNS[pawnIndex].owner;
};
