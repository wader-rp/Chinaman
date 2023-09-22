import { FieldTypesEnum } from "./../../../components/board/data/enums/fieldTypeEnum";
import { PLAYERS_START_FIELDS } from "../../../components/board/data/fields";
import { Field } from "../../../components/board/data/types/fieldsTypes";
import { Player } from "../../../components/playerSetupForm/data/types/playerTypes";

export const getStartFieldByPlayerId = (playerId: Player["id"]): Field => {
  const index = PLAYERS_START_FIELDS.findIndex((f) => f.startFor === playerId);
  return PLAYERS_START_FIELDS[index];
};

export const getPlayerIdByPawnId = (pawnId: string): Player["id"] =>
  parseInt(pawnId.charAt(1));

export const dispatchPawnFromBaseField = (
  fieldType: FieldTypesEnum,
  pawnId: string,
  fieldArray: Field[],
  diceValue: number
) => {
  const playerId = getPlayerIdByPawnId(pawnId);
  const startFieldId = getStartFieldByPlayerId(playerId).id;
  console.log(diceValue);

  for (let i = 0; i < fieldArray.length; i++) {
    if (fieldType === FieldTypesEnum.BASE) {
      if (fieldArray[i].presentPawn === pawnId) {
        fieldArray[i] = { ...fieldArray[i], presentPawn: undefined };
      }
    }
  }

  const startFieldIndex = fieldArray.findIndex(({ id }) => id === startFieldId);
  fieldArray[startFieldIndex] = {
    ...fieldArray[startFieldIndex],
    presentPawn: pawnId,
  };
};

export const movePawnOfCertainNumberOfFields = (
  pawnId: string,
  field: Field,
  valueFromDice: number,
  fieldArray: Field[]
) => {
  const indexBeforeDiceThrow = fieldArray.findIndex((f) => f.id === field.id);

  fieldArray[indexBeforeDiceThrow] = {
    ...fieldArray[indexBeforeDiceThrow],
    presentPawn: undefined,
  };

  const indexAfterDiceThrow = fieldArray.findIndex(
    (f) => f.id === field.id + valueFromDice
  );
  const destinationField = fieldArray[indexAfterDiceThrow];
  // zbijanie :)

  fieldArray[indexAfterDiceThrow] = {
    ...fieldArray[indexAfterDiceThrow],
    presentPawn: pawnId,
  };
};

export const diceRoll = (): number => {
  const min = 1;
  const max = 6;

  return Math.round(Math.random() * (max - min) + min);
};
