import { GameContextProvider } from "./contexts/gameContext/gameContext";
import { GameBoard } from "./pages/GameBoard/GameBoard";

import { HomePage } from "./pages/homePage/homePage";
import { PlayerSelectPage } from "./pages/playerSelect/playerSelectPage";
import { ResultPage } from "./pages/resultPage/resultPage";

function App() {
  return (
    <GameContextProvider>
      <HomePage />
      <PlayerSelectPage />
      <GameBoard />
      <ResultPage />
    </GameContextProvider>
  );
}

export default App;
