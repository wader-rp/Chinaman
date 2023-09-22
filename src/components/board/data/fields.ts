import { Field } from "./types/fieldsTypes";
import { FieldTypesEnum } from "./enums/fieldTypeEnum";

export const PLAYER1_BASE_FIELDS: Field[] = [
  {
    id: 1001,
    fieldType: FieldTypesEnum.BASE,
    position: {
      x: 0,
      y: 0,
    },
    presentPawn: "p1_1",
  },
  {
    id: 1002,
    fieldType: FieldTypesEnum.BASE,
    position: {
      x: 1,
      y: 0,
    },
    presentPawn: "p1_2",
  },
  {
    id: 1003,
    fieldType: FieldTypesEnum.BASE,
    position: {
      x: 0,
      y: 1,
    },
    presentPawn: "p1_3",
  },
  {
    id: 1004,
    fieldType: FieldTypesEnum.BASE,
    position: {
      x: 1,
      y: 1,
    },
    presentPawn: "p1_4",
  },
];
export const PLAYER2_BASE_FIELDS: Field[] = [
  {
    id: 2001,
    fieldType: FieldTypesEnum.BASE,
    position: {
      x: 9,
      y: 0,
    },
    presentPawn: "p2_1",
  },
  {
    id: 2002,
    fieldType: FieldTypesEnum.BASE,
    position: {
      x: 10,
      y: 0,
    },
    presentPawn: "p2_2",
  },
  {
    id: 2003,
    fieldType: FieldTypesEnum.BASE,
    position: {
      x: 9,
      y: 1,
    },
    presentPawn: "p2_3",
  },
  {
    id: 2004,
    fieldType: FieldTypesEnum.BASE,
    position: {
      x: 10,
      y: 1,
    },
    presentPawn: "p2_4",
  },
];
export const PLAYER3_BASE_FIELDS: Field[] = [
  {
    id: 3001,
    fieldType: FieldTypesEnum.BASE,
    position: {
      x: 9,
      y: 9,
    },
    presentPawn: "p3_1",
  },
  {
    id: 3002,
    fieldType: FieldTypesEnum.BASE,
    position: {
      x: 10,
      y: 9,
    },
    presentPawn: "p3_2",
  },
  {
    id: 3003,
    fieldType: FieldTypesEnum.BASE,
    position: {
      x: 9,
      y: 10,
    },
    presentPawn: "p3_3",
  },
  {
    id: 3004,
    fieldType: FieldTypesEnum.BASE,
    position: {
      x: 10,
      y: 10,
    },
    presentPawn: "p3_4",
  },
];
export const PLAYER4_BASE_FIELDS: Field[] = [
  {
    id: 4001,
    fieldType: FieldTypesEnum.BASE,
    position: {
      x: 0,
      y: 9,
    },
    presentPawn: "p4_1",
  },
  {
    id: 4002,
    fieldType: FieldTypesEnum.BASE,
    position: {
      x: 1,
      y: 9,
    },
    presentPawn: "p4_2",
  },
  {
    id: 4003,
    fieldType: FieldTypesEnum.BASE,
    position: {
      x: 0,
      y: 10,
    },
    presentPawn: "p4_3",
  },
  {
    id: 4004,
    fieldType: FieldTypesEnum.BASE,
    position: {
      x: 1,
      y: 10,
    },
    presentPawn: "p4_4",
  },
];

export const PLAYER1_FINISH_FIELDS: Field[] = [
  {
    id: 1005,
    fieldType: FieldTypesEnum.FINISH,
    position: {
      x: 1,
      y: 5,
    },
  },
  {
    id: 1006,
    fieldType: FieldTypesEnum.FINISH,
    position: {
      x: 2,
      y: 5,
    },
  },
  {
    id: 1007,
    fieldType: FieldTypesEnum.FINISH,
    position: {
      x: 3,
      y: 5,
    },
  },
  {
    id: 1008,
    fieldType: FieldTypesEnum.FINISH,
    position: {
      x: 4,
      y: 5,
    },
  },
];
export const PLAYER2_FINISH_FIELDS: Field[] = [
  {
    id: 2005,
    fieldType: FieldTypesEnum.FINISH,
    position: {
      x: 5,
      y: 1,
    },
  },
  {
    id: 2006,
    fieldType: FieldTypesEnum.FINISH,
    position: {
      x: 5,
      y: 2,
    },
  },
  {
    id: 2007,
    fieldType: FieldTypesEnum.FINISH,
    position: {
      x: 5,
      y: 3,
    },
  },
  {
    id: 2008,
    fieldType: FieldTypesEnum.FINISH,
    position: {
      x: 5,
      y: 4,
    },
  },
];
export const PLAYER3_FINISH_FIELDS: Field[] = [
  {
    id: 3005,
    fieldType: FieldTypesEnum.FINISH,
    position: {
      x: 9,
      y: 5,
    },
  },
  {
    id: 3006,
    fieldType: FieldTypesEnum.FINISH,
    position: {
      x: 8,
      y: 5,
    },
  },
  {
    id: 3007,
    fieldType: FieldTypesEnum.FINISH,
    position: {
      x: 7,
      y: 5,
    },
  },
  {
    id: 3008,
    fieldType: FieldTypesEnum.FINISH,
    position: {
      x: 6,
      y: 5,
    },
  },
];
export const PLAYER4_FINISH_FIELDS: Field[] = [
  {
    id: 4005,
    fieldType: FieldTypesEnum.FINISH,
    position: {
      x: 5,
      y: 9,
    },
  },
  {
    id: 4006,
    fieldType: FieldTypesEnum.FINISH,
    position: {
      x: 5,
      y: 8,
    },
  },
  {
    id: 4007,
    fieldType: FieldTypesEnum.FINISH,
    position: {
      x: 5,
      y: 7,
    },
  },
  {
    id: 4008,
    fieldType: FieldTypesEnum.FINISH,
    position: {
      x: 5,
      y: 6,
    },
  },
];

export const PLAYER1_START_FIELD: Field = {
  id: 1,
  fieldType: FieldTypesEnum.START,
  startFor: 1,
  position: {
    x: 0,
    y: 4,
  },
};

export const PLAYER2_START_FIELD: Field = {
  id: 11,
  fieldType: FieldTypesEnum.START,
  startFor: 2,
  position: {
    x: 6,
    y: 0,
  },
};
export const PLAYER3_START_FIELD: Field = {
  id: 21,
  fieldType: FieldTypesEnum.START,
  startFor: 3,
  position: {
    x: 10,
    y: 6,
  },
};

export const PLAYER4_START_FIELD: Field = {
  id: 31,
  fieldType: FieldTypesEnum.START,
  startFor: 4,
  position: {
    x: 4,
    y: 10,
  },
};

export const PLAYERS_START_FIELDS: Field[] = [
  PLAYER1_START_FIELD,
  PLAYER2_START_FIELD,
  PLAYER3_START_FIELD,
  PLAYER4_START_FIELD,
];

export const TRACK_FIELDS: Field[] = [
  {
    id: 2,
    fieldType: FieldTypesEnum.TRACK,
    position: {
      x: 1,
      y: 4,
    },
  },
  {
    id: 3,
    fieldType: FieldTypesEnum.TRACK,
    position: {
      x: 2,
      y: 4,
    },
  },
  {
    id: 4,
    fieldType: FieldTypesEnum.TRACK,
    position: {
      x: 3,
      y: 4,
    },
  },
  {
    id: 5,
    fieldType: FieldTypesEnum.TRACK,
    position: {
      x: 4,
      y: 4,
    },
  },
  {
    id: 6,
    fieldType: FieldTypesEnum.TRACK,
    position: {
      x: 4,
      y: 3,
    },
  },
  {
    id: 7,
    fieldType: FieldTypesEnum.TRACK,
    position: {
      x: 4,
      y: 2,
    },
  },
  {
    id: 8,
    fieldType: FieldTypesEnum.TRACK,
    position: {
      x: 4,
      y: 1,
    },
  },
  {
    id: 9,
    fieldType: FieldTypesEnum.TRACK,
    position: {
      x: 4,
      y: 0,
    },
  },
  {
    id: 10,
    fieldType: FieldTypesEnum.TRACK,
    position: {
      x: 5,
      y: 0,
    },
  },

  {
    id: 12,
    fieldType: FieldTypesEnum.TRACK,
    position: {
      x: 6,
      y: 1,
    },
  },
  {
    id: 13,
    fieldType: FieldTypesEnum.TRACK,
    position: {
      x: 6,
      y: 2,
    },
  },
  {
    id: 14,
    fieldType: FieldTypesEnum.TRACK,
    position: {
      x: 6,
      y: 3,
    },
  },
  {
    id: 15,
    fieldType: FieldTypesEnum.TRACK,
    position: {
      x: 6,
      y: 4,
    },
  },
  {
    id: 16,
    fieldType: FieldTypesEnum.TRACK,
    position: {
      x: 7,
      y: 4,
    },
  },
  {
    id: 17,
    fieldType: FieldTypesEnum.TRACK,
    position: {
      x: 8,
      y: 4,
    },
  },
  {
    id: 18,
    fieldType: FieldTypesEnum.TRACK,
    position: {
      x: 9,
      y: 4,
    },
  },
  {
    id: 19,
    fieldType: FieldTypesEnum.TRACK,
    position: {
      x: 10,
      y: 4,
    },
  },
  {
    id: 20,
    fieldType: FieldTypesEnum.TRACK,
    position: {
      x: 10,
      y: 5,
    },
  },

  {
    id: 22,
    fieldType: FieldTypesEnum.TRACK,
    position: {
      x: 9,
      y: 6,
    },
  },
  {
    id: 23,
    fieldType: FieldTypesEnum.TRACK,
    position: {
      x: 8,
      y: 6,
    },
  },
  {
    id: 24,
    fieldType: FieldTypesEnum.TRACK,
    position: {
      x: 7,
      y: 6,
    },
  },
  {
    id: 25,
    fieldType: FieldTypesEnum.TRACK,
    position: {
      x: 6,
      y: 6,
    },
  },
  {
    id: 26,
    fieldType: FieldTypesEnum.TRACK,
    position: {
      x: 6,
      y: 7,
    },
  },
  {
    id: 27,
    fieldType: FieldTypesEnum.TRACK,
    position: {
      x: 6,
      y: 8,
    },
  },
  {
    id: 28,
    fieldType: FieldTypesEnum.TRACK,
    position: {
      x: 6,
      y: 9,
    },
  },
  {
    id: 29,
    fieldType: FieldTypesEnum.TRACK,
    position: {
      x: 6,
      y: 10,
    },
  },
  {
    id: 30,
    fieldType: FieldTypesEnum.TRACK,
    position: {
      x: 5,
      y: 10,
    },
  },

  {
    id: 32,
    fieldType: FieldTypesEnum.TRACK,
    position: {
      x: 4,
      y: 9,
    },
  },
  {
    id: 33,
    fieldType: FieldTypesEnum.TRACK,
    position: {
      x: 4,
      y: 8,
    },
  },
  {
    id: 34,
    fieldType: FieldTypesEnum.TRACK,
    position: {
      x: 4,
      y: 7,
    },
  },
  {
    id: 35,
    fieldType: FieldTypesEnum.TRACK,
    position: {
      x: 4,
      y: 6,
    },
  },
  {
    id: 36,
    fieldType: FieldTypesEnum.TRACK,
    position: {
      x: 3,
      y: 6,
    },
  },
  {
    id: 37,
    fieldType: FieldTypesEnum.TRACK,
    position: {
      x: 2,
      y: 6,
    },
  },
  {
    id: 38,
    fieldType: FieldTypesEnum.TRACK,
    position: {
      x: 1,
      y: 6,
    },
  },
  {
    id: 39,
    fieldType: FieldTypesEnum.TRACK,
    position: {
      x: 0,
      y: 6,
    },
  },
  {
    id: 40,
    fieldType: FieldTypesEnum.TRACK,
    position: {
      x: 0,
      y: 5,
    },
  },
];

export const INITIAL_FIELDS: Field[] = [
  ...PLAYER1_BASE_FIELDS,
  ...PLAYER2_BASE_FIELDS,
  ...PLAYER3_BASE_FIELDS,
  ...PLAYER4_BASE_FIELDS,
  ...PLAYERS_START_FIELDS,
  ...PLAYER1_FINISH_FIELDS,
  ...PLAYER2_FINISH_FIELDS,
  ...PLAYER3_FINISH_FIELDS,
  ...PLAYER4_FINISH_FIELDS,
  ...TRACK_FIELDS,
];
