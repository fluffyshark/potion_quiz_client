import React, { useEffect } from 'react'
import "./buySell.css"
import Navbar from "../../components/navbar/Navbar"
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
import coindrop from "../../sound_assets/coindrop.mp3"



function BuySell() {

  var props = {
    focus: "buysell",
    
  }

  const coinbag = useSelector((state) => state.coins.value)
  const dispatch = useDispatch()

  function playSound(sound) {
    if (sound === "coin") {new Audio(coindrop).play()}
  }



  useEffect(() => {
    if (coinbag < 50) {document.getElementById("lottery_btn01").style.opacity = 0.5}
    if (coinbag < 100) {document.getElementById("lottery_btn02").style.opacity = 0.5}
    if (coinbag < 300) {document.getElementById("lottery_btn03").style.opacity = 0.5}

    if (coinbag > 49) {document.getElementById("lottery_btn01").style.opacity = 1}
    if (coinbag > 99) {document.getElementById("lottery_btn02").style.opacity = 1}
    if (coinbag > 299) {document.getElementById("lottery_btn03").style.opacity = 1}
  })

  const buyIngredients = (amount) => {
    if (amount === 4) {dispatch(buy_four_ingredients()); dispatch(reduce_coins_amount(50))}
    if (amount === 14) {dispatch(buy_fourteen_ingredients()); dispatch(reduce_coins_amount(100))}
    if (amount === 50) {dispatch(buy_fifty_ingredients()); dispatch(reduce_coins_amount(300))}

    playSound("coin")

  }


 
 
  return (
    <div className='buySellView'>
        <Navbar focus={props}/>
        
        <div className="buySellView_middle">
          <div className="buySellView_middle_container">
            <div className="buySellView_middle_lottery_container">
              
              <div className="buySellView_lottery_box">
                <img src={store_buy_one} alt="" className="lottery_items" />
                <img id="lottery_btn01" onClick={() => buyIngredients(4)} src={buy_one_btn} alt="" className="lottery_btns" />
                <p className="buySellView_lottery_desc">BUY 4 INGREDIENTS</p>
              </div>
              <div className="buySellView_lottery_box">
                <img src={store_buy_four} alt="" className="lottery_items" />
                <img id="lottery_btn02" onClick={() => buyIngredients(14)} src={store_buy_four_btn} alt="" className="lottery_btns" />
                <p className="buySellView_lottery_desc">BUY 14 INGREDIENTS</p>
              </div>
              <div className="buySellView_lottery_box">
                <img src={store_buy_ten} alt="" className="lottery_items" />
                <img id="lottery_btn03" onClick={() => buyIngredients(50)} src={store_buy_ten_btn} alt="" className="lottery_btns" />
                <p className="buySellView_lottery_desc">BUY 50 INGREDIENTS</p>
              </div>

            </div>
            <p className="buySellView_or">OR</p>
            <Link className='link' to="/marketplace"><img src={market_btn} alt="" className="buySellView_visit_market" /></Link>
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