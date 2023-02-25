import {BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState, lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux"
import io from "socket.io-client"

// Pages
import {EndGame} from "./components/endGame/EndGame"
import DisconnectedView from "./pages/disconnectedView/DisconnectedView";


// Redux
import { power_counter, activate_power, power_special } from "./redux/PowerReducer"
import { add_gameStats } from "./redux/GameStatsReducer"
import { add_exp_amount } from "./redux/LevelExpReducer"
import { update_market } from "./redux/MarketplaceReducer";
import { add_buyLetter } from './redux/LetterReducer'
import { increase_auction_counter, new_auction } from './redux/AuctionReducer'
// Component functions
import Loading from "./components/loading/Loading.js";
import { change_game_status } from "./redux/EndGameReducer";
import QuizSelect from "./pages/quizSelect/QuizSelect";


// Lazy Loading
const StartView = lazy(() => import("./pages/startView/StartView"))
const LoginView = lazy(() => import("./pages/loginView/LoginView"))
const QuizView = lazy(() => import("./pages/quizView/QuizView"))
const PotionsView = lazy(() => import("./pages/potions/PotionsView"))
const CraftView = lazy(() => import("./pages/craftView/CraftView"))
const BuySell = lazy(() => import("./pages/buysell/BuySell"))
const Leaderboard = lazy(() => import("./pages/leaderboard/Leaderboard"))
const Marketplace = lazy(() => import("./pages/marketplace/Marketplace"))
const HostingView = lazy(() => import("./pages/hostingView/HostingView"))
const JoinView = lazy(() => import("./pages/joinView/JoinView"))
const PotionAuction = lazy(() => import("./pages/potionAuction/PotionAuction"))

const socket = io.connect("https://potionquiz.com/")
//const socket = io.connect("http://localhost:3001")

let ourHostID = ""




function App() {

  // Managing the global counter, which time effects can be hocked on.
  const [counter, setCounter] = useState(0)

  const dispatch = useDispatch()
  const potionsList = useSelector((state) => state.potions.value)
  const playerStats = useSelector((state) => state.playerStats.value)
  const coinList = useSelector((state) => state.coins.value)
  const AuctionList = useSelector((state) => state.auction.value)
  
  setInterval(function(){ 
   setCounter(new Date().getSeconds())
  }, 1000);


  useEffect(() => {
    dispatch(power_counter())
    dispatch(increase_auction_counter())
    if (counter === 20) {socket.emit("sending_player_quiz_score", {playerName: playerStats.playerName, playerQuizScore: playerStats.playerQuizScore, gameCode: playerStats.gameCode})}
  //  console.log("counter", counter)
  },[counter])


    // When page is about to refresh, alert the user so it' not happening by mistake
    useEffect(() => {
      window.addEventListener("beforeunload", alertUser);
      return () => {

        window.removeEventListener("beforeunload", alertUser);
      };
    }, []);
    const alertUser = (e) => {
      e.preventDefault();
      e.returnValue = "";
    };

  
  // Receiving game stats from server, in format: [{playerName: string, playerScore: int}]
  useEffect(() => {
    socket.on("sending_server_gameData", (data) => {
      dispatch(add_gameStats(data))
    //  console.log("NEW CARD - FROM SEVER TO APP.js: ", data)
    })

    socket.on("host_id", (hostID) => {ourHostID = hostID})

    // Receiving potion effects from other players
    socket.on("potion_curse_blessing", (potionData) => {
      if (potionData.potionName === "GIFT EXP") {dispatch(add_exp_amount(potionData.effect))}
      if (potionData.potionName === "GIVE GIFT") {dispatch(power_special(potionData)); dispatch(activate_power({power_name: "GIVE GIFT"}))}
      if (potionData.potionName === "BLOCKER") {dispatch(activate_power({power_name: "BLOCKER"})); dispatch(power_special(potionData))}
      if (potionData.potionName === "FREEZE") {dispatch(activate_power({power_name: "FREEZE"}))}
      if (potionData.potionName === "MASS FREEZE") {dispatch(activate_power({power_name: "MASS FREEZE"}))}
      if (potionData.potionName === "POINT POISON") {dispatch(activate_power({power_name: "POINT POISON"}))}
      if (potionData.potionName === "MASS PROTECTION") {dispatch(activate_power({power_name: "MASS PROTECTION"}))}
    })

    socket.on("sending_marketData_to_players", (marketData) => {
      dispatch(update_market(marketData))
    }) 

    socket.on("sending_successfull_sale", (sale) => {dispatch(add_buyLetter(sale))}) 

    socket.on("host_to_player_to_end_game", (gameCode) => {
      dispatch(change_game_status("End Game"))
      EndGame(socket, gameCode)
    }) 

    socket.on("new_auction_card_to_players", (auctionData) => {
      dispatch(new_auction(auctionData))
    }) 
  
    
  }, [socket])


  useEffect(() => {
    let levelsCounter = [0,0,0]
    potionsList.map((potion) => {
    if (potion.level === 1 && potion.discovered === true) {levelsCounter[0] += 1}
    if (potion.level === 2) {levelsCounter[1] += 1}
    if (potion.level === 3) {levelsCounter[2] += 1}
    })
    if (levelsCounter[0] > 0 || levelsCounter[1] > 0 || levelsCounter[2] > 0 ) {
      socket.emit("sending_player_cards", {playerName: playerStats.playerName, cards: levelsCounter, coins: coinList.total, gameCode: playerStats.gameCode})
    }
  }, [potionsList])

  
  // If a auction card has expired or bought, then send request to server for new card
  useEffect(() => {
    AuctionList.map((item, i) => {
      if (item.status === "waiting_for_card") {
        socket.emit("auction_card_expired_or_bought", { auctionSlot: i, auctionInfo: item, gameCode: playerStats.gameCode });
      }
    })
  }, [AuctionList])



  
  return (
    <BrowserRouter>
    <Suspense fallback={<Loading/>}>
      <Routes>
        <Route path="/" element={<StartView socket={socket} />}></Route>  
        <Route path="/quiz" element={<QuizView socket={socket} hostID={ourHostID} />}></Route>
        <Route path="/potions" element={<PotionsView socket={socket} />}></Route>
        <Route path="/craft" element={<CraftView socket={socket} />}></Route>
        <Route path="/buysell" element={<BuySell />}></Route>
        <Route path="/leaderboard" element={<Leaderboard />}></Route>
        <Route path="/marketplace" element={<Marketplace socket={socket} />}></Route>
        <Route path="/auction" element={<PotionAuction socket={socket} />}></Route>
        <Route path="/login" element={<LoginView/>}></Route>
        <Route path="/quizselect" element={<QuizSelect socket={socket}/>}></Route>
        <Route path="/host" element={<HostingView socket={socket} />}></Route>
        <Route path="/join" element={<JoinView socket={socket} />}></Route>
        <Route path="/disconnected" element={<DisconnectedView socket={socket} />}></Route>
        <Route path="/*" element={<StartView />}></Route>
      </Routes>
    </Suspense>
  </BrowserRouter>
  );
}

export default App;


