import React, { useEffect } from 'react'
import "./buySell.css"
import { motion } from "framer-motion";
import Navbar from "../../components/navbar/Navbar"
import Icer from "../../components/powers/Icer"
import market_btn from "../../image_assets/general/market_btn.png"
import buy_one_btn from "../../image_assets/general/buy_one_btn.png"
import store_buy_one from "../../image_assets/general/store_buy_one.png"
import store_buy_ten from "../../image_assets/general/store_buy_ten.png"
import store_buy_ten_btn from "../../image_assets/general/store_buy_ten_btn.png"
import store_buy_four from "../../image_assets/general/store_buy_four.png"
import store_buy_four_btn from "../../image_assets/general/store_buy_four_btn.png"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import {buy_four_ingredients, buy_fourteen_ingredients, buy_fifty_ingredients } from "../../redux/IngredientReducer.js"
import { reduce_coins_amount } from "../../redux/CoinsReducer.js"
import CoinSpend from "../../sound_assets/CoinSpend.wav"



function BuySell() {

  var props = {
    focus: "buysell",
    
  }

  const coinbag = useSelector((state) => state.coins.value)
  const dispatch = useDispatch()

  const powersList = useSelector((state) => state.powers.value)

  function playSound(sound) {
    if (sound === "coin") {new Audio(CoinSpend).play()}
  }



  useEffect(() => {
    if (coinbag.total < 50) {document.getElementById("lottery_btn01").style.opacity = 0.5}
    if (coinbag.total < 100) {document.getElementById("lottery_btn02").style.opacity = 0.5}
    if (coinbag.total < 300) {document.getElementById("lottery_btn03").style.opacity = 0.5}

    if (coinbag.total > 49) {document.getElementById("lottery_btn01").style.opacity = 1}
    if (coinbag.total > 99) {document.getElementById("lottery_btn02").style.opacity = 1}
    if (coinbag.total > 299) {document.getElementById("lottery_btn03").style.opacity = 1}
  },[coinbag.total])

  const buyIngredients = (amount) => {
    if (amount === 4) {dispatch(buy_four_ingredients()); dispatch(reduce_coins_amount(50))}
    if (amount === 14) {dispatch(buy_fourteen_ingredients()); dispatch(reduce_coins_amount(100))}
    if (amount === 50) {dispatch(buy_fifty_ingredients()); dispatch(reduce_coins_amount(300))}

    playSound("coin")

  }


 
 
  return (
    <div className='buySellView'>

      {powersList[4].freeze === "active" && powersList[3].protection !== "active" && <Icer />}
      
      <Navbar focus={props}/>
        
        <div className="buySellView_middle">
          <div className="buySellView_middle_container">
            <div className="buySellView_middle_lottery_container">
              
              <div className="buySellView_lottery_box">
                <img src={store_buy_one} alt="" className="lottery_items" />
                <motion.img whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 17 }} id="lottery_btn01" onClick={() => buyIngredients(4)} src={buy_one_btn} alt="" className="lottery_btns" />
                <p className="buySellView_lottery_desc">BUY 4 INGREDIENTS</p>
              </div>
              <div className="buySellView_lottery_box">
                <img src={store_buy_four} alt="" className="lottery_items" />
                <motion.img whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 17 }} id="lottery_btn02" onClick={() => buyIngredients(14)} src={store_buy_four_btn} alt="" className="lottery_btns" />
                <p className="buySellView_lottery_desc">BUY 14 INGREDIENTS</p>
              </div>
              <div className="buySellView_lottery_box">
                <img src={store_buy_ten} alt="" className="lottery_items" />
                <motion.img whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 17 }} id="lottery_btn03" onClick={() => buyIngredients(50)} src={store_buy_ten_btn} alt="" className="lottery_btns" />
                <p className="buySellView_lottery_desc">BUY 50 INGREDIENTS</p>
              </div>

            </div>
            <p className="buySellView_or">OR</p>
            <Link className='link' to="/marketplace">
              <motion.img whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 17 }} src={market_btn} alt="" className="buySellView_visit_market" />
            </Link>
          </div>
        </div>
        
        <div className="buySellView_footer">
            <div className="buySellView_footer_container">
                
            </div>
        </div>
    </div>
  )
}

export default BuySell