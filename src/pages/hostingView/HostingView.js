import React, { useEffect, useState } from 'react'
import "./hostingView.css"
import "./responsive/tablet.css"
import "./responsive/responsive.css"
import Hostboard from "./Hostboard.js"
import Timer from "../../components/timer/Timer.js"
import { activate_power } from "../../redux/PowerReducer"
import { activate_auction } from "../../redux/AuctionReducer"
import { useSelector, useDispatch } from "react-redux"
import {motion} from "framer-motion"
import {playSound} from "../../components/playSound/playSound"
import {EndGame} from "../../components/endGame/EndGame"
import {InitialSaveToLocalStorage} from "../../components/saveToLocalStorage/InitialSaveToLocalStorage"
import EndStatsReveal from './endsStatsReveal/EndStatsReveal'

// Hosting process using Socket.io:
// - Sockets are initiated at App.js and passed down to all children using props.
// - At StartView, when clicking host button a random 9 digit number (gameCode and edited displayCode) are generated and passed to playerStats by redux.
// - At StartView, clicking host button also make that client join socket room using the gameCode as room code.
// - At HostView, the displayCode is collected by redux and displayed in view.
// - At JoinView, the players write the displayCode that are visually displayed in HostView on another device (projector or other monitor)
// - At JoinView, players join the same room as the host using the displayCode (turned into gameCode) and their nickname are displayed on the host's view via socket.io.

function HostingView(props) {

  let socket = props.socket

  const dispatch = useDispatch()
  const playerStats = useSelector((state) => state.playerStats.value) 
  const quizList = useSelector((state) => state.quiz.value)


  const [startTimer, setStartTimer] = useState(false)
  const [playersJoined, setPlayersJoined] = useState([])
  const [gameState, setGameState] = useState("GAME NOT STARTED")
  const [quizStats, setQuizStats] = useState([])
  const [finalScore, setFinalScore] = useState([])


  // Show players who joined room
  useEffect(() => {
    socket.on("player_accepted", (data) => {
      console.log("player_accepted", data)
      setPlayersJoined(playersJoined => [...playersJoined, data.nickname]);
    })

    socket.on("start_game", (data) => {
      console.log("Start Game Host", data)

    })

    // Receiving game stats from server, in format: [{playerName: string, playerScore: int}]
    socket.on("sending_server_gameData", (data) => {
      console.log("FROM SERVER TO HOST.JS: ", data)
      socket.emit("gameData_from_host", data);
    })

    socket.on("sending_jukebox_to_host", (data) => {
      console.log("FROM JUKEBOX: ", data)
      playSound(data.melody)
    })

    // Receive quiz stats from all players, filtering for the latest, in quizStats state
    // data: {gameCode: "", playerName: "", playerQuizScore: {correct: 0, totalQuestions: 0, wrong: 0}
    socket.on("to_host_player_quiz_score", (data) => {
      setQuizStats(prevStats => {
        const filtered = prevStats.filter(player => player.playerName !== data.playerName);
        return [...filtered, data];
      });
    })

    
}, [socket])



useEffect(() => {
  console.log("quizStats", quizStats)
}, [quizStats])


  function startGame() {
    //---------------------------------------------------
    socket.emit("ready_game", playerStats.gameCode /*, quizList*/);
    //---------------------------------------------------
    setStartTimer(true)
    setGameState("GAME STARTED")
    InitialSaveToLocalStorage()
    dispatch(activate_power({power_name: "LEADERBOARD CARDS"}))
    dispatch(activate_auction())
  }

  
  function hostEndGame() {
    setFinalScore(quizStats)
    // Host leave socket room and delete server-side game data
    socket.emit("host_end_game", playerStats.gameCode);
    // Deletes game data from localStorage and sends to all players to leave socket room delete their localStorage
    EndGame(socket, playerStats.gameCode)
    setGameState("GAME ENDED")
    
  }





  return (
    
    <div className='hostingView'>
        

        <div className="hostingView_top">
          {gameState === "GAME STARTED" && <p>GAME CODE: {playerStats.gameCode}</p>}
          <Timer startTimer={startTimer} socket={socket} gameCode={playerStats.gameCode}/>

          {gameState === "GAME NOT STARTED" &&  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}  className='hostView_startBtn' onClick={() => startGame()}>START GAME</motion.button>}
          {gameState === "GAME STARTED" &&  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 17 }} className='hostView_startBtn' onClick={() => hostEndGame()}>END GAME</motion.button>}
            
            
        </div>
        
        {gameState === "GAME NOT STARTED" &&  <>

          <div className="hostingView_middle">
            <p className="joinDesc">Go to potionquiz.com and enter:</p>
            <p className="joinCode">{playerStats.displayCode}</p>
          </div>

          <div className="hostingView_bottom">
            {playersJoined.map((player, i) => {
              if (playersJoined.length > 0) {
                return (<div key={i} className="playerTags">{player}</div>)
              }
            })} 

          </div>

        </>}
        
        {gameState === "GAME STARTED" && <Hostboard />}

        {gameState === "GAME ENDED" && <EndStatsReveal finalScore={finalScore} />}
       
  </div>
    

  )
}

export default HostingView