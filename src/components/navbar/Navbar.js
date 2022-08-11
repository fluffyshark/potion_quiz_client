import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"
import money_icon from "../../image_assets/general/money_icon.png"
import { useSelector } from "react-redux"
import pageturn from "../../sound_assets/pageturn.mp3"


function Navbar(props) {

  const playerCoins = useSelector((state) => state.coins.value)

  function playSound(sound) {
    if (sound === "page") {new Audio(pageturn).play()}
    
    
  }


  useEffect(() => {
    document.getElementById("navbar_title_quiz").style.backgroundColor = "#2e1e12"
    document.getElementById("navbar_menu_title_potions").style.backgroundColor = "#2e1e12"
    document.getElementById("navbar_menu_title_craft").style.backgroundColor = "#2e1e12"
    document.getElementById("navbar_menu_title_buysell").style.backgroundColor = "#2e1e12"
    document.getElementById("navbar_menu_title_leaderboard").style.backgroundColor = "#2e1e12"

    switch(props.focus.focus) {
      case "quiz": document.getElementById("navbar_title_quiz").style.backgroundColor = "#e8c242"; break;
      case "potions": document.getElementById("navbar_menu_title_potions").style.backgroundColor = "#e8c242"; break;
      case "craft": document.getElementById("navbar_menu_title_craft").style.backgroundColor = "#e8c242"; break;
      case "buysell": document.getElementById("navbar_menu_title_buysell").style.backgroundColor = "#e8c242"; break;
      case "leaderboard": document.getElementById("navbar_menu_title_leaderboard").style.backgroundColor = "#e8c242"; break;
      default:
        console.log("no menu title for this one")
    }
 
  }, [props.focus.focus]);



  return (
    <div className='navbar'>
      <div className="space_filler_left"></div>
        <div className='navbar_menu' >
        <Link onClick={() => playSound("page")} className='link' to="/"><div className="navbar_menu_title" id="navbar_title_quiz">QUIZ</div></Link>
        <Link onClick={() => playSound("page")} className='link' to="/potions"><div className="navbar_menu_title" id="navbar_menu_title_potions">POTIONS</div></Link>
        <Link onClick={() => playSound("page")} className='link' to="/craft"><div className="navbar_menu_title" id="navbar_menu_title_craft">CRAFT</div></Link>
        <Link onClick={() => playSound("page")} className='link' to="/buysell"><div className="navbar_menu_title" id="navbar_menu_title_buysell" >BUY/SELL</div></Link>
        <Link onClick={() => playSound("page")} className='link' to="/leaderboard"><div className="navbar_menu_title" id="navbar_menu_title_leaderboard" >LEADERBOARD</div></Link>
        </div>
        <div className="player_money">
          <p id="money_points">{playerCoins}</p>
          <img src={money_icon} alt="" />
        </div>
    </div>
  )
}

export default Navbar