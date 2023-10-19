import { useEffect } from "react";

export const useResize = (updateFunction: () => void, runInitially = false) => {
  useEffect(() => {
    if (runInitially) updateFunction();

    addEventListener("resize", updateFunction);

    return () => {
      removeEventListener("resize", updateFunction);
    };
  }, []);
};
