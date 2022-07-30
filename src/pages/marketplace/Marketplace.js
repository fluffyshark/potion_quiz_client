import React from 'react'
import "./marketplace.css"
import MarketplaceSell from "./MarketplaceSell.js"
import Navbar from "../../components/navbar/Navbar"
import no_ingred from "../../image_assets/general/no_ingred.png"
import add_btn from "../../image_assets/general/add_btn.png"
import reduce_btn from "../../image_assets/general/reduce_btn.png"
import done_btn from "../../image_assets/general/done_btn.png"
import MarketplaceBuy from './MarketplaceBuy'

function Marketplace() {
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
                    <div className="marketplace_menu_buy menu_buysell_text">BUY</div>
                        <div className="marketplace_menu_sell menu_buysell_text">SELL</div>
                    </div>
                </div>
            </div>
            
            
            <MarketplaceBuy />


          </div>
        </div>
        <div className="marketplace_footer">
        <div className="marketplace_footer_container">
            <p className='marketplace_offer_text1'>OFFER TO SELL</p>
            <img src={no_ingred} alt="" className="marketplace_offer_ingred" />
            <p className='marketplace_offer_text2'>FOR</p>
            <img src={add_btn} alt="" className="marketplace_offer_btns" />
            <p className='marketplace_offer_text3'>100</p>
            <img src={reduce_btn} alt="" className="marketplace_offer_btns" />
            <img src={done_btn} alt="" className="marketplace_offer_done_btn" />

          </div>
        </div>
    </div>
  )
}

export default Marketplace