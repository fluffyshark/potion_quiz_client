import React from 'react'
import { useState } from 'react'
import "./joinView.css"
import io from "socket.io-client"
import potion_rules from "../../image_assets/general/potion_rules.png"

// const socket = io.connect("https://potion-quiz-server.herokuapp.com/")
 const socket = io.connect("http://localhost:3001")

function JoinView() {

    const [viewContent, setViewContent] = useState("gamecode")
    const [gameCode, setGameCode] = useState("")
    const [nickname, setNickname] = useState("")

   function switchViewContent() {
    if (gameCode !== "") {setViewContent("enterName"); joinRoom()}
    if (nickname !== "") {setViewContent("readyAndWaiting"); sendNickname()}
    }

   
    const sendNickname = () => {
      socket.emit("send_message", { nickname, gameCode });
  
    };
  
      
    const joinRoom = () => {
      if (gameCode !== "") {
        socket.emit("join_room", gameCode);
        console.log("JOIN join room working")
      }
    };

    

  return (
    <div className='joinView'>
        <div className="joinView_top">
            { viewContent === "readyAndWaiting" && <p className="joinView_top_title">Rules of the game</p>}
        </div>
        <div className="joinView_bottom">

        { viewContent === "gamecode" &&
           <div className="joinView_inputContainer">
                <p className="joinView_inputTitle">Game Code</p>
                <input type="text" className="joinView_inputfield" placeholder='Enter code here...' onChange={(e) => setGameCode(e.target.value)}/>
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