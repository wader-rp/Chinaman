import { fieldColors } from "./helpers/generateFieldColors";
import "../board/board.css";
import { useBoardSize } from "../../hooks/useBoardSize";
import { getPawnColor } from "./helpers/generatePawnColors";
import { useGameContext } from "../../contexts/gameContext/gameContext";
import {
  dispatchPawnFromBaseField,
  getPlayerIdByPawnId,
  movePawnOfCertainNumberOfFields,
} from "../../contexts/gameContext/helpers/helpers";
import { Field } from "./data/types/fieldsTypes";
import { FieldTypesEnum } from "./data/enums/fieldTypeEnum";

export const Board = () => {
  const size = useBoardSize();
  const {
    setFieldStatus,
    fieldStatus,
    valueFromDiceRoll,
    activePlayer,
    players,
  } = useGameContext();
  console.log(fieldStatus);
  const handlePawnClick = (field: Field) => {
    setFieldStatus((prev) => {
      const fieldStatusCopy = [...prev];

      if (field.fieldType === FieldTypesEnum.BASE && valueFromDiceRoll === 6) {
        dispatchPawnFromBaseField(
          field.fieldType,
          field.presentPawn as string,
          fieldStatusCopy,
          valueFromDiceRoll as number
        );
      }

      if (field.fieldType !== FieldTypesEnum.BASE) {
        movePawnOfCertainNumberOfFields(
          field.presentPawn as string,
          field,
          valueFromDiceRoll as number,
          fieldStatusCopy
        );
      }

      return fieldStatusCopy;
    });
  };

  return (
    <div className="fields-container">
      <span>{`Now it's ${players[activePlayer - 1].playerName} turn`}</span>
      <div
        className="value-from-dice-wrapper"
        style={{ top: size * 5, left: size * 5 }}
      >
        <div className="value-from-dice">{valueFromDiceRoll}</div>
      </div>
      {fieldStatus.map((field) => {
        const activatePawnsForPlayer = () => {
          if (
            getPlayerIdByPawnId(field.presentPawn as string) === activePlayer
          ) {
            if (
              field.fieldType === FieldTypesEnum.BASE &&
              valueFromDiceRoll === 6
            ) {
              handlePawnClick(field);
            }
            if (field.fieldType !== FieldTypesEnum.BASE) {
              handlePawnClick(field);
            }
          }
        };

        const getCursorStyle = () => {
          if (
            getPlayerIdByPawnId(field.presentPawn as string) !== activePlayer ||
            valueFromDiceRoll === undefined
          )
            return "not-allowed";
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
            }}
          >
            <div className="field-wrapper">
              {field.id}
              {field.presentPawn && (
                <div
                  className="pawn"
                  style={{
                    backgroundColor: getPawnColor(field.presentPawn as string),
                    cursor: getCursorStyle(),
                  }}
                  onClick={activatePawnsForPlayer}
                ></div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
