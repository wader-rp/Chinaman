import { Player } from "../../playerSetupForm/data/types/playerTypes";
import { Field } from "../data/types/fieldsTypes";

export const getEmptyFieldByTypeAndPlayerId = (
  playerId: Player["id"],
  fieldsType: Field[]
): Field => {
  const index = fieldsType.findIndex(
    (f) => f.baseFor === playerId && f.presentPawns.length === 0
  );
  return fieldsType[index];
};
