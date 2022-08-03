import React from 'react'
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
import { useDispatch } from "react-redux"
import {buy_four_ingredients, buy_fourteen_ingredients, buy_fifty_ingredients } from "../../redux/IngredientReducer.js"



function BuySell() {

  var props = {
    focus: "buysell",
    
  }

  const dispatch = useDispatch()
 
 
  return (
    <div className='buySellView'>
        <Navbar focus={props}/>
        
        <div className="buySellView_middle">
          <div className="buySellView_middle_container">
            <div className="buySellView_middle_lottery_container">
              
              <div className="buySellView_lottery_box">
                <img src={store_buy_one} alt="" className="lottery_items" />
                <img onClick={() => {dispatch(buy_four_ingredients())}} src={buy_one_btn} alt="" className="lottery_btns" />
                <p className="buySellView_lottery_desc">BUY 4 INGREDIENTS</p>
              </div>
              <div className="buySellView_lottery_box">
                <img src={store_buy_four} alt="" className="lottery_items" />
                <img onClick={() => {dispatch(buy_fourteen_ingredients())}} src={store_buy_four_btn} alt="" className="lottery_btns" />
                <p className="buySellView_lottery_desc">BUY 14 INGREDIENTS</p>
              </div>
              <div className="buySellView_lottery_box">
                <img src={store_buy_ten} alt="" className="lottery_items" />
                <img onClick={() => {dispatch(buy_fifty_ingredients())}} src={store_buy_ten_btn} alt="" className="lottery_btns" />
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