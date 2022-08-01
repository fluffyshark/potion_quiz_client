import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"
import money_icon from "../../image_assets/general/money_icon.png"
import {useSelector} from "react-redux"




function Navbar(props) {

  const playerGold = useSelector(state => state.playerGold)



  useEffect(() => {
    console.log(props.focus.focus)
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
        <Link className='link' to="/"><div className="navbar_menu_title" id="navbar_title_quiz">QUIZ</div></Link>
        <Link className='link' to="/potions"><div className="navbar_menu_title" id="navbar_menu_title_potions">POTIONS</div></Link>
        <Link className='link' to="/craft"><div className="navbar_menu_title" id="navbar_menu_title_craft">CRAFT</div></Link>
        <Link className='link' to="/buysell"><div className="navbar_menu_title" id="navbar_menu_title_buysell" >BUY/SELL</div></Link>
        <Link className='link' to="/leaderboard"><div className="navbar_menu_title" id="navbar_menu_title_leaderboard" >LEADERBOARD</div></Link>
        </div>
        <div className="player_money">
          <p id="money_points">{playerGold}</p>
          <img src={money_icon} alt="" />
        </div>
    </div>
  )
}

export default Navbar