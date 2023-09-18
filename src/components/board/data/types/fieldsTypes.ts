import { FieldTypesEnum } from "../enums/fieldTypeEnum";

export type Position = {
  x: number;
  y: number;
};

export type Field = {
  id: number;
  fieldType: FieldTypesEnum;
  position: Position;
  presentPawns: unknown[];
};
