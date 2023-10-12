import { useEffect, useRef } from "react";

export const usePrevious = (value: number) => {
  const previousValueFromDiceRoll = useRef(value);

  useEffect(() => {
    previousValueFromDiceRoll.current = value;
  }, [value]);
  return previousValueFromDiceRoll.current;
};
