import React, { useEffect, useState } from 'react'
import "./marketplace.css"
import Navbar from "../../components/navbar/Navbar"
import MarketplaceSell from "./MarketplaceSell.js"
import MarketplaceBuy from './MarketplaceBuy'
import no_ingred from "../../image_assets/general/no_ingred.png"
import add_btn from "../../image_assets/general/add_btn.png"
import reduce_btn from "../../image_assets/general/reduce_btn.png"
import done_btn from "../../image_assets/general/done_btn.png"



function Marketplace() {

  const [marketIsBuy, setmarketIsBuy] = useState(true)


  const buyOrSellFooter = (buyOrSell) => {
    var footerContent = <></>

    const sell = <>
                  <p className='marketplace_offer_text1'>OFFER TO SELL</p>
                  <img src={no_ingred} alt="" className="marketplace_offer_ingred" />
                  <p className='marketplace_offer_text2'>FOR</p>
                  <img src={add_btn} alt="" className="marketplace_offer_btns" />
                  <p className='marketplace_offer_text3'>100</p>
                  <img src={reduce_btn} alt="" className="marketplace_offer_btns" />
                  <img src={done_btn} alt="" className="marketplace_offer_done_btn" />
                </>

    const buy = <>
                  <p className='marketplace_footer_buy_process'>NO PURCHASE MADE YET...</p>
                </>


    if (buyOrSell === sell) {footerContent = sell} else {footerContent = buy}

    return footerContent

  }


  useEffect(() => {
    if (marketIsBuy) {
      document.getElementById("marketplace_menu_sell").style.backgroundColor = "#1f80e0"
      document.getElementById("marketplace_menu_buy").style.backgroundColor = "#1c62b3"
    } else {
      document.getElementById("marketplace_menu_sell").style.backgroundColor = "#1c62b3"
      document.getElementById("marketplace_menu_buy").style.backgroundColor = "#1f80e0"
    }
  });
  



  return (
    <div className='marketplace'>
        <Navbar />
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
              
            {marketIsBuy ? ( <MarketplaceBuy /> ) : ( <MarketplaceSell /> )}
           
          </div>
        </div>
        <div className="marketplace_footer">
          <div className="marketplace_footer_container">  

            {buyOrSellFooter()}

          </div>
        </div>
    </div>
  )
}



export default Marketplace