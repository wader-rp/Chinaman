import { Field } from "../../../components/board/data/types/fieldsTypes";
import { Round } from "../types/round";
import { areBaseFieldsOccupied } from "./areBaseFieldsOccupied";
import { isPresentPawnPermittedToMove } from "./getPermissionToMoveAPawn";

export const rulesCheckManager = (
  roundState: Round,
  fieldStatus: Field[],
  previousValueFromDiceRoll: number,
  valueFromDiceRoll: number,
  setNextActivePlayer: () => void,
  setRoundState: React.Dispatch<React.SetStateAction<Round>>,
  setMoveCountToLast: () => void
) => {
  const isBaseFull = !areBaseFieldsOccupied(roundState.activePlayer);

  const permissionToMove = fieldStatus.map((field) =>
    isPresentPawnPermittedToMove(
      field,
      valueFromDiceRoll,
      fieldStatus,
      roundState
    )
  );

  const isPermittedToMove = permissionToMove.find((b) => b === true);

  if (roundState.moveCount === 0) setNextActivePlayer();

  if (isBaseFull) {
    if (roundState.rollCount === 3 && valueFromDiceRoll !== 6) {
      setNextActivePlayer();
    } else {
      if (isPermittedToMove)
        setRoundState((prev) => ({ ...prev, permissionToMove: true }));
    }
  } else {
    if (isPermittedToMove) {
      setRoundState((prev) => ({ ...prev, permissionToMove: true }));
      if (previousValueFromDiceRoll === 6 && valueFromDiceRoll !== 6)
        setMoveCountToLast();
      if (valueFromDiceRoll !== 6) setMoveCountToLast();
    } else {
      if (roundState.rollCount === 3 && valueFromDiceRoll !== 6) {
        setNextActivePlayer();
      }
    }
  }
};
