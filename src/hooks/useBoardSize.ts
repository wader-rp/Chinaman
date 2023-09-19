import { useEffect, useState } from "react";

export const useBoardSize = () => {
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

  return size;
};
