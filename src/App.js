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
import { useEffect, useState } from "react";
import { power_counter, activate_power, power_special } from "./redux/PowerReducer"
import { add_gameStats } from "./redux/GameStatsReducer"
import { add_exp_amount } from "./redux/LevelExpReducer"
import { useDispatch, useSelector } from "react-redux"
import io from "socket.io-client"
import { update_market } from "./redux/MarketplaceReducer";
import { add_buyLetter } from './redux/LetterReducer'
import PageNotFound from "./pages/pageNotFound/PageNotFound";


const socket = io.connect("https://server-potionquiz.herokuapp.com/")
//const socket = io.connect("http://localhost:3001")

let ourHostID = ""

function App() {

  // Managing the global counter, which time effects can be hocked on.
  const [counter, setCounter] = useState(0)


  const dispatch = useDispatch()
  const potionsList = useSelector((state) => state.potions.value)
  const playerStats = useSelector((state) => state.playerStats.value)
  const coinList = useSelector((state) => state.coins.value)

  setInterval(function(){ 
   setCounter(new Date().getSeconds())
  }, 1000);

  useEffect(() => {
    dispatch(power_counter())
  },[counter])

  

  // Receiving game stats from server, in format: [{playerName: string, playerScore: int}]
  useEffect(() => {
    socket.on("sending_server_gameData", (data) => {
      dispatch(add_gameStats(data))
    //  console.log("NEW CARD - FROM SEVER TO APP.js: ", data)
    })

    socket.on("host_id", (hostID) => {ourHostID = hostID})

    // Receiving potion effects from other players
    socket.on("potion_curse_blessing", (potionData) => {
    //  console.log("ATTACK OR BLESSING FROM OTHER PLAYER", potionData)
      if (potionData.potionName === "GIFT EXP") {dispatch(add_exp_amount(potionData.effect))}
      if (potionData.potionName === "GIVE GIFT") {dispatch(power_special(potionData)); dispatch(activate_power({power_name: "GIVE GIFT"}))}
      if (potionData.potionName === "BLOCKER") {dispatch(activate_power({power_name: "BLOCKER"})); dispatch(power_special(potionData))}
      if (potionData.potionName === "FREEZE") {dispatch(activate_power({power_name: "FREEZE"}))}
      if (potionData.potionName === "MASS FREEZE") {dispatch(activate_power({power_name: "MASS FREEZE"}))}
      if (potionData.potionName === "POINT POISON") {dispatch(activate_power({power_name: "POINT POISON"}))}
    })

    socket.on("sending_marketData_to_players", (marketData) => {
     // console.log("sending_marketData_to_players", marketData)
      dispatch(update_market(marketData))
    }) 

    socket.on("sending_successfull_sale", (sale) => {dispatch(add_buyLetter(sale))}) 

  }, [socket])


  
  useEffect(() => {
    let levelsCounter = [0,0,0]
    potionsList.map((potion) => {
    if (potion.level === 1 && potion.discovered === true) {levelsCounter[0] += 1}
    if (potion.level === 2) {levelsCounter[1] += 1}
    if (potion.level === 3) {levelsCounter[2] += 1}
    })
    socket.emit("sending_player_cards", {playerName: playerStats.playerName, cards: levelsCounter, coins: coinList.total});
  }, [potionsList])

  

  
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<StartView socket={socket} />}></Route>  
      <Route path="/quiz" element={<QuizView socket={socket} hostID={ourHostID} />}></Route>
      <Route path="/potions" element={<PotionsView socket={socket} />}></Route>
      <Route path="/craft" element={<CraftView socket={socket} />}></Route>
      <Route path="/buysell" element={<BuySell />}></Route>
      <Route path="/leaderboard" element={<Leaderboard />}></Route>
      <Route path="/marketplace" element={<Marketplace socket={socket} />}></Route>
      <Route path="/host" element={<HostingView socket={socket} />}></Route>
      <Route path="/join" element={<JoinView socket={socket} />}></Route>
      <Route path="/*" element={<PageNotFound />}></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;


