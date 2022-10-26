import React, { useEffect, useState } from 'react'
import "./hostingView.css"
import "./responsive/tablet.css"
import "./responsive/responsive.css"
import Hostboard from "./Hostboard.js"
import Timer from "../../components/timer/Timer.js"
import { activate_power } from "../../redux/PowerReducer"
import { useSelector, useDispatch } from "react-redux"
import {motion} from "framer-motion"
import {playSound} from "../../components/playSound/playSound"

// Hosting using Socket.io:
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

  const [startTimer, setStartTimer] = useState(false)
  const [playersJoined, setPlayersJoined] = useState([])
  const [gameStarted, setGameStarted] = useState(false)
  const [letLateIn, setLetLateIn] = useState(false)


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


    
}, [socket])


  function startGame() {
    socket.emit("ready_game", playerStats.gameCode);
    setStartTimer(true)
    setGameStarted(true)
    dispatch(activate_power({power_name: "LEADERBOARD CARDS"}))
    
  }



  return (
    
    <div className='hostingView'>
        

        <div className="hostingView_top">
            <Timer startTimer={startTimer} />
            
            {gameStarted ? (
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 17 }} className='hostView_startBtn' onClick={() => startGame()}>LET LATE IN</motion.button>
            ) : (
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}  className='hostView_startBtn' onClick={() => startGame()}>START GAME</motion.button>
            )}
            
        </div>
        

        {gameStarted ? (<Hostboard />) : (
          
          <>

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
        
        </>

        )}
  </div>
    

  )
}

export default HostingView