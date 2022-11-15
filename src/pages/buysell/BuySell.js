import React, { useEffect, useState } from 'react'
import "./buySell.css"
import "./responsive/responsive.css"
import "./responsive/tablet.css"
import { motion } from "framer-motion";
import Navbar from "../../components/navbar/Navbar"
import Icer from "../../components/powers/Icer"
import MassFreeze from "../../components/powers/MassFreeze.js"
import market_btn from "../../image_assets/general/market_btn.png"
import buy_one_btn from "../../image_assets/general/buy_one_btn.png"
import store_buy_one from "../../image_assets/general/store_buy_one.webp"
import store_buy_ten from "../../image_assets/general/store_buy_ten.webp"
import store_buy_ten_btn from "../../image_assets/general/store_buy_ten_btn.png"
import store_buy_four from "../../image_assets/general/store_buy_four.webp"
import store_buy_four_btn from "../../image_assets/general/store_buy_four_btn.png"
import buy_one_10_btn from "../../image_assets/general/buy_one_10_btn.png"
import store_buy_ten_10_btn from "../../image_assets/general/store_buy_ten_10_btn.png"
import store_buy_four_10_btn from "../../image_assets/general/store_buy_four_10_btn.png"
import buy_one_25_btn from "../../image_assets/general/buy_one_25_btn.png"
import store_buy_ten_25_btn from "../../image_assets/general/store_buy_ten_25_btn.png"
import store_buy_four_25_btn from "../../image_assets/general/store_buy_four_25_btn.png"
import buy_one_40_btn from "../../image_assets/general/buy_one_40_btn.png"
import store_buy_ten_40_btn from "../../image_assets/general/store_buy_ten_40_btn.png"
import store_buy_four_40_btn from "../../image_assets/general/store_buy_four_40_btn.png"
import { useDispatch, useSelector } from "react-redux"
import {buy_four_ingredients, buy_fourteen_ingredients, buy_fifty_ingredients } from "../../redux/IngredientReducer.js"
import { reduce_coins_amount } from "../../redux/CoinsReducer.js"
import ReceiveGiveGift from '../../components/powers/GiveGift';
import { Link } from 'react-router-dom';
import { playSound } from '../../components/playSound/playSound';



function BuySell() {

  var props = {
    focus: "buysell", 
  }


  const [prices, setPrices] = useState({price_blue: 50, price_purple: 100, price_gold: 300, blue_btn: buy_one_btn, purple_btn: store_buy_four_btn, gold_btn: store_buy_ten_btn})

  const dispatch = useDispatch()
  const coinbag = useSelector((state) => state.coins.value)
  const powersList = useSelector((state) => state.powers.value)
  const potionsList = useSelector((state) => state.potions.value)


  useEffect(() => {
    if (powersList[11].price === "active") {
      if (potionsList[11].level === 1) {setPrices({price_blue: 45, price_purple: 90, price_gold: 270, blue_btn: buy_one_10_btn, purple_btn: store_buy_four_10_btn, gold_btn: store_buy_ten_10_btn})}
      else  if (potionsList[11].level === 2) {setPrices({price_blue: 40, price_purple: 75, price_gold: 225, blue_btn: buy_one_25_btn, purple_btn: store_buy_four_25_btn, gold_btn: store_buy_ten_25_btn})}
      else if (potionsList[11].level === 3) {setPrices({price_blue: 30, price_purple: 60, price_gold: 180, blue_btn: buy_one_40_btn, purple_btn: store_buy_four_40_btn, gold_btn: store_buy_ten_40_btn})}
    } else {
      setPrices({price_blue: 50, price_purple: 100, price_gold: 300, blue_btn: buy_one_btn, purple_btn: store_buy_four_btn, gold_btn: store_buy_ten_btn})
    }
  }, [powersList[11].price])


  useEffect(() => {
    if (coinbag.total < 50) {document.getElementById("lottery_btn01").style.opacity = 0.5; document.getElementById("lottery_btn01").style.pointerEvents = "none"}
    if (coinbag.total < 100) {document.getElementById("lottery_btn02").style.opacity = 0.5; document.getElementById("lottery_btn02").style.pointerEvents = "none" }
  //  if (coinbag.total < 300) {document.getElementById("lottery_btn03").style.opacity = 0.5; document.getElementById("lottery_btn03").style.pointerEvents = "none"}

    if (coinbag.total > 49) {document.getElementById("lottery_btn01").style.opacity = 1; document.getElementById("lottery_btn01").style.pointerEvents = "auto"}
    if (coinbag.total > 99) {document.getElementById("lottery_btn02").style.opacity = 1; document.getElementById("lottery_btn02").style.pointerEvents = "auto"}
    if (coinbag.total > 299) {document.getElementById("lottery_btn03").style.opacity = 1; document.getElementById("lottery_btn03").style.pointerEvents = "auto"}
  },[coinbag.total])

  const buyIngredients = (amount) => {
      if (amount === 4) {dispatch(buy_four_ingredients()); dispatch(reduce_coins_amount(prices.price_blue))}
      if (amount === 14) {dispatch(buy_fourteen_ingredients()); dispatch(reduce_coins_amount(prices.price_purple))}
      if (amount === 50) {dispatch(buy_fifty_ingredients()); dispatch(reduce_coins_amount(prices.price_gold))}

      playSound("coinSpend")

  }


 
 
  return (
    <div className='buySellView'>

      {powersList[4].freeze === "active" && powersList[3].protection !== "active" && <Icer />}
      {powersList[18].mass_freeze === "active" && powersList[3].protection !== "active" && <MassFreeze />}
      {powersList[7].gift === "active" && <ReceiveGiveGift />}

      <Navbar focus={props}/>
        
        <div className="buySellView_middle">
          <div className="buySellView_middle_container">
            <div className="buySellView_middle_lottery_container">
              
              <div className="buySellView_lottery_box">
                <img src={store_buy_one} alt="" className="lottery_items" />
                <motion.img whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 17 }} id="lottery_btn01" onClick={() => buyIngredients(4)} src={prices.blue_btn} alt="" className="lottery_btns" />
                <p className="buySellView_lottery_desc">BUY 4 INGREDIENTS</p>
              </div>
              <div className="buySellView_lottery_box">
                <img src={store_buy_four} alt="" className="lottery_items" />
                <motion.img whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 17 }} id="lottery_btn02" onClick={() => buyIngredients(14)} src={prices.purple_btn} alt="" className="lottery_btns" />
                <p className="buySellView_lottery_desc">BUY 14 INGREDIENTS</p>
              </div>
              <div className="buySellView_lottery_box">
                <img src={store_buy_ten} alt="" className="lottery_items" />
                <motion.img whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 17 }} id="lottery_btn03" onClick={() => buyIngredients(50)} src={prices.gold_btn} alt="" className="lottery_btns" />
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