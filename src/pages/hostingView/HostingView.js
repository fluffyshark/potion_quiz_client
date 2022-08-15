import React, { useEffect, useState } from 'react'
import "./hostingView.css"
import io from "socket.io-client"
import Timer from "../../components/timer/Timer.js"

// const socket = io.connect("https://potion-quiz-server.herokuapp.com/")
const socket = io.connect("http://localhost:3001")

// Generate random number
const randomNum = (Math.floor(Math.random() * 999999999))
      
// Turn number into array
let myFunc = num => Number(num);
var intArr = Array.from(String(randomNum), myFunc);

// Add space between numbers
intArr.splice(3, 0, " ");
intArr.splice(7, 0, " ");

// Turn array into string
let gameCode = intArr.join("")



function HostingView() {

  const [startTimer, setStartTimer] = useState(false)
  const [room, setRoom] = useState("");
  const [playersJoined, setPlayersJoined] = useState([])

    
  const joinRoom = () => {
    if (gameCode !== "") {
      socket.emit("join_room", gameCode);
    }
  };


  useEffect(() => {
    socket.on("receive_message", (data) => {
      setPlayersJoined(playersJoined => [...playersJoined, data.nickname]);
    })
}, [socket])

console.log(playersJoined)

setTimeout(function() {
  setRoom(gameCode)
  joinRoom()
  console.log("GAMECODE", room)
}, 1000);


  return (
    <div className='hostingView'>
        <div className="hostingView_top">
            <Timer startTimer={startTimer} />
            <button className='hostView_startBtn' onClick={() => setStartTimer(true)}>START GAME</button>
        </div>
        <div className="hostingView_middle">
            <p className="joinDesc">Go to magicpotions.com/join and enter:</p>
            <p className="joinCode">{gameCode}</p>
        </div>
        <div className="hostingView_bottom">

        {playersJoined.map((player, i) => {
                    if (playersJoined.length > 0) {
                      return (<div key={i} className="playerTags">{player}</div>)
                    }
                  })} 

        </div>

    </div>
  )
}

export default HostingView