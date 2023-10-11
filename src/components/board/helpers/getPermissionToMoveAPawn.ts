import { FieldTypesEnum } from "../data/enums/fieldTypeEnum";
import { PLAYER_ROUTES } from "../data/playersRoutes";
import { Field } from "../data/types/fieldsTypes";
import { getDestinationForPawnAfterDiceThrow } from "./getDestinationForPawnAfterDiceThrow";
import { getPlayerIdByPawnId } from "../../../contexts/gameContext/helpers/helpers";

export const getPermissionToMoveAPawn = (
  field: Field,
  valueFromDiceRoll: number | undefined,
  fieldStatus: Field[],
  activePlayer: number
): boolean => {
  const destinationForPawnAfterDiceThrow = valueFromDiceRoll
    ? getDestinationForPawnAfterDiceThrow(
        field.presentPawns[0],
        PLAYER_ROUTES,
        field,
        fieldStatus,
        valueFromDiceRoll
      )
    : undefined;

  return !(
    getPlayerIdByPawnId(field.presentPawns[0]) !== activePlayer ||
    valueFromDiceRoll === undefined ||
    destinationForPawnAfterDiceThrow === undefined ||
    (destinationForPawnAfterDiceThrow.fieldType === FieldTypesEnum.FINISH &&
      destinationForPawnAfterDiceThrow.presentPawns.length > 0) ||
    (field.fieldType === FieldTypesEnum.BASE && valueFromDiceRoll !== 6)
  );
};
