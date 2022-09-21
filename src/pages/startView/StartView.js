import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux"
import { add_playerStartData } from "../../redux/PlayerSocketReducer"
import "./startView.css"
import "./responsive/ipadAir2.css"
import logo from  "../../image_assets/general/logo.png"
import joinBtn from "../../image_assets/general/joinbtn.png"
import hostBtn from "../../image_assets/general/hostbtn.png"
import or from "../../image_assets/general/or.png"
import BackgroundMusic from "../../sound_assets/IntroBackgroundMusic.wav"
import {motion} from "framer-motion"


function StartView(props) {

  let socket = props.socket
  const dispatch = useDispatch()
  
  
  function playSound(sound) {
    if (sound === "BackgroundMusic") {new Audio(BackgroundMusic).play()}
  }


  function hostGame() {
    
    // Generate random number
    const randomNum = (Math.floor(Math.random() * 999999999))
        
    // Turn number into array
    let myFunc = num => Number(num);
    var intArr = Array.from(String(randomNum), myFunc);
  
    // Add space between numbers
    intArr.splice(3, 0, " ");
    intArr.splice(7, 0, " ");
  
    // Turn array into string
    let hostCode = intArr.join("")

    // Host also need to join the same socket.io room to communicate with players in the room
    socket.emit("join_room", hostCode);

    dispatch(add_playerStartData({playerName: "HOST", playerPoints: 0, gameCode: hostCode}))

    playSound("BackgroundMusic")
  }


  return (
    <div className='startView'>
      <div className="startView_top"></div>
      <div className="startView_middle">
        <img src={logo} alt="" className="startView_logo" />
        <Link to="/join"><motion.img  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 17 }} src={joinBtn} alt="" className="startView_btns" /></Link>
        <img src={or} alt="" className="startView_or" />
        <Link to="/host"><motion.img  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 17 }} onClick={() => hostGame()} src={hostBtn} alt="" className="startView_btns" /></Link>
      </div>
      <div className="startView_bottom"></div>
    </div>
  )
}

export default StartView

