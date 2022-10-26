import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { add_playerStartData } from "../../redux/PlayerSocketReducer"
import { add_gameStats } from "../../redux/GameStatsReducer"
import "./joinView.css"
import "./responsive/tablet.css"
import "./responsive/responsive.css"
import potion_rules from "../../image_assets/general/potion_rules.webp"



function JoinView(props) {

  let socket = props.socket
  let navigate = useNavigate();
  const dispatch = useDispatch()

  const [viewContent, setViewContent] = useState("gamecode")
  const [gameCode, setGameCode] = useState("")
  const [nickname, setNickname] = useState("")

   function switchViewContent() {
    if (gameCode !== "") {setViewContent("enterName"); joinRoom()}
    if (nickname !== "") {setViewContent("readyAndWaiting"); sendNickname()}
    }

    // Send Player data to server, host, redux, and localStorage
    const sendNickname = () => {
      socket.emit("player_joining", { nickname, cards: [0,0,0], gameCode });
      
      // Send player data to redux
      dispatch(add_playerStartData({playerName: nickname, cards: [0,0,0], gameCode: gameCode}))
      
      // Save initial player data to localStorage
      const storedPlayerData = {playerName : nickname,cards : [0,0,0],gameCode : gameCode, coins : 0}
      localStorage.setItem("playerStats", JSON.stringify(storedPlayerData))

      // Disconnected status set to false, to allow player stats to be save at localStorage
      localStorage.setItem("disconnected", "connected")
    };

    const configureGameCode = (playerGameCode) => {
      // Remove potiontial whitespace from gameCode
      const gameCodeNoWhitespace = playerGameCode.replace(/ /g,'')
      setGameCode(gameCodeNoWhitespace)
    }
  
    // Join room send
    const joinRoom = () => {
      if (gameCode !== "") {
        socket.emit("join_room", gameCode);
      //  console.log("JOIN join room working")
      }
    };


    // Start game receive
    useEffect(() => {
      socket.on("start_game", (data) => {
        dispatch(add_gameStats({data}))
        navigate('/quiz')
      })
  }, [socket]);

    


  return (
    <div className='joinView'>
        <div className="joinView_top">
            { viewContent === "readyAndWaiting" && <p className="joinView_top_title">Rules of the game</p>}
        </div>
        <div className="joinView_bottom">

        { viewContent === "gamecode" &&
           <div className="joinView_inputContainer">
                <p className="joinView_inputTitle">Game Code</p>
                <input type="text" className="joinView_inputfield" placeholder='Enter code here...' onChange={(e) => configureGameCode(e.target.value)}/>
                <div onClick={() => {switchViewContent()}} className="joinView_inputBtn">Next</div>
           </div>
        }
        { viewContent === "enterName" &&
           <div className="joinView_inputContainer">
                <p className="joinView_inputTitle">Nickname</p>
                <input type="text" className="joinView_inputfield" placeholder='Write a name...' onChange={(e) => setNickname(e.target.value)}/>
                <div onClick={() => {switchViewContent()}} className="joinView_inputBtn">Ready</div>
           </div>
        }
        { viewContent === "readyAndWaiting" &&
           <img src={potion_rules} alt="" className="rules_of_the_game" />
        }

        </div>

    </div>
  )
}

export default JoinView