import React from 'react'
import "./disconnectedView.css"
import {motion} from "framer-motion"



// NEXT - ADD RECONNECTING FUNCTIONALITY WHEN CLICK BUTTON, POPULATE REDUX FROM LOCALSTORAGE
// NEXT - FIX TIMER 
// NEXT - ADD FUNCTIONALLIY TO END GAME


function DisconnectedView() {


  function reconnect() {
    
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