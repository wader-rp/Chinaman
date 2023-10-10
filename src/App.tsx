import { GameBoard } from "./pages/gameBoard/gameBoard";
import { GameContextProvider } from "./contexts/gameContext/gameContext";
import { PlayerSelectPage } from "./pages/playerSelect/playerSelectPage";

function App() {
  return (
    <GameContextProvider>
      <PlayerSelectPage />
      <GameBoard />
    </GameContextProvider>
  );
}

export default App;
