import { PLAYERS_BASE_FIELDS } from "../../../components/board/data/fields";
import { Player } from "../../../components/playerSetupForm/data/types/playerTypes";

export const areBaseFieldsOccupied = (activePlayer: Player["id"]): boolean => {
  const activePlayerBaseFields = PLAYERS_BASE_FIELDS.filter(
    (f) => f.baseFor === activePlayer
  ).find((f) => f.presentPawns.length === 0);
  return activePlayerBaseFields ? true : false;
};
