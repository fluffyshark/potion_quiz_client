import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./startView.css"
import logo from  "../../image_assets/general/logo.png"
import joinBtn from "../../image_assets/general/joinbtn.png"
import hostBtn from "../../image_assets/general/hostbtn.png"
import or from "../../image_assets/general/or.png"
import BackgroundMusic from "../../sound_assets/IntroBackgroundMusic.wav"

function StartView() {

  function playSound(sound) {
    if (sound === "BackgroundMusic") {new Audio(BackgroundMusic).play()}
  }



  return (
    <div className='startView'>
      <div className="startView_top"></div>
      <div className="startView_middle">
        <img src={logo} alt="" className="startView_logo" />
        <Link to="/join"><img src={joinBtn} alt="" className="startView_btns" /></Link>
        <img src={or} alt="" className="startView_or" />
        <Link to="/host"><img onClick={() => playSound("BackgroundMusic")} src={hostBtn} alt="" className="startView_btns" /></Link>
      </div>
      <div className="startView_bottom"></div>
    </div>
  )
}

export default StartView

