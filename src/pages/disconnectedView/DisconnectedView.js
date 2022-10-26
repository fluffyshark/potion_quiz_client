import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import "./disconnectedView.css"
import {motion} from "framer-motion"
import { useDispatch } from "react-redux"
import { add_coins_amount } from "../../redux/CoinsReducer.js"
import { add_playerStartData } from "../../redux/PlayerSocketReducer"
import { add_gameStats } from "../../redux/GameStatsReducer"
import { localStorage_import_exp } from "../../redux/LevelExpReducer"


// NEXT - ADD RECONNECTING FUNCTIONALITY WHEN CLICK BUTTON, POPULATE REDUX FROM LOCALSTORAGE
// NEXT - FIX TIMER 
// NEXT - ADD FUNCTIONALLIY TO END GAME
// NEXT - BACKGROUND IMAGE NEED TO BE WEBP 
// NEXT - LOOP IN POTION IMAGES INTO REDUX

// NEXT - AUTOLOAD ALL TO REDUX



function DisconnectedView() {

  let navigate = useNavigate();
  const dispatch = useDispatch()

  // Setting disconnected to true, letting autosave know not to overwrite player progress
  useEffect(() => {localStorage.setItem("disconnected", "disconnected")}, [])

  function reconnect() {
    
    dispatch(add_coins_amount(JSON.parse(localStorage.getItem("coinList"))))
    dispatch(add_playerStartData(JSON.parse(localStorage.getItem("playerStats"))))
    dispatch(add_gameStats(JSON.parse(localStorage.getItem("gameStats"))))
    dispatch(localStorage_import_exp(JSON.parse(localStorage.getItem("levelExp"))))


    
    setTimeout(function() {
      navigate('/quiz')
      localStorage.setItem("disconnected", "connected")
    }, 3000);
    
  }

  
    return (

    <div className='disconnectedView'>
      
        <div className="disconnectedView_top"></div>

        <div className="disconnectedView_bottom">

           <div className="disconnectedView_boxContainer">
                <p className="disconnectedView_title">You're disconnected</p>
                <p className="disconnectedView_smalldescription">If the game is still on, would you like to reconnect ?</p>
                <motion.div  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 17 }} onClick={() => {reconnect()}} className="disconnectedView_reconnectBtn"><p>Reconnect</p></motion.div>
           </div>

        </div>

    </div>

  )
}

export default DisconnectedView