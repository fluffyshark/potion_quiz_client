import React from 'react'
// Dependencies
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";
// CSS
import "./potionAuction.css"
import "./responsive/responsive.css"
import "./responsive/tablet.css"
// Components
import Navbar from "../../components/navbar/Navbar"
// Images
import card_back from "../../image_assets/general/card_back1.webp"
import buybtngreen from "../../image_assets/general/buybtngreen.png"
import money_icon from "../../image_assets/general/money_icon.webp"
// Redux
import { useDispatch, useSelector } from 'react-redux'
import { reduce_coins_amount } from '../../redux/CoinsReducer'
import { add_potion } from '../../redux/PotionReducer'


// NEXT - ADJUST RESPONSIVE CSS


function PotionAuction(props) {
  
    let socket = props.socket

    const dispatch = useDispatch()
    const auctionList = useSelector((state) => state.auction.value)
    const playerStats = useSelector((state) => state.playerStats.value)
    const potionsList = useSelector((state) => state.potions.value)
    const coinbag = useSelector((state) => state.coins.value)


    // When hover over an auction card, displays indication that player can buy or that player has not enough coins
    function toggleBuyBtn(toggle, nr) {
      if (toggle === "on") {
        if (auctionList[nr].counter <= coinbag.total) {
          document.getElementById(`actionBtn${nr}`).style.display = "initial"; document.getElementById(`auction_card${nr}`).style.background = "#7fb7279a"
        } else {
           document.getElementById(`auction_card${nr}`).style.background = "#2a2627d9"
           document.getElementById(`actionBuyText${nr}`).innerHTML = "NOT ENOUGH COINS"
        }
      }
        if (toggle === "off") {
          document.getElementById(`actionBtn${nr}`).style.display = "none"; document.getElementById(`auction_card${nr}`).style.background = "rgba(0.498,0.7176,0.1529,0.0)"
          document.getElementById(`actionBuyText${nr}`).innerHTML = "BUY FOR"
        }
    
      } // End of toggleBuyBtn()



    function buyAuctionCard(cardIndex) {
      // Prevents player from buying potion without sufficient coins
      if (coinbag.total > auctionList[cardIndex].counter) {
        // Telling Redux to reduce player coins by the current auction counter amount
        dispatch(reduce_coins_amount(auctionList[cardIndex].counter))
        // Telling Redux to increase the amount of the purchased potion
        dispatch(add_potion({id: auctionList[cardIndex].potionID}))
        // Send to server and other players that the potion is bought and time to display a new one
        socket.emit("auction_card_expired_or_bought", {auctionSlot: cardIndex, gameCode: playerStats.gameCode})
      } 
      
    } // End of buyAuctionCard()



    return (
    <div className='auction'>
        <Navbar focus={props}/>
        <div className="auction_middle">
          <div className="auction_middle_container">
          
            <div className="auction_menu_container">
                  <div className="auction_menu">
                      <div className="auction_menu_filler_left"></div>
                      <div className="auction_menu_potions_ingreds">
                          <Link className='link' to="/auction"><div className="auction_menu_potions_btn market_menu_btns"><p>POTIONS</p></div></Link>
                          <Link className='link' to="/marketplace"><div className="auction_menu_indredients_btn market_menu_btns"><p>INGREDIENTS</p></div></Link>
                      </div>
                      <div className="auction_menu_filler_right"></div>
                  </div>
            </div>

            <div className="auction_middle_card_container">
                    {
                      auctionList.map((card, i) => {

                        if (potionsList[card.potionID].discovered === true) {
                          return (
                            <motion.div whileHover={{ scale: 0.98 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 200, damping: 40 }} key={i} className="auction_middle_cards" onMouseOver={() => {toggleBuyBtn("on", i)}} onMouseOut={() => {toggleBuyBtn("off", i)}}>
                              <img src={card.image} alt="" />
                              <div id={`auction_card${i}`} className="auction_middle_cards_dynamics">
                                <div onClick={() => {buyAuctionCard(i)}} className="auction_middle_cards_dynamics_btn"><img id={`actionBtn${i}`} src={buybtngreen} alt="" /></div>
                                <div className="auction_middle_cards_dynamics_texts">
                                  <div id={`actionBuyText${i}`} className="auction_middle_cards_dynamics_texts_1"><p>BUY FOR</p></div>
                                  <div className="auction_middle_cards_dynamics_texts_2"><p>{card.counter}</p><img src={money_icon} alt="" /></div>
                                </div>
                              </div>
    
                            </motion.div>
                          )
                        }

                        else {
                          
                          return (
                            <motion.div whileHover={{ scale: 0.98 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 200, damping: 40 }} key={i} className="auction_middle_cards">
                              <img src={card_back} alt="" />
                            </motion.div>
                          )

                        }
                        
                      })

                    }
            </div>


          </div>
        </div>

        <div className="auction_footer">
          
          <div className="auction_footer_container"></div>
        
        </div>
    </div>
  )
}

export default PotionAuction