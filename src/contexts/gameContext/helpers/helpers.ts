import {
  PLAYERS_BASE_FIELDS,
  PLAYERS_START_FIELDS,
} from "../../../components/board/data/fields";
import { Field } from "../../../components/board/data/types/fieldsTypes";
import { Player } from "../../../components/playerSetupForm/data/types/playerTypes";
import { PAWNS, Pawn } from "../../../components/board/data/pawns";
import { FieldTypesEnum } from "../../../components/board/data/enums/fieldTypeEnum";

export const getStartFieldByPlayerId = (playerId: Player["id"]): Field => {
  const index = PLAYERS_START_FIELDS.findIndex((f) => f.startFor === playerId);
  return PLAYERS_START_FIELDS[index];
};

export const getPlayerIdByPawnId = (pawnId: Pawn["id"]): Player["id"] => {
  const pawnIndex = PAWNS.findIndex((pawn) => pawn.id === pawnId);

  return PAWNS[pawnIndex].owner;
};

export const dispatchPawnFromBaseField = (
  fieldType: FieldTypesEnum,
  pawnId: string,
  fieldArray: Field[]
) => {
  console.log("ELO");
  const playerId = getPlayerIdByPawnId(pawnId);
  const startFieldId = getStartFieldByPlayerId(playerId).id;
  const baseFieldIndex = PLAYERS_BASE_FIELDS.findIndex(
    (f) => f.presentPawns[0] === pawnId
  );
  console.log(baseFieldIndex);
  fieldArray[baseFieldIndex].presentPawns.pop();

  // for (let i = 0; i < fieldArray.length; i++) {
  //   if (fieldType === FieldTypesEnum.BASE) {
  //     if (fieldArray[i].presentPawns.includes(pawnId)) {
  //       fieldArray[i] = { ...fieldArray[i], presentPawns: [] };
  //       console.log("NA PIZDE ANDRZEJU MI TU KURWA MALUJESZ");
  //     }
  //   }
  // }

  const startFieldIndex = fieldArray.findIndex((f) => f.id === startFieldId);
  fieldArray[startFieldIndex].presentPawns.push(pawnId);
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
  }

  if (destinationField.presentPawns.length !== 0) {
    if (
      // <=============== JEŻELI WBIJA PION TEGO SAMEGO GRACZA
      getPlayerIdByPawnId(pawnId) ===
      getPlayerIdByPawnId(destinationField.presentPawns[0])
    ) {
      destinationField.presentPawns.push(pawnId);
    }
  }
};

export const diceRoll = (): number => {
  const min = 1;
  const max = 6;

  return Math.round(Math.random() * (max - min) + min);
};

export const activatePawnsForPlayer = (
  field: Field,
  fieldPresentPawns: Field["presentPawns"],
  activePlayer: Player["id"],
  handlePawnClick: (field: Field) => void
) => {
  if (getPlayerIdByPawnId(fieldPresentPawns[0]) === activePlayer) {
    handlePawnClick(field);
  }
};
