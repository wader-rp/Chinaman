import { Player } from "../../../components/playerSetupForm/data/types/playerTypes";

export type Round = {
  activePlayer: Player["id"];
  rollCount: number;
  moveCount: number;
  isDiceRolled: boolean;
  permissionToMove: boolean;
};

