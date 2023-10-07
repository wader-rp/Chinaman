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

export const Board = () => {
  const size = useBoardSize();
  const {
    setFieldStatus,
    fieldStatus,
    valueFromDiceRoll,
    activePlayer,
    players,
    setNextActivePlayer,
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
    }

    setFieldStatus(fieldStatusCopy);
    setNextActivePlayer();
    console.log(fieldStatusCopy);
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
        const getCursorStyle = () => {
          if (
            getPlayerIdByPawnId(field.presentPawns[0]) !== activePlayer ||
            valueFromDiceRoll === undefined
          )
            return "not-allowed";
        };

        // const getPawnOffset = ():  => {
        //   if ()
        // }

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
              {field.presentPawns.map((pawn, index) => {
                // tu se to wywołaj na podstawie pionka
                // i wyloguj czy git
                return (
                  <div
                    key={`${index}_${pawn}`}
                    className="pawn"
                    style={{
                      backgroundColor: getPawnColor(field.presentPawns[0]),
                      cursor: getCursorStyle(),
                      top: index * 5,
                      left: index * 5,
                    }}
                    onClick={() => {
                      if (
                        getPlayerIdByPawnId(field.presentPawns[0]) ===
                        activePlayer
                      ) {
                        handlePawnClick(field);
                      }
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
