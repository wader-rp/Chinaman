import React, { useEffect, useState } from "react";
import { FIELDS } from "./data/fields";
import { fieldColors } from "./helpers/generateFieldColors";
import "../board/board.css";

export const Board = () => {
  const [boardSize, setBoardSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    addEventListener("resize", () => {
      setBoardSize({ width: window.innerWidth, height: window.innerHeight });
    });
  }, []);

  const smallerSide =
    boardSize.height < boardSize.width ? boardSize.height : boardSize.width;
  const size = smallerSide / 12;

  return (
    <div className="fields-container">
      {FIELDS.map((field) => {
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
            <div className="field-wrapper">{field.id}</div>
          </div>
        );
      })}
    </div>
  );
};
