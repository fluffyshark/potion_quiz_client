import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import "./disconnectedView.css"
import {motion} from "framer-motion"
// Redux
import { useDispatch } from "react-redux"
import { add_coins_amount } from "../../redux/CoinsReducer.js"
import { add_playerStartData } from "../../redux/PlayerSocketReducer"
import { add_gameStats } from "../../redux/GameStatsReducer"
import { localStorage_import_exp } from "../../redux/LevelExpReducer"
import { retrive_potionData } from "../../redux/PotionReducer"
import { IngredientData } from "../../redux/IngredientData.js"
import { retrive_ingreidentData, return_craftIngrediets } from "../../redux/IngredientReducer"
import { retrive_potionRecipe } from "../../redux/PotionRecipeReducer"
import { retrieve_market } from "../../redux/MarketplaceReducer"
import { retrive_buyLetter } from "../../redux/LetterReducer"
// Retrieve Functions
import { retrieveCoinsReducer } from "./retrieveFunctions/retrieveCoinsReduser"
import { retrievePlayerSocketReducer } from "./retrieveFunctions/retrievePlayerSocketReducer"
import { retrieveGameStatsReducer } from "./retrieveFunctions/retrieveGameStatsReducer"
import { retrieveLevelExpReducer } from "./retrieveFunctions/retrieveLevelExpReducer"
import { retrievePotionReducer } from "./retrieveFunctions/retrievePotionReducer"
import { retrieveIngredientReducer } from "./retrieveFunctions/retrieveIngredientReducer"
import { retrievePotionRecipeReducer } from "./retrieveFunctions/retrievePotionRecipeReducer"
import { retrieveCraftReducer } from "./retrieveFunctions/retrieveCraftReducer"
import { retrieveMarketplaceReducer } from "./retrieveFunctions/retrieveMarketplaceReducer"
import { retrieveLetterReducer } from "./retrieveFunctions/retrieveLetterReducer"


// NEXT - FIX TIMER 
// NEXT - ADD FUNCTIONALLIY TO END GAME

// NEXT - CHECK IF PLAYER ARE JOINED IN SOCKET ROOM AFTER RECONNECT, IF NOT REJOIN
// NEXT - ADD JUKEBOX SOUND TO HOSTBOARD VIA SOCKET

// NEXT - REMOVE OLD PLAYER AFTER RECCONNECT

// NEXT - CHECK CRAFTLIST IF IT NEEDS TO HAVE VALUE, MAP CRASH HAPPENS

// Crash might happen because of auction require potionList from localStorage, move that functionality to server insted


function DisconnectedView(props) {

  let socket = props.socket

  let navigate = useNavigate();
  const dispatch = useDispatch()
  const [gameOver, setGameOver] = useState(false)

  // Setting disconnected to true, letting autosave know not to overwrite player progress
  useEffect(() => {
    if (localStorage.getItem("disconnected") === "EndGame") {setGameOver(true)} 
    setTimeout(function() {localStorage.setItem("disconnected", "disconnected")}, 500);
  }, [])


/*
  function reconnect() {
    
    // Retrive Coinsreducer
    dispatch(add_coins_amount(retrieveCoinsReducer()))
    
    // Retrive PlayerSocketReducer
    dispatch(add_playerStartData(retrievePlayerSocketReducer()))
    
    // Retrive GameStatsReducer
    dispatch(add_gameStats(retrieveGameStatsReducer()))
    
    // Retrive LevelExpReducer
    dispatch(localStorage_import_exp(retrieveLevelExpReducer()))
    
    // Retrive PotionData
    dispatch(retrive_potionData(retrievePotionReducer()))
    
    // Retrive IngredientData
    dispatch(retrive_ingreidentData(retrieveIngredientReducer()))
    
    // Retrive PotionRecipe
    dispatch(retrive_potionRecipe(retrievePotionRecipeReducer()))

    // Retrive CraftList and return ingredients (if any) to ingredientList
    retrieveCraftReducer().map((item) => {if (item.amount >= 1) {dispatch(return_craftIngrediets({id:item.selected_id, amount: item.amount}))}})

    // Retrive MarketData
    dispatch(retrieve_market(retrieveMarketplaceReducer()))

    // Retrive BuyLetter
    dispatch(retrive_buyLetter(retrieveLetterReducer()))
    

    socket.emit("join_room", retrievePlayerSocketReducer().gameCode);
    socket.emit("player_joining", { nickname: retrievePlayerSocketReducer().playerName, cards: retrievePlayerSocketReducer().cards, gameCode: retrievePlayerSocketReducer().gameCode });


    setTimeout(function() {
      navigate('/quiz')
      localStorage.setItem("disconnected", "connected")
    }, 3000);
    
  } // End of reconnect()
*/


  function backToStartView() {navigate('/')}
  


    return (

    <div className='disconnectedView'>
      
        <div className="disconnectedView_top"></div>

        <div className="disconnectedView_bottom">

        {gameOver ? 
          ( 

            <div className="disconnectedView_boxContainer">
                <p className="disconnectedView_title_endgame">The Game Has Ended</p>
                <motion.div  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 17 }} onClick={() => {backToStartView()}} className="disconnectedView_reconnectBtn"><p>Back To Start</p></motion.div>
           </div>

          ) : (

            <div className="disconnectedView_boxContainer">
                <p className="disconnectedView_title">You're disconnected</p>
                <p className="disconnectedView_smalldescription">If the game is still on, would you like to reconnect ?</p>
                <motion.div  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 17 }} onClick={() => {backToStartView()}} className="disconnectedView_reconnectBtn"><p>Reconnect</p></motion.div>
           </div>

          )
        }

           

        </div>

    </div>

  )
}

export default DisconnectedView