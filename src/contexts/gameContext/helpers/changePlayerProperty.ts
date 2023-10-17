import { Player } from "../../../components/playerSetupForm/data/types/playerTypes";

export const changePlayerProperty = <P extends keyof Omit<Player, "id">>(
  id: Player["id"],
  property: P,
  newValue: Player[P],
  players: Player[],
  setPlayers: React.Dispatch<React.SetStateAction<Player[]>>
) => {
  const playerIndex = players.findIndex((player) => player.id === id);
  if (playerIndex === -1) {
    throw new Error(`Player with id ${id} not found`);
  }

  setPlayers((prev) => {
    const copy = [...prev];
    copy[playerIndex][property] = newValue;
    return copy;
  });
};
