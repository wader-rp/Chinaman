import { Pawn } from "../../../components/board/data/pawns";
import { getPlayerIdByPawnId } from "./helpers";
import { Field } from "../../../components/board/data/types/fieldsTypes";

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

  if (
    indexAfterDiceThrowOnPlayerRoutes >
    PLAYER_ROUTES[playerIndexOnPlayerRoutes].length - 1
  ) {
    return undefined;
  } else {
    return fieldArray[indexOfDestinationFieldOnBoard];
  }
};
