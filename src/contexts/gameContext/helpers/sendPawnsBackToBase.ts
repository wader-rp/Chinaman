import { PLAYERS_BASE_FIELDS } from "../../../components/board/data/fields";
import { Field } from "../../../components/board/data/types/fieldsTypes";
import { getEmptyFieldByTypeAndPlayerId } from "../../../components/board/helpers/getEmptyFieldByTypeAndPlayerId";
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
