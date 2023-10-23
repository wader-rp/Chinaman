import { Player } from "../../../components/playerSetupForm/data/types/playerTypes";

export const generatePlayerListByNumberOfPlayers = (
  numberOfPlayers: number,
  playerList: Player[]
): Player[] => {
  const newPlayersList = playerList.filter(
    (player) => player.id <= numberOfPlayers
  );

  return newPlayersList;
};
