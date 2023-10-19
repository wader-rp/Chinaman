import { getPlayerIdByPawnId } from "./getPlayerIdByPawnId";
import { Round } from "../../../contexts/gameContext/types/round";
import { PLAYER_ROUTES } from "../data/playersRoutes";
import { Field } from "../data/types/fieldsTypes";
import { getDestinationForPawnAfterDiceThrow } from "./getDestinationForPawnAfterDiceThrow";

export const handleOnMouseEnter = (
  field: Field,
  valueFromDiceRoll: number,
  roundState: Round,
  fieldStatus: Field[],
  setDestinationIndicatorId: React.Dispatch<
    React.SetStateAction<number | undefined>
  >
) => {
  const playerId = getPlayerIdByPawnId(field.presentPawns[0]);
  const destinationForPawnAfterDiceThrow =
    valueFromDiceRoll && roundState.activePlayer === playerId
      ? getDestinationForPawnAfterDiceThrow(
          field.presentPawns[0],
          PLAYER_ROUTES,
          field,
          fieldStatus,
          valueFromDiceRoll
        )
      : undefined;

  setDestinationIndicatorId(destinationForPawnAfterDiceThrow?.id);
};
