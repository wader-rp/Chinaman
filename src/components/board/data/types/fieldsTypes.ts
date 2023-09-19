import { Player } from "../../../playerSetupForm/data/types/playerTypes";
import { FieldTypesEnum } from "../enums/fieldTypeEnum";
import { Pawn } from "../pawns";

export type Position = {
  x: number;
  y: number;
};

export type Field = {
  id: number;
  fieldType: FieldTypesEnum;
  position: Position;
  startFor?: Player['id'];
  presentPawn?: Pawn["id"];
};
