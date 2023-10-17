import { getStartFieldByPlayerId } from "../../../contexts/gameContext/helpers/getStartFieldByPlayerId";
import { getPlayerIdByPawnId } from "../../../contexts/gameContext/helpers/getPlayerIdByPawnId";
import { sendPawnsBackToBase } from "../../../contexts/gameContext/helpers/sendPawnsBackToBase";
import { Field } from "../data/types/fieldsTypes";

export const dispatchPawnFromBaseField = (
  pawnId: string,
  fieldArray: Field[]
) => {
  const playerId = getPlayerIdByPawnId(pawnId);

  const startFieldId = getStartFieldByPlayerId(playerId).id;

  const baseFieldIndex = fieldArray.findIndex(
    (f) => f.presentPawns[0] === pawnId
  );

  fieldArray[baseFieldIndex].presentPawns.pop();

  const startFieldIndex = fieldArray.findIndex((f) => f.id === startFieldId);
  const presentPawnsOnStartFieldIndex =
    fieldArray[startFieldIndex].presentPawns;
  if (
    presentPawnsOnStartFieldIndex.length > 0 &&
    getPlayerIdByPawnId(presentPawnsOnStartFieldIndex[0]) !== playerId
  ) {
    sendPawnsBackToBase(presentPawnsOnStartFieldIndex);
    presentPawnsOnStartFieldIndex.splice(
      0,
      presentPawnsOnStartFieldIndex.length,
      pawnId
    );
  } else {
    presentPawnsOnStartFieldIndex.push(pawnId);
  }
};
