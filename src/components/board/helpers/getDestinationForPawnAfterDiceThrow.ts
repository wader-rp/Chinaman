import { Pawn } from "../data/pawns";
import { getPlayerIdByPawnId } from "../../../contexts/gameContext/helpers/getPlayerIdByPawnId";
import { Field } from "../data/types/fieldsTypes";
import { FieldTypesEnum } from "../data/enums/fieldTypeEnum";
import { getStartFieldByPlayerId } from "../../../contexts/gameContext/helpers/getStartFieldByPlayerId";

export const getDestinationForPawnAfterDiceThrow = (
  pawnId: Pawn["id"],
  PLAYER_ROUTES: number[][],
  field: Field,
  fieldArray: Field[],
  valueFromDice: number
): Field | undefined => {
  const playerId = getPlayerIdByPawnId(pawnId);

  const playerIndexOnPlayerRoutes = playerId - 1;

  const indexBeforeDiceThrowOnPlayerRoutes = PLAYER_ROUTES[
    playerIndexOnPlayerRoutes
  ].findIndex((f) => f === field.id);

  const indexAfterDiceThrowOnPlayerRoutes =
    indexBeforeDiceThrowOnPlayerRoutes + valueFromDice;

  const indexOfDestinationFieldOnBoard = fieldArray.findIndex(
    (f) =>
      f.id ===
      PLAYER_ROUTES[playerIndexOnPlayerRoutes][
        indexAfterDiceThrowOnPlayerRoutes
      ]
  );

  if (field.fieldType === FieldTypesEnum.BASE) {
    if (valueFromDice === 6) {
      const startFieldId = getStartFieldByPlayerId(playerId).id;
      const startFieldIndex = fieldArray.findIndex(
        (f) => f.id === startFieldId
      );
      return fieldArray[startFieldIndex];
    } else {
      return undefined;
    }
  }

  if (
    indexAfterDiceThrowOnPlayerRoutes >
      PLAYER_ROUTES[playerIndexOnPlayerRoutes].length - 1 ||
    (fieldArray[indexOfDestinationFieldOnBoard].fieldType ===
      FieldTypesEnum.FINISH &&
      fieldArray[indexOfDestinationFieldOnBoard].presentPawns.length > 0)
  ) {
    return undefined;
  } else {
    return fieldArray[indexOfDestinationFieldOnBoard];
  }
};
