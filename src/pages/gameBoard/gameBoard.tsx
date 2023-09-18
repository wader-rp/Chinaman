import React from "react";
import { PlayerPanel } from "../../components/playerpanels/PlayerPanels";
import { Board } from "../../components/board/Board";
import "../../pages/gameBoard/gameBoard.css";

export const GameBoard = () => {
  return (
    <div className="gameBoard-container">
      <div className="playerPanels">
        <PlayerPanel
          playerAvatar="https://v.wpimg.pl/MTAyZmJhYjUgGyxeZRNvIGNDeAQjSmF2NFtgT2VQfWQ5VjwEJg0_MTEWdAo4HT01Ngl0HSZHLCQoVixcZQwkJzEVOxRlDSA2JB11DnkLKGUgTGNAcwp8ZWxNOF59RS8ydkh3CShQdWVxSzwPK1ssdjw"
          playerClass="Alkoholik"
          playerName="Andrzej"
          isHuman={true}
          id={1}
        />
        <PlayerPanel
          playerAvatar="https://v.wpimg.pl/MTAyZmJhYjUgGyxeZRNvIGNDeAQjSmF2NFtgT2VQfWQ5VjwEJg0_MTEWdAo4HT01Ngl0HSZHLCQoVixcZQwkJzEVOxRlDSA2JB11DnkLKGUgTGNAcwp8ZWxNOF59RS8ydkh3CShQdWVxSzwPK1ssdjw"
          playerClass="Alkoholik"
          playerName="Andrzej"
          isHuman={true}
          id={2}
        />
      </div>
      <div className="board">
        <Board />
      </div>
      <div className="playerPanels">
        <PlayerPanel
          playerAvatar="https://v.wpimg.pl/MTAyZmJhYjUgGyxeZRNvIGNDeAQjSmF2NFtgT2VQfWQ5VjwEJg0_MTEWdAo4HT01Ngl0HSZHLCQoVixcZQwkJzEVOxRlDSA2JB11DnkLKGUgTGNAcwp8ZWxNOF59RS8ydkh3CShQdWVxSzwPK1ssdjw"
          playerClass="Alkoholik"
          playerName="Andrzej"
          isHuman={true}
          id={3}
        />
        <PlayerPanel
          playerAvatar="https://v.wpimg.pl/MTAyZmJhYjUgGyxeZRNvIGNDeAQjSmF2NFtgT2VQfWQ5VjwEJg0_MTEWdAo4HT01Ngl0HSZHLCQoVixcZQwkJzEVOxRlDSA2JB11DnkLKGUgTGNAcwp8ZWxNOF59RS8ydkh3CShQdWVxSzwPK1ssdjw"
          playerClass="Alkoholik"
          playerName="Andrzej"
          isHuman={true}
          id={4}
        />
      </div>
    </div>
  );
};
