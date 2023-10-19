import { PLAYERS_BASE_FIELDS } from "../data/fields";
import { Field } from "../data/types/fieldsTypes";
import { getEmptyFieldByTypeAndPlayerId } from "./getEmptyFieldByTypeAndPlayerId";
import { getPlayerIdByPawnId } from "./getPlayerIdByPawnId";

export const sendPawnsBackToBase = (
  presentPawnsToErase: Field["presentPawns"]
) => {
  const playerIdOfPawnsToErase = getPlayerIdByPawnId(presentPawnsToErase[0]);

  presentPawnsToErase.map((p) =>
    getEmptyFieldByTypeAndPlayerId(
      playerIdOfPawnsToErase,
      PLAYERS_BASE_FIELDS
    ).presentPawns.push(p)
  );
};
