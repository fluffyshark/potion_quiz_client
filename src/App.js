import {BrowserRouter, Routes, Route} from "react-router-dom";
import PotionsView from "./pages/potions/PotionsView";
import QuizView from "./pages/quizView/QuizView"
import CraftView from "./pages/craftView/CraftView"
import BuySell from "./pages/buysell/BuySell";
import Leaderboard from "./pages/leaderboard/Leaderboard";
import Marketplace from "./pages/marketplace/Marketplace";

import TempSocket from "./TestSocket.js"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<QuizView />}></Route>
      <Route path="/potions" element={<PotionsView />}></Route>
      <Route path="/craft" element={<CraftView />}></Route>
      <Route path="/buysell" element={<BuySell />}></Route>
      <Route path="/leaderboard" element={<Leaderboard />}></Route>
      <Route path="/marketplace" element={<Marketplace />}></Route>
      <Route path="/socket" element={<TempSocket />}></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;


