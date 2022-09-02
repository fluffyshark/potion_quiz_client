import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"
import money_icon from "../../image_assets/general/money_icon.png"
import { useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom'
import pageturn from "../../sound_assets/pageturn.mp3"
import blocker1 from "../../image_assets/general/slime_blocker2.png"
import blocker2 from "../../image_assets/general/slime_blocker3.png"
import blocker3 from "../../image_assets/general/slime_blocker1.png"
import blocker4 from "../../image_assets/general/slime_blocker4.png"




function Navbar(props) {

  let navigate = useNavigate();
  const playerCoins = useSelector((state) => state.coins.value)
  const powersList = useSelector((state) => state.powers.value)
  
   
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


  // ADD BIG SLIME SPLASH ON SCREEN
  // ADD SPASH MUSIC
  

  useEffect(() => {
    if (powersList[14].blocker === "active" && powersList[3].protection !== "active") {
      document.getElementById("power_blocker_potion").style.display = "inherit"
      document.getElementById("power_blocker_craft").style.display = "inherit"
      document.getElementById("power_blocker_buysell").style.display = "inherit"
      document.getElementById("power_blocker_leaderboard").style.display = "inherit"
      navigate('/quiz')
    } else {
      document.getElementById("power_blocker_potion").style.display = "none"
      document.getElementById("power_blocker_craft").style.display = "none"
      document.getElementById("power_blocker_buysell").style.display = "none"
      document.getElementById("power_blocker_leaderboard").style.display = "none"
    }
  }, [powersList[14].blocker])

  

  return (
    <div className='navbar'>

        

      <div className="space_filler_left"></div>
        <div className='navbar_menu' >
          <Link onClick={() => playSound("page")} className='link' to="/quiz"><div className="navbar_menu_title" id="navbar_title_quiz">QUIZ</div></Link>
          <Link onClick={() => playSound("page")} className='link' to="/potions"><div className="navbar_menu_title" id="navbar_menu_title_potions">POTIONS <img id="power_blocker_potion" src={blocker1} alt="" /></div></Link>
          <Link onClick={() => playSound("page")} className='link' to="/craft"><div className="navbar_menu_title" id="navbar_menu_title_craft">CRAFT <img id="power_blocker_craft" src={blocker2} alt="" /></div></Link>
          <Link onClick={() => playSound("page")} className='link' to="/buysell"><div className="navbar_menu_title" id="navbar_menu_title_buysell" >BUY/SELL <img id="power_blocker_buysell" src={blocker3} alt="" /></div></Link>
          <Link onClick={() => playSound("page")} className='link' to="/leaderboard"><div className="navbar_menu_title" id="navbar_menu_title_leaderboard" >LEADERBOARD <img id="power_blocker_leaderboard" src={blocker4} alt="" /></div></Link>
        </div>
        <div className="player_money">
          <p id="money_points">{playerCoins.total}</p>
          <img src={money_icon} alt="" />
        </div>
    </div>
  )
}

export default Navbar