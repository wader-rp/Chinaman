import { PLAYERS_START_FIELDS } from "../../../components/board/data/fields";
import { Field } from "../../../components/board/data/types/fieldsTypes";
import { Player } from "../../../components/playerSetupForm/data/types/playerTypes";

export const getStartFieldByPlayerId = (playerId: Player["id"]): Field => {
  const index = PLAYERS_START_FIELDS.findIndex((f) => f.startFor === playerId);
  return PLAYERS_START_FIELDS[index];
};
