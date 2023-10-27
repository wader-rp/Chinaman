import { GameContextProvider } from "./contexts/gameContext/gameContext";
import { GameBoard } from "./pages/gameBoard/gameBoard";

import { HomePage } from "./pages/homePage/homePage";
import { PlayerSetupPage } from "./pages/playerSelect/playerSelectPage";
import { ResultPage } from "./pages/resultPage/resultPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./fonts/gang-of-three.regular.ttf";

function App() {
  return (
    <GameContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/players-setup" element={<PlayerSetupPage />} />
          <Route path="/gameboard" element={<GameBoard />} />
          <Route path="/result-page" element={<ResultPage />} />
        </Routes>
      </BrowserRouter>
    </GameContextProvider>
  );
}

export default App;
