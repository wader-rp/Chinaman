import { GameContextProvider } from "./contexts/gameContext/gameContext";
import { GameBoard } from "./pages/gameBoard/gameBoard";

import { HomePage } from "./pages/homePage/homePage";
import { PlayerSelectPage } from "./pages/playerSelect/playerSelectPage";
import { ResultPage } from "./pages/resultPage/resultPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <GameContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/players-setup" element={<PlayerSelectPage />} />
          <Route path="/gameboard" element={<GameBoard />} />
          <Route path="/result-page" element={<ResultPage />} />
        </Routes>
      </BrowserRouter>
    </GameContextProvider>
  );
}

export default App;
