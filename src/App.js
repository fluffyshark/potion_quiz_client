import {BrowserRouter, Routes, Route} from "react-router-dom";
import PotionsView from "./pages/potions/PotionsView";
import QuizView from "./pages/quizView/QuizView"
import CraftView from "./pages/craftView/CraftView"
import BuySell from "./pages/buysell/BuySell";
import Leaderboard from "./pages/leaderboard/Leaderboard";
import Marketplace from "./pages/marketplace/Marketplace";
import HostingView from "./pages/hostingView/HostingView";
import JoinView from "./pages/joinView/JoinView";
import StartView from "./pages/startView/StartView.js"

import TempSocket from "./TestSocket.js"
import { useEffect, useState } from "react";
import { power_counter } from "./redux/PowerReducer"
import { useSelector, useDispatch } from "react-redux"


function App() {

  const [counter, setCounter] = useState(0)


  const dispatch = useDispatch()
  const powersList = useSelector((state) => state.powers.value)

  setInterval(function(){ 
   setCounter(new Date().getSeconds())
  }, 1000);

  useEffect(() => {
    dispatch(power_counter())
    console.log("Double Points", powersList[1].counter1)
  },[counter])


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<StartView />}></Route>
      <Route path="/quiz" element={<QuizView />}></Route>
      <Route path="/potions" element={<PotionsView />}></Route>
      <Route path="/craft" element={<CraftView />}></Route>
      <Route path="/buysell" element={<BuySell />}></Route>
      <Route path="/leaderboard" element={<Leaderboard />}></Route>
      <Route path="/marketplace" element={<Marketplace />}></Route>
      <Route path="/socket" element={<TempSocket />}></Route>
      <Route path="/host" element={<HostingView />}></Route>
      <Route path="/join" element={<JoinView />}></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;


