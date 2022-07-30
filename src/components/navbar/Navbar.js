import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"
import money_icon from "../../image_assets/general/money_icon.png"




function Navbar() {


  return (
    <div className='navbar'>
      <div className="space_filler_left"></div>
        <div className='navbar_menu' >
        <Link className='link' to="/"><div className="navbar_menu_title" id="navbar_title_quiz">QUIZ</div></Link>
        <Link className='link' to="/potions"><div className="navbar_menu_title" id="navbar_menu_title_potions">POTIONS</div></Link>
        <Link className='link' to="/craft"><div className="navbar_menu_title" id="navbar_menu_title_craft">CRAFT</div></Link>
        <Link className='link' to="/buysell"><div className="navbar_menu_title" id="navbar_menu_title_buysell">BUY/SELL</div></Link>
        <Link className='link' to="/leaderboard"><div className="navbar_menu_title" id="navbar_menu_title_leaderboard">LEADERBOARD</div></Link>
        </div>
        <div className="player_money">
          <p>30</p>
          <img src={money_icon} alt="" />
        </div>
    </div>
  )
}

export default Navbar