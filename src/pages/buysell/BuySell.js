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



function BuySell() {
  return (
    <div className='buySellView'>
        <Navbar />
        
        <div className="buySellView_middle">
          <div className="buySellView_middle_container">
            <div className="buySellView_middle_lottery_container">
                <div className="buySellView_lottery_top">
                    <img src={store_buy_one} alt="" className="lottery_items" />
                    <img src={store_buy_four} alt="" className="lottery_items" />
                    <img src={store_buy_ten} alt="" className="lottery_items" />
                </div>
                <div className="buySellView_lottery_middle">
                    <img src={buy_one_btn} alt="" className="lottery_btns" />
                    <img src={store_buy_four_btn} alt="" className="lottery_btns" />
                    <img src={store_buy_ten_btn} alt="" className="lottery_btns" />
                </div>
                <div className="buySellView_lottery_bottom">
                    <p className="buySellView_lottery_desc">BUY ONE INGREDIENT</p>
                    <p className="buySellView_lottery_desc">BUY FOUR INGREDIENT</p>
                    <p className="buySellView_lottery_desc">BUY TEN INGREDIENT</p>
                </div>
            </div>
            <p className="buySellView_or">OR</p>
            <img src={market_btn} alt="" className="buySellView_visit_market" />
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