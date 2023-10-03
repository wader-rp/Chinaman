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
    presentPawns: ["p1_1"],
  },
  {
    id: 1002,
    fieldType: FieldTypesEnum.BASE,
    position: {
      x: 1,
      y: 0,
    },
    presentPawns: ["p1_2"],
  },
  {
    id: 1003,
    fieldType: FieldTypesEnum.BASE,
    position: {
      x: 0,
      y: 1,
    },
    presentPawns: ["p1_3"],
  },
  {
    id: 1004,
    fieldType: FieldTypesEnum.BASE,
    position: {
      x: 1,
      y: 1,
    },
    presentPawns: ["p1_4"],
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
    presentPawns: ["p2_1"],
  },
  {
    id: 2002,
    fieldType: FieldTypesEnum.BASE,
    position: {
      x: 10,
      y: 0,
    },
    presentPawns: ["p2_2"],
  },
  {
    id: 2003,
    fieldType: FieldTypesEnum.BASE,
    position: {
      x: 9,
      y: 1,
    },
    presentPawns: ["p2_3"],
  },
  {
    id: 2004,
    fieldType: FieldTypesEnum.BASE,
    position: {
      x: 10,
      y: 1,
    },
    presentPawns: ["p2_4"],
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
    presentPawns: ["p3_1"],
  },
  {
    id: 3002,
    fieldType: FieldTypesEnum.BASE,
    position: {
      x: 10,
      y: 9,
    },
    presentPawns: ["p3_2"],
  },
  {
    id: 3003,
    fieldType: FieldTypesEnum.BASE,
    position: {
      x: 9,
      y: 10,
    },
    presentPawns: ["p3_3"],
  },
  {
    id: 3004,
    fieldType: FieldTypesEnum.BASE,
    position: {
      x: 10,
      y: 10,
    },
    presentPawns: ["p3_4"],
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
    presentPawns: ["p4_1"],
  },
  {
    id: 4002,
    fieldType: FieldTypesEnum.BASE,
    position: {
      x: 1,
      y: 9,
    },
    presentPawns: ["p4_2"],
  },
  {
    id: 4003,
    fieldType: FieldTypesEnum.BASE,
    position: {
      x: 0,
      y: 10,
    },
    presentPawns: ["p4_3"],
  },
  {
    id: 4004,
    fieldType: FieldTypesEnum.BASE,
    position: {
      x: 1,
      y: 10,
    },
    presentPawns: ["p4_4"],
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
    presentPawns: [],
  },
  {
    id: 1006,
    fieldType: FieldTypesEnum.FINISH,
    position: {
      x: 2,
      y: 5,
    },
    presentPawns: [],
  },
  {
    id: 1007,
    fieldType: FieldTypesEnum.FINISH,
    position: {
      x: 3,
      y: 5,
    },
    presentPawns: [],
  },
  {
    id: 1008,
    fieldType: FieldTypesEnum.FINISH,
    position: {
      x: 4,
      y: 5,
    },
    presentPawns: [],
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
    presentPawns: [],
  },
  {
    id: 2006,
    fieldType: FieldTypesEnum.FINISH,
    position: {
      x: 5,
      y: 2,
    },
    presentPawns: [],
  },
  {
    id: 2007,
    fieldType: FieldTypesEnum.FINISH,
    position: {
      x: 5,
      y: 3,
    },
    presentPawns: [],
  },
  {
    id: 2008,
    fieldType: FieldTypesEnum.FINISH,
    position: {
      x: 5,
      y: 4,
    },
    presentPawns: [],
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
    presentPawns: [],
  },
  {
    id: 3006,
    fieldType: FieldTypesEnum.FINISH,
    position: {
      x: 8,
      y: 5,
    },
    presentPawns: [],
  },
  {
    id: 3007,
    fieldType: FieldTypesEnum.FINISH,
    position: {
      x: 7,
      y: 5,
    },
    presentPawns: [],
  },
  {
    id: 3008,
    fieldType: FieldTypesEnum.FINISH,
    position: {
      x: 6,
      y: 5,
    },
    presentPawns: [],
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
    presentPawns: [],
  },
  {
    id: 4006,
    fieldType: FieldTypesEnum.FINISH,
    position: {
      x: 5,
      y: 8,
    },
    presentPawns: [],
  },
  {
    id: 4007,
    fieldType: FieldTypesEnum.FINISH,
    position: {
      x: 5,
      y: 7,
    },
    presentPawns: [],
  },
  {
    id: 4008,
    fieldType: FieldTypesEnum.FINISH,
    position: {
      x: 5,
      y: 6,
    },
    presentPawns: [],
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
  presentPawns: [],
};

export const PLAYER2_START_FIELD: Field = {
  id: 11,
  fieldType: FieldTypesEnum.START,
  startFor: 2,
  position: {
    x: 6,
    y: 0,
  },
  presentPawns: [],
};
export const PLAYER3_START_FIELD: Field = {
  id: 21,
  fieldType: FieldTypesEnum.START,
  startFor: 3,
  position: {
    x: 10,
    y: 6,
  },
  presentPawns: [],
};

export const PLAYER4_START_FIELD: Field = {
  id: 31,
  fieldType: FieldTypesEnum.START,
  startFor: 4,
  position: {
    x: 4,
    y: 10,
  },
  presentPawns: [],
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
    presentPawns: [],
  },
  {
    id: 3,
    fieldType: FieldTypesEnum.TRACK,
    position: {
      x: 2,
      y: 4,
    },
    presentPawns: [],
  },
  {
    id: 4,
    fieldType: FieldTypesEnum.TRACK,
    position: {
      x: 3,
      y: 4,
    },
    presentPawns: [],
  },
  {
    id: 5,
    fieldType: FieldTypesEnum.TRACK,
    position: {
      x: 4,
      y: 4,
    },
    presentPawns: [],
  },
  {
    id: 6,
    fieldType: FieldTypesEnum.TRACK,
    position: {
      x: 4,
      y: 3,
    },
    presentPawns: [],
  },
  {
    id: 7,
    fieldType: FieldTypesEnum.TRACK,
    position: {
      x: 4,
      y: 2,
    },
    presentPawns: [],
  },
  {
    id: 8,
    fieldType: FieldTypesEnum.TRACK,
    position: {
      x: 4,
      y: 1,
    },
    presentPawns: [],
  },
  {
    id: 9,
    fieldType: FieldTypesEnum.TRACK,
    position: {
      x: 4,
      y: 0,
    },
    presentPawns: [],
  },
  {
    id: 10,
    fieldType: FieldTypesEnum.TRACK,
    position: {
      x: 5,
      y: 0,
    },
    presentPawns: [],
  },

  {
    id: 12,
    fieldType: FieldTypesEnum.TRACK,
    position: {
      x: 6,
      y: 1,
    },
    presentPawns: [],
  },
  {
    id: 13,
    fieldType: FieldTypesEnum.TRACK,
    position: {
      x: 6,
      y: 2,
    },
    presentPawns: [],
  },
  {
    id: 14,
    fieldType: FieldTypesEnum.TRACK,
    position: {
      x: 6,
      y: 3,
    },
    presentPawns: [],
  },
  {
    id: 15,
    fieldType: FieldTypesEnum.TRACK,
    position: {
      x: 6,
      y: 4,
    },
    presentPawns: [],
  },
  {
    id: 16,
    fieldType: FieldTypesEnum.TRACK,
    position: {
      x: 7,
      y: 4,
    },
    presentPawns: [],
  },
  {
    id: 17,
    fieldType: FieldTypesEnum.TRACK,
    position: {
      x: 8,
      y: 4,
    },
    presentPawns: [],
  },
  {
    id: 18,
    fieldType: FieldTypesEnum.TRACK,
    position: {
      x: 9,
      y: 4,
    },
    presentPawns: [],
  },
  {
    id: 19,
    fieldType: FieldTypesEnum.TRACK,
    position: {
      x: 10,
      y: 4,
    },
    presentPawns: [],
  },
  {
    id: 20,
    fieldType: FieldTypesEnum.TRACK,
    position: {
      x: 10,
      y: 5,
    },
    presentPawns: [],
  },

  {
    id: 22,
    fieldType: FieldTypesEnum.TRACK,
    position: {
      x: 9,
      y: 6,
    },
    presentPawns: [],
  },
  {
    id: 23,
    fieldType: FieldTypesEnum.TRACK,
    position: {
      x: 8,
      y: 6,
    },
    presentPawns: [],
  },
  {
    id: 24,
    fieldType: FieldTypesEnum.TRACK,
    position: {
      x: 7,
      y: 6,
    },
    presentPawns: [],
  },
  {
    id: 25,
    fieldType: FieldTypesEnum.TRACK,
    position: {
      x: 6,
      y: 6,
    },
    presentPawns: [],
  },
  {
    id: 26,
    fieldType: FieldTypesEnum.TRACK,
    position: {
      x: 6,
      y: 7,
    },
    presentPawns: [],
  },
  {
    id: 27,
    fieldType: FieldTypesEnum.TRACK,
    position: {
      x: 6,
      y: 8,
    },
    presentPawns: [],
  },
  {
    id: 28,
    fieldType: FieldTypesEnum.TRACK,
    position: {
      x: 6,
      y: 9,
    },
    presentPawns: [],
  },
  {
    id: 29,
    fieldType: FieldTypesEnum.TRACK,
    position: {
      x: 6,
      y: 10,
    },
    presentPawns: [],
  },
  {
    id: 30,
    fieldType: FieldTypesEnum.TRACK,
    position: {
      x: 5,
      y: 10,
    },
    presentPawns: [],
  },

  {
    id: 32,
    fieldType: FieldTypesEnum.TRACK,
    position: {
      x: 4,
      y: 9,
    },
    presentPawns: [],
  },
  {
    id: 33,
    fieldType: FieldTypesEnum.TRACK,
    position: {
      x: 4,
      y: 8,
    },
    presentPawns: [],
  },
  {
    id: 34,
    fieldType: FieldTypesEnum.TRACK,
    position: {
      x: 4,
      y: 7,
    },
    presentPawns: [],
  },
  {
    id: 35,
    fieldType: FieldTypesEnum.TRACK,
    position: {
      x: 4,
      y: 6,
    },
    presentPawns: [],
  },
  {
    id: 36,
    fieldType: FieldTypesEnum.TRACK,
    position: {
      x: 3,
      y: 6,
    },
    presentPawns: [],
  },
  {
    id: 37,
    fieldType: FieldTypesEnum.TRACK,
    position: {
      x: 2,
      y: 6,
    },
    presentPawns: [],
  },
  {
    id: 38,
    fieldType: FieldTypesEnum.TRACK,
    position: {
      x: 1,
      y: 6,
    },
    presentPawns: [],
  },
  {
    id: 39,
    fieldType: FieldTypesEnum.TRACK,
    position: {
      x: 0,
      y: 6,
    },
    presentPawns: [],
  },
  {
    id: 40,
    fieldType: FieldTypesEnum.TRACK,
    position: {
      x: 0,
      y: 5,
    },
    presentPawns: [],
  },
];

export const PLAYERS_BASE_FIELDS: Field[] = [
  ...PLAYER1_BASE_FIELDS,
  ...PLAYER2_BASE_FIELDS,
  ...PLAYER3_BASE_FIELDS,
  ...PLAYER4_BASE_FIELDS,
];

export const INITIAL_FIELDS: Field[] = [
  ...PLAYERS_BASE_FIELDS,
  ...PLAYERS_START_FIELDS,
  ...PLAYER1_FINISH_FIELDS,
  ...PLAYER2_FINISH_FIELDS,
  ...PLAYER3_FINISH_FIELDS,
  ...PLAYER4_FINISH_FIELDS,
  ...TRACK_FIELDS,
];
