import {
  PLAYER1_BASE_FIELDS,
  PLAYERS_BASE_FIELDS,
  PLAYERS_START_FIELDS,
} from "../../../components/board/data/fields";
import { Field } from "../../../components/board/data/types/fieldsTypes";
import { Player } from "../../../components/playerSetupForm/data/types/playerTypes";
import { PAWNS, Pawn } from "../../../components/board/data/pawns";
import { FieldTypesEnum } from "../../../components/board/data/enums/fieldTypeEnum";
import { start } from "repl";

export const getStartFieldByPlayerId = (playerId: Player["id"]): Field => {
  const index = PLAYERS_START_FIELDS.findIndex((f) => f.startFor === playerId);
  return PLAYERS_START_FIELDS[index];
};

export const getEmptyBaseFieldByPlayerId = (playerId: Player["id"]): Field => {
  const index = PLAYERS_BASE_FIELDS.findIndex(
    (f) => f.baseFor === playerId && f.presentPawns.length === 0
  );
  return PLAYERS_BASE_FIELDS[index];
};

export const getPlayerIdByPawnId = (pawnId: Pawn["id"]): Player["id"] => {
  const pawnIndex = PAWNS.findIndex((pawn) => pawn.id === pawnId);

  return PAWNS[pawnIndex].owner;
};

export const dispatchPawnFromBaseField = (
  pawnId: string,
  fieldArray: Field[]
) => {
  const playerId = getPlayerIdByPawnId(pawnId);

  const startFieldId = getStartFieldByPlayerId(playerId).id;

  const baseFieldIndex = fieldArray.findIndex(
    (f) => f.presentPawns[0] === pawnId
  );

  fieldArray[baseFieldIndex].presentPawns.pop();

  const startFieldIndex = fieldArray.findIndex((f) => f.id === startFieldId);
  if (
    fieldArray[startFieldIndex].presentPawns.length > 0 &&
    getPlayerIdByPawnId(fieldArray[startFieldIndex].presentPawns[0]) !==
      playerId
  ) {
    sentPawnsBackToBase(fieldArray[startFieldIndex].presentPawns);
    fieldArray[startFieldIndex].presentPawns.splice(
      0,
      fieldArray[startFieldIndex].presentPawns.length,
      pawnId
    );
  } else {
    fieldArray[startFieldIndex].presentPawns.push(pawnId);
  }
};

export const movePawnCertainNumberOfFields = (
  pawnId: string,
  field: Field,
  valueFromDice: number,
  fieldArray: Field[]
) => {
  const indexBeforeDiceThrow = fieldArray.findIndex((f) => f.id === field.id);

  fieldArray[indexBeforeDiceThrow].presentPawns.splice(0, 1);

  const indexAfterDiceThrow = fieldArray.findIndex(
    (f) => f.id === field.id + valueFromDice
  );

  const destinationField = fieldArray[indexAfterDiceThrow];

  if (destinationField.presentPawns.length === 0) {
    destinationField.presentPawns.push(pawnId);
  } else {
    if (
      // <=============== JEŻELI WBIJA PION TEGO SAMEGO GRACZA
      getPlayerIdByPawnId(pawnId) ===
      getPlayerIdByPawnId(destinationField.presentPawns[0])
    ) {
      destinationField.presentPawns.push(pawnId);
    } else {
      sentPawnsBackToBase(destinationField.presentPawns);
      destinationField.presentPawns.splice(
        0,
        destinationField.presentPawns.length
      );
      destinationField.presentPawns.push(pawnId);
    }
  }
};

export const sentPawnsBackToBase = (
  presentPawnsToErase: Field["presentPawns"]
) => {
  const playerIdOfPawnsToErase = getPlayerIdByPawnId(presentPawnsToErase[0]);
  // const playerBaseField = getEmptyBaseFieldByPlayerId(playerIdOfPawnsToErase);
  presentPawnsToErase.map((p) =>
    getEmptyBaseFieldByPlayerId(playerIdOfPawnsToErase).presentPawns.push(p)
  );
};

export const diceRoll = (): number => {
  const min = 1;
  const max = 6;

  return Math.round(Math.random() * (max - min) + min);
};

export const activatePawnsForPlayer = (
  field: Field,
  activePlayer: Player["id"],
  handlePawnClick: (field: Field) => void
) => {
  if (getPlayerIdByPawnId(field.presentPawns[0]) === activePlayer) {
    handlePawnClick(field);
  }
};
