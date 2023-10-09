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
import { PLAYER_ROUTES } from "../../../components/board/data/playersRoutes";
import { getDestinationForPawnAfterDiceThrow } from "./helpers2";

export const getStartFieldByPlayerId = (playerId: Player["id"]): Field => {
  const index = PLAYERS_START_FIELDS.findIndex((f) => f.startFor === playerId);
  return PLAYERS_START_FIELDS[index];
};

export const getEmptyFieldByTypeAndPlayerId = (
  playerId: Player["id"],
  fieldsType: Field[]
): Field => {
  const index = fieldsType.findIndex(
    (f) => f.baseFor === playerId && f.presentPawns.length === 0
  );
  return fieldsType[index];
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
  const presentPawnsOnStartFieldIndex =
    fieldArray[startFieldIndex].presentPawns;
  if (
    presentPawnsOnStartFieldIndex.length > 0 &&
    getPlayerIdByPawnId(presentPawnsOnStartFieldIndex[0]) !== playerId
  ) {
    sendPawnsBackToBase(presentPawnsOnStartFieldIndex);
    presentPawnsOnStartFieldIndex.splice(
      0,
      presentPawnsOnStartFieldIndex.length,
      pawnId
    );
  } else {
    presentPawnsOnStartFieldIndex.push(pawnId);
  }
};

export const movePawnCertainNumberOfFields = (
  pawnId: string,
  field: Field,
  valueFromDice: number,
  fieldArray: Field[]
) => {
  const indexBeforeDiceThrowOnBoard = fieldArray.findIndex(
    (f) => f.id === field.id
  );

  const destinationFieldOnBoard = getDestinationForPawnAfterDiceThrow(
    pawnId,
    PLAYER_ROUTES,
    field,
    fieldArray,
    valueFromDice
  );

  if (destinationFieldOnBoard) {
    if (destinationFieldOnBoard.presentPawns.length === 0) {
      destinationFieldOnBoard.presentPawns.push(pawnId);
      fieldArray[indexBeforeDiceThrowOnBoard].presentPawns.splice(0, 1);
    } else {
      if (
        getPlayerIdByPawnId(pawnId) ===
        getPlayerIdByPawnId(destinationFieldOnBoard.presentPawns[0])
      ) {
        destinationFieldOnBoard.presentPawns.push(pawnId);
        fieldArray[indexBeforeDiceThrowOnBoard].presentPawns.splice(0, 1);
      } else {
        sendPawnsBackToBase(destinationFieldOnBoard.presentPawns);
        destinationFieldOnBoard.presentPawns.splice(
          0,
          destinationFieldOnBoard.presentPawns.length,
          pawnId
        );
      }
    }
  }
};

export const sendPawnsBackToBase = (
  presentPawnsToErase: Field["presentPawns"]
) => {
  const playerIdOfPawnsToErase = getPlayerIdByPawnId(presentPawnsToErase[0]);

  presentPawnsToErase.map((p) =>
    getEmptyFieldByTypeAndPlayerId(
      playerIdOfPawnsToErase,
      PLAYERS_BASE_FIELDS
    ).presentPawns.push(p)
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
