import { Field } from "../../../components/board/data/types/fieldsTypes";
import { getPermissionToMoveAPawn } from "../../../components/board/helpers/getPermissionToMoveAPawn";
import { Round } from "../types/round";

export const isPresentPawnPermittedToMove = (
  field: Field,
  valueFromDiceRoll: number,
  fieldStatus: Field[],
  roundState: Round
): boolean => {
  return field.presentPawns.length
    ? getPermissionToMoveAPawn(
        field,
        valueFromDiceRoll,
        fieldStatus,
        roundState
      )
    : false;
};
