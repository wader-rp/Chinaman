import { PLAYERS_START_FIELDS } from "../data/fields";
import { Field } from "../data/types/fieldsTypes";
import { Player } from "../../playerSetupForm/data/types/playerTypes";

export const getStartFieldByPlayerId = (playerId: Player["id"]): Field => {
  const index = PLAYERS_START_FIELDS.findIndex((f) => f.startFor === playerId);
  return PLAYERS_START_FIELDS[index];
};
