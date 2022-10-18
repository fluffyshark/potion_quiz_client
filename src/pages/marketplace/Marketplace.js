import React, { useEffect, useState } from 'react'
import "../../components/navbar/Navbar"
import "./marketplace.css"
import Navbar from "../../components/navbar/Navbar"
import MarketplaceSell from "./MarketplaceSell.js"
import MarketplaceBuy from './MarketplaceBuy'
import no_ingred from "../../image_assets/general/no_ingred.png"
import add_btn from "../../image_assets/general/add_btn.png"
import reduce_btn from "../../image_assets/general/reduce_btn.png"
import done_btn from "../../image_assets/general/done_btn.png"
import { useDispatch, useSelector } from 'react-redux'
import { decrease_ingredients } from '../../redux/IngredientReducer'
import { add_coins_amount } from "../../redux/CoinsReducer.js"
import { motion } from "framer-motion";
import {CoinGainEffect} from "../../components/coinGainEffect/CoinGainEffect"
import envelope from "../../image_assets/general/envelope.png"
import { remove_buyLetter } from '../../redux/LetterReducer'


function Marketplace(props) {

  let socket = props.socket

  const [selectedID, setSelectedID] = useState(200)
  const [sellIngredient, setSellIngredient] = useState({image: no_ingred, ingredient: selectedID, price: 10, sellID: Math.floor((Math.random() * 9999999) + 1000000)})
  const [marketIsBuy, setmarketIsBuy] = useState(true)
  const [buyLetters, setBuyLetters] = useState([])

  const dispatch = useDispatch()
  const ingredientsList = useSelector((state) => state.ingredients.value)
  const playerStats = useSelector((state) => state.playerStats.value) 
  const gameStats = useSelector((state) => state.GameData.value)
  const buyletter = useSelector((state) => state.buyletter.value)


  useEffect(() => {
    if (marketIsBuy) {
      document.getElementById("marketplace_menu_sell").style.backgroundColor = "#1f80e0"
      document.getElementById("marketplace_menu_buy").style.backgroundColor = "#1c62b3"
    } else {
      document.getElementById("marketplace_menu_sell").style.backgroundColor = "#1c62b3"
      document.getElementById("marketplace_menu_buy").style.backgroundColor = "#1f80e0"
    }
  }, [marketIsBuy]);
  


  useEffect(() => {
    if (selectedID === 200) {
      setSellIngredient({image: no_ingred, price: sellIngredient.price, sellID: Math.floor((Math.random() * 9999999) + 1000000)})
    } else {
      setSellIngredient({image: ingredientsList[selectedID].image_normal, price: sellIngredient.price, sellID: Math.floor((Math.random() * 9999999) + 1000000)})
    }
  }, [selectedID])



  function changePrice(direction) {
    if (direction === "increase") {
      setSellIngredient(prev => ({...prev, price: prev.price + 1}))
    } else if (direction === "decrease") {
      setSellIngredient(prev => ({...prev, price: prev.price - 1}))
      if (sellIngredient.price < 1) {setSellIngredient(prev => ({...prev, price: prev.price = 1}))}
    }
  }



// Add sold ingredient price to state 
  useEffect(() => { 
    setBuyLetters(buyletter) 
    console.log("buyletter", buyletter)
    console.log("buyLetters", buyLetters)
  }, [buyletter])



  function clickOnLetter(letterprice, index) {
    // Add money popup animation at mouse potition
    CoinGainEffect(letterprice)
    // Removing price stored in useState. Envelope image with it. NOT WORKING
  //  setBuyLetters([...buyLetters.slice(0, index), ...buyLetters.slice(index + 1, buyLetters.length)]);
    // Removing price stored in reducer. 
    dispatch(remove_buyLetter(index))
    // Increase coins with the buy price
    dispatch(add_coins_amount(letterprice))
  }


  // NEXT - CREATE REDUCER TO MAKE ENVELOPE STAY WHEN SWITCING VIEWS


  function placeSellOrder() {
    // Get Player ID
    let playerID = []
    if (gameStats.hasOwnProperty('data')) {playerID = gameStats.data.filter(player => player.playerName === playerStats.playerName)} else {playerID = gameStats.filter(player => player.playerName === playerStats.playerName)}
    // Send sell order to server by socket.io
    socket.emit("sending_player_sellorder", {playerID: playerID[0].id, playerName: playerStats.playerName, ingredient: selectedID, price: sellIngredient.price, gameCode: playerStats.gameCode, sellID: sellIngredient.sellID})
    // Reduce the amount for the sold ingredient
    dispatch(decrease_ingredients({id:selectedID}))
    // Reset state and render 
    setSellIngredient({image: no_ingred, ingredient: selectedID, price: 10, sellID: Math.floor((Math.random() * 9999999) + 1000000)})
    setSelectedID(200)
  }

  

  return (
    <div className='marketplace'>
        <Navbar focus={props}/>
        <div className="marketplace_middle">
          <div className="marketplace_middle_container">
          
          <div className="marketplace_menu_container">
                <div className="marketplace_menu">
                    <div className="marketplace_menu_filler_left"></div>
                    <div className="marketplace_menu_potions_ingreds">
                        <div className="marketplace_menu_potions_btn market_menu_btns">POTIONS</div>
                        <div className="marketplace_menu_indredients_btn market_menu_btns">INGREDIENTS</div>
                    </div>
                    <div className="marketplace_menu_buysell">
                    <div className="menu_buysell_text" id="marketplace_menu_buy" onClick={() => setmarketIsBuy(true)}>BUY</div>
                        <div className="menu_buysell_text" id="marketplace_menu_sell" onClick={() => setmarketIsBuy(false)}>SELL</div>
                    </div>
                </div>
            </div>
              
            {marketIsBuy ? ( <MarketplaceBuy socket={socket} /> ) : ( <MarketplaceSell setSelectedID={setSelectedID} /> )}
           
          </div>
        </div>
        <div className="marketplace_footer">
          <div className="marketplace_footer_container">  


            {marketIsBuy ? ( 
              
              <>
                {
                buyLetters.length <= 0 ? <p className='marketplace_footer_buy_process'>NO NEW SALES</p> 
                : 
                buyLetters.map((letter, i) => {return (<motion.img whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 200, damping: 40 }} key={i} onClick={() => {clickOnLetter(letter, i)}} src={envelope} className="marketplace_letterImg" />)})
                }
              </>
              
            ) : ( 
            
              <>
                <p className='marketplace_offer_text1'>OFFER TO SELL</p>
                <img src={sellIngredient.image} alt="" className="marketplace_offer_ingred" />
                <p className='marketplace_offer_text2'>FOR</p>
                <motion.img whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 200, damping: 40 }} onClick={() => {changePrice("increase")}} src={add_btn} alt="" className="marketplace_offer_btns" />
                <p className='marketplace_offer_text3'>{sellIngredient.price}</p>
                <motion.img whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 200, damping: 40 }} onClick={() => {changePrice("decrease")}} src={reduce_btn} alt="" className="marketplace_offer_btns" />

                {selectedID === 200 ?  
                  <motion.img whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 200, damping: 40 }} onClick={() => {placeSellOrder()}} src={done_btn} alt="" className="marketplace_offer_done_btn_no_ingred" />   
                  :    
                  <motion.img whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 200, damping: 40 }} onClick={() => {placeSellOrder()}} src={done_btn} alt="" className="marketplace_offer_done_btn" /> }
           
              </>

            )}
                  

          </div>
        </div>
    </div>
  )
}



export default Marketplace