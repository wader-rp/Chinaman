import { FieldTypesEnum } from "../data/enums/fieldTypeEnum";
import { PLAYER_ROUTES } from "../data/playersRoutes";
import { Field } from "../data/types/fieldsTypes";
import { getDestinationForPawnAfterDiceThrow } from "./getDestinationForPawnAfterDiceThrow";
import { getPlayerIdByPawnId } from "../../../contexts/gameContext/helpers/helpers";
import { Round } from "../../../contexts/gameContext/gameContext";

export const getPermissionToMoveAPawn = (
  field: Field,
  valueFromDiceRoll: number | undefined,
  fieldStatus: Field[],
  roundState: Round
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

  const activePlayerIsNotPawnOwner =
    getPlayerIdByPawnId(field.presentPawns[0]) !== roundState.activePlayer;
  const thereNoDiceValue = valueFromDiceRoll === undefined;
  const thereIsNoDestination = destinationForPawnAfterDiceThrow === undefined;
  const finishIsFieldNotEmpty =
    destinationForPawnAfterDiceThrow?.fieldType === FieldTypesEnum.FINISH &&
    destinationForPawnAfterDiceThrow.presentPawns.length > 0;
  const notProperValueToDeployFromBase =
    field.fieldType === FieldTypesEnum.BASE && valueFromDiceRoll !== 6;

  const isRolled = !roundState.isDiceRolled;

  return !(
    activePlayerIsNotPawnOwner ||
    thereNoDiceValue ||
    thereIsNoDestination ||
    finishIsFieldNotEmpty ||
    notProperValueToDeployFromBase ||
    isRolled
  );
};
