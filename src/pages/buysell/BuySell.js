import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
// CSS
import "./buySell.css"
import "./responsive/responsive.css"
import "./responsive/tablet.css"
// Redux
import { useDispatch, useSelector } from "react-redux"
import { reduce_coins_amount } from "../../redux/CoinsReducer.js"
// Components
import Navbar from "../../components/navbar/Navbar"
import Icer from "../../components/powers/Icer"
import MassFreeze from "../../components/powers/MassFreeze.js"
import ReceiveGiveGift from '../../components/powers/GiveGift';
import BoughtIngredients from './boughtIngredients/BoughtIngredients';
// Images
import market_btn from "../../image_assets/general/market_btn.png"
import blue_level_0 from "../../image_assets/general/button_pricetag_blue_level0.webp"
import blue_level_1 from "../../image_assets/general/button_pricetag_blue_level1.webp"
import blue_level_2 from "../../image_assets/general/button_pricetag_blue_level2.webp"
import blue_level_3 from "../../image_assets/general/button_pricetag_blue_level3.webp"
import purple_level_0 from "../../image_assets/general/button_pricetag_purple_level0.webp"
import purple_level_1 from "../../image_assets/general/button_pricetag_purple_level1.webp"
import purple_level_2 from "../../image_assets/general/button_pricetag_purple_level2.webp"
import purple_level_3 from "../../image_assets/general/button_pricetag_purple_level3.webp"
import yellow_level_0 from "../../image_assets/general/button_pricetag_yellow_level0.webp"
import yellow_level_1 from "../../image_assets/general/button_pricetag_yellow_level1.webp"
import yellow_level_2 from "../../image_assets/general/button_pricetag_yellow_level2.webp"
import yellow_level_3 from "../../image_assets/general/button_pricetag_yellow_level3.webp"
import store_buy_one from "../../image_assets/general/store_buy_one.webp"
import store_buy_ten from "../../image_assets/general/store_buy_ten.webp"
import store_buy_four from "../../image_assets/general/store_buy_four.webp"



function BuySell() {

  var props = {
    focus: "buysell", 
  }

  const [playerPurchase, setPlayerPurchase] = useState("none")
  const [prices, setPrices] = useState({price_blue: 30, price_purple: 70, price_gold: 150, blue_btn: blue_level_0, purple_btn: purple_level_0, gold_btn: yellow_level_0})

  const dispatch = useDispatch()
  const coinbag = useSelector((state) => state.coins.value)
  const powersList = useSelector((state) => state.powers.value)
  const potionsList = useSelector((state) => state.potions.value)


  useEffect(() => {
    if (powersList[11].price === "active") {
      if (potionsList[11].level === 1) {setPrices({price_blue: 20, price_purple: 50, price_gold: 130, blue_btn: blue_level_1, purple_btn: purple_level_1, gold_btn: yellow_level_1})}
      else  if (potionsList[11].level === 2) {setPrices({price_blue: 15, price_purple: 40, price_gold: 100, blue_btn: blue_level_2, purple_btn: purple_level_2, gold_btn: yellow_level_2})}
      else if (potionsList[11].level === 3) {setPrices({price_blue: 10, price_purple: 20, price_gold: 50, blue_btn: blue_level_3, purple_btn: purple_level_3, gold_btn: yellow_level_3})}
    } else {
      setPrices({price_blue: 30, price_purple: 70, price_gold: 150, blue_btn: blue_level_0, purple_btn: purple_level_0, gold_btn: yellow_level_0})
    }
  }, [powersList[11].price])


  useEffect(() => {
    if (coinbag.total < 30) {document.getElementById("lottery_btn01").style.opacity = 0.5; document.getElementById("lottery_btn01").style.pointerEvents = "none"}
    if (coinbag.total < 70) {document.getElementById("lottery_btn02").style.opacity = 0.5; document.getElementById("lottery_btn02").style.pointerEvents = "none" }
    if (coinbag.total < 150) {document.getElementById("lottery_btn03").style.opacity = 0.5; document.getElementById("lottery_btn03").style.pointerEvents = "none"}

    if (coinbag.total > 29) {document.getElementById("lottery_btn01").style.opacity = 1; document.getElementById("lottery_btn01").style.pointerEvents = "auto"}
    if (coinbag.total > 69) {document.getElementById("lottery_btn02").style.opacity = 1; document.getElementById("lottery_btn02").style.pointerEvents = "auto"}
    if (coinbag.total > 149) {document.getElementById("lottery_btn03").style.opacity = 1; document.getElementById("lottery_btn03").style.pointerEvents = "auto"}
  },[coinbag.total])


  const buyIngredients = (amount) => {
    
      if (amount === 4) {setPlayerPurchase("buy_four"); dispatch(reduce_coins_amount(prices.price_blue))}
      if (amount === 14) {setPlayerPurchase("buy_fourteen"); dispatch(reduce_coins_amount(prices.price_purple))}
      if (amount === 50) {setPlayerPurchase("buy_fifty"); dispatch(reduce_coins_amount(prices.price_gold))}

    //  playSound("coinSpend")

  }


  // NEXT - Add POPUP ANIMATION TO SCROLL
  

 
 
  return (
    <div className='buySellView'>

      {playerPurchase !== "none" && <BoughtIngredients boughtNr={playerPurchase} exitbtn={setPlayerPurchase}/>}

      {powersList[4].freeze === "active" && powersList[3].protection !== "active" && powersList[12].massProtection !== "active" && <Icer />}
      {powersList[18].mass_freeze === "active" && powersList[3].protection !== "active" && powersList[12].massProtection !== "active" && <MassFreeze />}
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