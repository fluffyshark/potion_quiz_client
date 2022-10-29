import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import "./disconnectedView.css"
import {motion} from "framer-motion"
import { useDispatch } from "react-redux"
import { add_coins_amount } from "../../redux/CoinsReducer.js"
import { add_playerStartData } from "../../redux/PlayerSocketReducer"
import { add_gameStats } from "../../redux/GameStatsReducer"
import { localStorage_import_exp } from "../../redux/LevelExpReducer"
import { retrive_potionData } from "../../redux/PotionReducer"
import { PotionData } from "../../redux/PotionData.js"
import { IngredientData } from "../../redux/IngredientData.js"
import { retrive_ingreidentData, return_craftIngrediets } from "../../redux/IngredientReducer"
import { retrive_potionRecipe } from "../../redux/PotionRecipeReducer"
import { update_market } from "../../redux/MarketplaceReducer"
import { retrive_buyLetter } from "../../redux/LetterReducer"


// NEXT - FIX TIMER 
// NEXT - ADD FUNCTIONALLIY TO END GAME

// NEXT - CHECK THAT MARKETDATA AND BUYLETTER ARE RETRIVED
// NEXT - CHECK IF PLAYER ARE JOINED IN SOCKET ROOM AFTER RECONNECT, IF NOT REJOIN
// NEXT - ADD SOUND EFFECT AGAIN
// NEXT - ADD JUKEBOX SOUND TO HOSTBOARD VIA SOCKET



function DisconnectedView(props) {

  let socket = props.socket

  let navigate = useNavigate();
  const dispatch = useDispatch()

  // Setting disconnected to true, letting autosave know not to overwrite player progress
  useEffect(() => {localStorage.setItem("disconnected", "disconnected")}, [])

  function reconnect() {
    
    // Retrive Coinsreducer
    dispatch(add_coins_amount(JSON.parse(localStorage.getItem("coinList"))))
    // Retrive PlayerSocketReducer
    const playerStats = JSON.parse(localStorage.getItem("playerStats"))
    dispatch(add_playerStartData(playerStats))
    // Retrive GameStatsReducer
    dispatch(add_gameStats(JSON.parse(localStorage.getItem("gameStats"))))
    // Retrive LevelExpReducer
    dispatch(localStorage_import_exp(JSON.parse(localStorage.getItem("levelExp"))))
    
    // Retrive PotionData
    const storedPotionData = JSON.parse(localStorage.getItem("potionsList"))
    let retrivedPotionData = JSON.parse(JSON.stringify(PotionData))

    retrivedPotionData.map((item, i) => {
      item.amount = storedPotionData[i].amount; item.discovered = storedPotionData[i].discovered
      item.level = storedPotionData[i].level; item.earnedPoints = storedPotionData[i].earnedPoints
    })

    dispatch(retrive_potionData(retrivedPotionData))

    
    // Retrive IngredientData
    const storedIngredentData = JSON.parse(localStorage.getItem("ingredientsList"))
    let retrivedIngredientData = JSON.parse(JSON.stringify(IngredientData))

    retrivedIngredientData.map((item, i) => {
      item.amount = storedIngredentData[i].amount; 
      item.discovered = storedIngredentData[i].discovered
    })
    
    dispatch(retrive_ingreidentData(retrivedIngredientData))


    // Retrive PotionRecipe
    const retrivedPotionRecipe = JSON.parse(localStorage.getItem("recipeList"))
    dispatch(retrive_potionRecipe(retrivedPotionRecipe))

    // Retrive MarketData
    const retrivedMarketData = JSON.parse(localStorage.getItem("marketData"))
    dispatch(update_market(retrivedMarketData))

    // Retrive BuyLetter
    const retrivedBuyLetter = JSON.parse(localStorage.getItem("buyletter"))
    dispatch(retrive_buyLetter(retrivedBuyLetter))
 
    // CHECK WHY CRAFTLIST NOT WORKING

    // Retrive CraftList and return ingredients (if any) to ingredientList
    setTimeout(function() {
      const retrivedCraftList = JSON.parse(localStorage.getItem("craftList"))
      console.log("retrivedCraftList", retrivedCraftList)
      retrivedCraftList.map((item) => {if (item.amount >= 1) {dispatch(return_craftIngrediets({id:item.selected_id, amount: item.amount}))}})
    }, 6000);

 
    socket.emit("join_room", playerStats.gameCode);
    socket.emit("player_joining", { nickname: playerStats.playerName, cards: playerStats.cards, gameCode: playerStats.gameCode });


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