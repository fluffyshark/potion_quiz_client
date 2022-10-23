import React from 'react'
import "./disconnectedView.css"


// NEXT - ADD RECONNECTING FUNCTIONALITY WHEN CLICK BUTTON

// NEXT - SAVE PLAYERSTATS IN LOCALSTORAGE
// NEXT - ADD DISCONNECTED CHECKER ON EVERY PAGE
// NEXT - FIX TIMER 
// NEXT - ADD FUNCTIONALLIY TO END GAME


function DisconnectedView() {
  
    return (

    <div className='disconnectedView'>

        <div className="disconnectedView_top">

        </div>

        <div className="disconnectedView_bottom">

           <div className="disconnectedView_boxContainer">
                <p className="disconnectedView_title">You're disconnected</p>
                <p className="disconnectedView_smalldescription">If the game is still on, would you like to reconnect ?</p>
                <div className="disconnectedView_reconnectBtn"><p>Reconnect</p></div>
           </div>

        </div>

    </div>

  )
}

export default DisconnectedView