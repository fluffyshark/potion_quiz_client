import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux"
import { add_playerStartData } from "../../redux/PlayerSocketReducer"
import "./startView.css"
import "./responsive/responsive.css"
import "./responsive/tablet.css"
import Logo from  "../../image_assets/general/Logo"
import JoinBtn from  "../../image_assets/general/JoinBtn"
import or from "../../image_assets/general/or.png"
import {motion} from "framer-motion"
import HostBtn from '../../image_assets/general/HostBtn'



function StartView(props) {

  let socket = props.socket
  const dispatch = useDispatch()

  function hostGame() {
    
    // Generate random number, that will be the gameCode (now called hostCode)
    const hostCode = (Math.floor(Math.random() * 999999999))

    // Turn number into array
    let myFunc = num => Number(num);
    var intArr = Array.from(String(hostCode), myFunc);
  
    // Add space between numbers
    intArr.splice(3, 0, " ");
    intArr.splice(7, 0, " ");
    
    // Turn array into string
    let displayCode = intArr.join("")

    // Host also need to join the same socket.io room to communicate with players in the room
  //  socket.emit("join_room", String(hostCode));

    // Host create room named same as the gameCode. This gameCode will be be the name of the object thread where the game data will be managed.
    socket.emit("host_creating_room", String(hostCode));

    // Send host data to redux
    dispatch(add_playerStartData({playerName: "HOST", playerPoints: 0, gameCode: String(hostCode), displayCode: displayCode}))

    // Disconnected status set to false, to allow player stats to be save at localStorage
    localStorage.setItem("disconnected", "connected")

//    playSound("BackgroundMusic")
  }




  return (
    <div className='startView'>
      <div className="startView_top"></div>
      <div className="startView_middle">
      <div className="startView_logo"><Logo /></div>

        <div className="startView_centerBtns">
          <Link to="/join"><motion.div  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 17 }} className="startView_btns"><JoinBtn /></motion.div></Link>
          <img src={or} alt="" className="startView_or" />
          <Link to="/host"><motion.div  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 17 }} onClick={() => hostGame()} className="startView_btns" id="play2"><HostBtn /></motion.div></Link>
        </div>
      </div>
      <div className="startView_bottom"></div>
    </div>
  )
}

export default StartView

