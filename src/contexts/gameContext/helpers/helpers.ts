import {
  PLAYER1_BASE_FIELDS,
  PLAYERS_BASE_FIELDS,
  PLAYERS_START_FIELDS,
} from "../../../components/board/data/fields";
import { Field } from "../../../components/board/data/types/fieldsTypes";
import { Player } from "../../../components/playerSetupForm/data/types/playerTypes";
import { PAWNS, Pawn } from "../../../components/board/data/pawns";
import { PLAYER_ROUTES } from "../../../components/board/data/playersRoutes";

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
  // stąd
  const playerId = getPlayerIdByPawnId(pawnId);

  const playerIndexOnPlayerRoutes = playerId - 1;

  const indexBeforeDiceThrowOnBoard = fieldArray.findIndex(
    (f) => f.id === field.id
  );

  const indexBeforeDiceThrowOnPlayerRoutes = PLAYER_ROUTES[
    playerIndexOnPlayerRoutes
  ].findIndex((f) => f === field.id);

  const indexAfterDiceThrowOnPlayerRoutes =
    indexBeforeDiceThrowOnPlayerRoutes + valueFromDice;

  if (
    indexAfterDiceThrowOnPlayerRoutes >
    PLAYER_ROUTES[playerIndexOnPlayerRoutes].length - 1
  )
    return;

  fieldArray[indexBeforeDiceThrowOnBoard].presentPawns.splice(0, 1); // przerzucić po sprawdzeniu

  const indexOfDestinationFieldOnBoard = fieldArray.findIndex(
    (f) =>
      f.id ===
      PLAYER_ROUTES[playerIndexOnPlayerRoutes][
        indexAfterDiceThrowOnPlayerRoutes
      ]
  );
  //dotąd
  //i zwrócić wartość dla destinationFieldOnBoard
  //rozważyć zwrócenie undefined jeśli
  /**
   *   if (
    indexAfterDiceThrowOnPlayerRoutes >
    PLAYER_ROUTES[playerIndexOnPlayerRoutes].length - 1
  )
    return undefined
   * 
    i wtedy cała funkcja albo może zwrócić Field albo undefined
   */

  const destinationFieldOnBoard = fieldArray[indexOfDestinationFieldOnBoard];

  if (destinationFieldOnBoard.presentPawns.length === 0) {
    destinationFieldOnBoard.presentPawns.push(pawnId);
  } else {
    if (
      getPlayerIdByPawnId(pawnId) ===
      getPlayerIdByPawnId(destinationFieldOnBoard.presentPawns[0])
    ) {
      destinationFieldOnBoard.presentPawns.push(pawnId);
    } else {
      sentPawnsBackToBase(destinationFieldOnBoard.presentPawns);
      destinationFieldOnBoard.presentPawns.splice(
        0,
        destinationFieldOnBoard.presentPawns.length
      );
      destinationFieldOnBoard.presentPawns.push(pawnId);
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
