import { fieldColors } from "./helpers/generateFieldColors";
import "../board/board.css";
import { useBoardSize } from "../../hooks/useBoardSize";
import { getPawnColor } from "./helpers/generatePawnColors";
import { useGameContext } from "../../contexts/gameContext/gameContext";
import { FieldTypesEnum } from "./data/enums/fieldTypeEnum";
import { getStartFieldByPlayerId } from "../../contexts/gameContext/helpers/helpers";

export const Board = () => {
  const size = useBoardSize();
  const { setFieldStatus, fieldStatus } = useGameContext();

  // const handlePawnClick = (pawnId: string | undefined) => {
  //   const copy = [...fieldStatus];
  //   const idx = copy.findIndex((field) => field.presentPawn === pawnId);
  //   const updated = { ...copy[idx], presentPawn: "" };
  //   copy.splice(idx, 1, updated);
  //
  //   setFieldStatus([...copy, updated]);
  // };
  // console.log(fieldStatus);

  const handlePawnClick = (
    fieldType: FieldTypesEnum,
    pawnId: string
    //player turn
  ) => {
    setFieldStatus((prev) => {
      const copy = [...prev];
      copy.map((field) => {
        if (fieldType === FieldTypesEnum.START) {
          if (field.presentPawn === pawnId) {
            return { ...field, presentPawn: undefined };
          }
          return field;
        }
      });
      return copy;
    });
  };
  console.log(fieldStatus);

  return (
    <div className="fields-container">
      {fieldStatus.map((field) => {
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
                    backgroundColor: getPawnColor(field.presentPawn),
                  }}
                  onClick={() =>
                    handlePawnClick(
                      field.fieldType,
                      field.presentPawn as string
                    )
                  }
                ></div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
