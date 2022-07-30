import {BrowserRouter, Routes, Route} from "react-router-dom";
import PotionsView from "./pages/potions/PotionsView";
import QuizView from "./pages/quizView/QuizView"
import CraftView from "./pages/craftView/CraftView"
import BuySell from "./pages/buysell/BuySell";
import Leaderboard from "./pages/leaderboard/Leaderboard";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<QuizView />}></Route>
      <Route path="/potions" element={<PotionsView />}></Route>
      <Route path="/craft" element={<CraftView />}></Route>
      <Route path="/buysell" element={<BuySell />}></Route>
      <Route path="/leaderboard" element={<Leaderboard />}></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;


