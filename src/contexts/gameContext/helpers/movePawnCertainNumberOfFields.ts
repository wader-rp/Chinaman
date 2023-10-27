import { PLAYER_ROUTES } from "../../../components/board/data/playersRoutes";
import { Field } from "../../../components/board/data/types/fieldsTypes";
import { getDestinationForPawnAfterDiceThrow } from "../../../components/board/helpers/getDestinationForPawnAfterDiceThrow";
import { getPlayerIdByPawnId } from "../../../components/board/helpers/getPlayerIdByPawnId";
import { sendPawnsBackToBase } from "../../../components/board/helpers/sendPawnsBackToBase";

export const movePawnCertainNumberOfFields = (
  pawnId: string,
  field: Field,
  valueFromDice: number,
  fieldArray: Field[]
) => {
  const indexBeforeDiceThrowOnBoard = fieldArray.findIndex(
    (f) => f.id === field.id
  );
  /*TODO: nie można zbić stacmka*/
  const destinationFieldOnBoard = getDestinationForPawnAfterDiceThrow(
    pawnId,
    PLAYER_ROUTES,
    field,
    fieldArray,
    valueFromDice
  );

  if (destinationFieldOnBoard) {
    if (destinationFieldOnBoard.presentPawns.length === 0) {
      fieldArray[indexBeforeDiceThrowOnBoard].presentPawns.splice(0, 1);
      destinationFieldOnBoard.presentPawns.push(pawnId);
    } else {
      if (
        getPlayerIdByPawnId(pawnId) ===
        getPlayerIdByPawnId(destinationFieldOnBoard.presentPawns[0])
      ) {
        destinationFieldOnBoard.presentPawns.push(pawnId);
        fieldArray[indexBeforeDiceThrowOnBoard].presentPawns.splice(0, 1);
      } else {
        sendPawnsBackToBase(destinationFieldOnBoard.presentPawns);
        destinationFieldOnBoard.presentPawns.splice(
          0,
          destinationFieldOnBoard.presentPawns.length,
          pawnId
        );
        fieldArray[indexBeforeDiceThrowOnBoard].presentPawns.splice(0, 1);
      }
    }
  }
};
