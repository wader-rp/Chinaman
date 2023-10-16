import { fieldColors } from "./helpers/generateFieldColors";
import "../board/board.css";
import { useBoardSize } from "../../hooks/useBoardSize";
import { getPawnColor } from "./helpers/generatePawnColors";
import { useGameContext } from "../../contexts/gameContext/gameContext";
import {
  dispatchPawnFromBaseField,
  getPlayerIdByPawnId,
  movePawnCertainNumberOfFields,
} from "../../contexts/gameContext/helpers/helpers";
import { Field } from "./data/types/fieldsTypes";
import { FieldTypesEnum } from "./data/enums/fieldTypeEnum";
import { getDestinationForPawnAfterDiceThrow } from "./helpers/getDestinationForPawnAfterDiceThrow";
import { PLAYER_ROUTES } from "./data/playersRoutes";
import { useState } from "react";
import { getPermissionToMoveAPawn } from "./helpers/getPermissionToMoveAPawn";

export const Board = () => {
  const size = useBoardSize();
  const [destinationIndicatorId, setDestinationIndicatorId] = useState<
    number | undefined
  >();
  const {
    setFieldStatus,
    fieldStatus,
    valueFromDiceRoll,
    players,
    moveCountDecrement,
    roundState,
    isRolledToFalse,
    afterMove,
  } = useGameContext();

  const handlePawnClick = (field: Field) => {
    const fieldStatusCopy = [...fieldStatus];

    if (field.fieldType === FieldTypesEnum.BASE && valueFromDiceRoll === 6) {
      dispatchPawnFromBaseField(field.presentPawns[0], fieldStatusCopy);
    }

    if (field.fieldType !== FieldTypesEnum.BASE) {
      movePawnCertainNumberOfFields(
        field.presentPawns[0],
        field,
        valueFromDiceRoll as number,
        fieldStatusCopy
      );
      moveCountDecrement();
    }

    isRolledToFalse();
    afterMove();
    setFieldStatus(fieldStatusCopy);
    setDestinationIndicatorId(undefined);
  };

  return (
    <div className="fields-container">
      <span>{`Now it's ${
        players[roundState.activePlayer - 1].playerName
      } turn`}</span>
      <div
        className="value-from-dice-wrapper"
        style={{ top: size * 5, left: size * 5 }}
      >
        <div className="value-from-dice">
          {valueFromDiceRoll}
          {`${destinationIndicatorId}`}
        </div>
      </div>
      {fieldStatus.map((field) => {
        const permissionToMove = field.presentPawns.length
          ? getPermissionToMoveAPawn(
              field,
              valueFromDiceRoll,
              fieldStatus,
              roundState
            )
          : false;

        const handleOnMouseEnter = () => {
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

        return (
          <div
            key={field.id}
            className="singleField"
            style={{
              width: size,
              height: size,
              top: size * field.position.y,
              left: size * field.position.x,
              borderColor: fieldColors(field.id),
              backgroundColor:
                field.id === destinationIndicatorId ? "#008080" : "unset",
            }}
          >
            <div className="field-wrapper">
              {field.id}
              {field.presentPawns.map((pawn, index) => {
                return (
                  <div
                    key={`${index}_${pawn}`}
                    className="pawn"
                    style={{
                      backgroundColor: getPawnColor(field.presentPawns[0]),
                      cursor: permissionToMove ? undefined : "not-allowed",
                      top: index * 5,
                      left: index * 5,
                    }}
                    onMouseEnter={handleOnMouseEnter}
                    onMouseLeave={() => setDestinationIndicatorId(undefined)}
                    onClick={() => {
                      permissionToMove ? handlePawnClick(field) : undefined;
                    }}
                  >
                    {pawn}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
