import React, { useEffect, useState } from 'react'
import "./marketplace.css"
import "./responsive/responsive.css"
import "./responsive/tablet.css"
import herbs from "../../image_assets/HerbImageExport"
import { useDispatch, useSelector } from "react-redux"
import { increase_ingredients } from "../../redux/IngredientReducer.js"
import { reduce_coins_amount } from "../../redux/CoinsReducer.js"
import {Offerings} from "./MarketPlaceData"


function MarketplaceBuy(props) {

  let socket = props.socket

  const [sellOffering, setSellOffering] = useState([{ingredient: 0, sellID: 0, price: 0}])

  const dispatch = useDispatch()
  const marketData = useSelector((state) => state.theMarket.value)
  const playerCoins = useSelector((state) => state.coins.value)


  function placeBuyOrder(sellID) {
    // Filter marketData to get only the object with the sellID
    let offering = marketData.filter(offer => offer.sellID === sellID);
    // Send object to server via socket.io
    socket.emit("sending_player_buyorder", offering)
    // Reduce coin amount for player
    dispatch(reduce_coins_amount(offering[0].price))
    // Add the ingredient to player 
    dispatch(increase_ingredients({id: offering[0].ingredient}))
  }


  useEffect(() => {
    setSellOffering(Offerings(marketData))
  }, [marketData])


  
  return (
    
    <div className="marketplace_middle_ingred_container">
          
        {
          sellOffering.map((item, i) => {
            if (playerCoins.total >= item.price) {
              return (
                <div className='marketplace_offering' key={i} id={`item${i}`} onClick={() => placeBuyOrder(item.sellID)}>
                  <img src={herbs[item.ingredient]} key={i} alt="" className="marketplace_ingred" />
                  <div className="marketplace_offering_price_btn">{item.price}</div>
                </div>
               )
            } else {
              return (
                <div className='marketplace_offering' key={i} id={`item${i}`} >
                  <img src={herbs[item.ingredient]} key={i} alt="" className="marketplace_ingred marketplace_no_ingred" />
                  <div className="marketplace_offering_price_btn">{item.price}</div>
                </div>
              )
            }
              
          })
        }
      
      
        <div className="marketplace_extra_space_bottom"></div>  
      </div>

  );

}

export default MarketplaceBuy