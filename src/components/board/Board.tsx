import { fieldColors } from "./helpers/generateFieldColors";
import { getPawnColor } from "./helpers/generatePawnColors";
import { useGameContext } from "../../contexts/gameContext/gameContext";
import { Field } from "./data/types/fieldsTypes";
import { FieldTypesEnum } from "./data/enums/fieldTypeEnum";
import { useRef, useState } from "react";
import { isPresentPawnPermittedToMove } from "../../contexts/gameContext/helpers/isPresentPawnPermittedToMove";
import { handleOnMouseEnter } from "./helpers/handleOnMouseEnter";
import { dispatchPawnFromBaseField } from "./helpers/dispatchPawnFromBaseField";
import { movePawnCertainNumberOfFields } from "../../contexts/gameContext/helpers/movePawnCertainNumberOfFields";
import { useResize } from "../../hooks/useResize";

import "../board/board.css";

export const Board = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [cellSize, setCellSize] = useState(0);
  const [destinationIndicatorId, setDestinationIndicatorId] = useState<
    number | undefined
  >();
  const updateCellSize = () =>
    setCellSize((ref.current?.clientWidth ?? 0) / 11.5);
  useResize(updateCellSize, true);
  const {
    setFieldStatus,
    fieldStatus,
    valueFromDiceRoll,
    moveCountDecrement,
    roundState,
    setIsRolled,
    afterMove,
    players,
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

    setIsRolled(false);
    afterMove();
    setFieldStatus(fieldStatusCopy);
    setDestinationIndicatorId(undefined);
  };

  return (
    <div
      className="fields-container"
      style={{ height: cellSize * 11 }}
      ref={ref}
    >
      {fieldStatus.map((field) => {
        const permissionToMove = isPresentPawnPermittedToMove(
          field,
          valueFromDiceRoll,
          fieldStatus,
          roundState
        );

        return (
          <div
            key={field.id}
            className="singleField"
            style={{
              width: cellSize - 10.5,
              height: cellSize - 10.5,
              top: cellSize * field.position.y,
              left: cellSize * field.position.x,
              borderColor: fieldColors(field.id, players),
              backgroundColor:
                field.id === destinationIndicatorId ? "#008080" : "unset",
            }}
          >
            {field.presentPawns.map((pawn, index) => {
              return (
                <div
                  key={`${index}_${pawn}`}
                  className="pawn"
                  style={{
                    backgroundColor: getPawnColor(
                      field.presentPawns[0],
                      players
                    ),
                    cursor: permissionToMove ? undefined : "not-allowed",
                    top: index * 5,
                    left: index * 5,
                  }}
                  onMouseEnter={() =>
                    handleOnMouseEnter(
                      field,
                      valueFromDiceRoll,
                      roundState,
                      fieldStatus,
                      setDestinationIndicatorId
                    )
                  }
                  onMouseLeave={() => setDestinationIndicatorId(undefined)}
                  onClick={() => {
                    permissionToMove ? handlePawnClick(field) : undefined;
                  }}
                ></div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
