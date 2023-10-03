import { Player } from "../../playerSetupForm/data/types/playerTypes";

export type Pawn = {
  id: string;
  owner: Player["id"];
};

export const PAWNS: readonly Pawn[] = [
  { id: "p1_1", owner: 1 },
  { id: "p1_2", owner: 1 },
  { id: "p1_3", owner: 1 },
  { id: "p1_4", owner: 1 },
  { id: "p2_1", owner: 2 },
  { id: "p2_2", owner: 2 },
  { id: "p2_3", owner: 2 },
  { id: "p2_4", owner: 2 },
  { id: "p3_1", owner: 3 },
  { id: "p3_2", owner: 3 },
  { id: "p3_3", owner: 3 },
  { id: "p3_4", owner: 3 },
  { id: "p4_1", owner: 4 },
  { id: "p4_2", owner: 4 },
  { id: "p4_3", owner: 4 },
  { id: "p4_4", owner: 4 },
];
