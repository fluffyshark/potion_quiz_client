import React, { useEffect, useState } from 'react'
import "./marketplace.css"
import gameStats from "../../gameStats/GameStats.js"
import herbs from "../../image_assets/HerbImageExport"
import { useDispatch, useSelector } from "react-redux"
import { increase_ingredients } from "../../redux/IngredientReducer.js"
import {Offerings} from "./MarketPlaceData"


function MarketplaceBuy(props) {

  let socket = props.socket

  const [sellOffering, setSellOffering] = useState([{ingredient: 0, sellID: 0, price: 0}])

  const dispatch = useDispatch()
  const ingredientsList = useSelector((state) => state.ingredients.value)
  const marketData = useSelector((state) => state.theMarket.value)

  /*
  function buyIngred(offeringID) {
    
    // Visually removing clicked ingredient
    document.getElementById(`item${offeringID}`).style.display = "none"

    // Finds the index of the clicked ingredient
    const index = gameStats.ingredients_for_sale.findIndex(x => x.id === offeringID)

    // Remove remove ingredient from array at index
    gameStats.ingredients_for_sale.splice(index, 1);

    // Update new list and new indexes
    setIngredOffering(gameStats.ingredients_for_sale)
    
    dispatch(increase_ingredients({id:offeringID}))
  }
  */


  function placeBuyOrder(sellID) {
      
    let offering = marketData.filter(offer => offer.sellID === sellID);
    socket.emit("sending_player_buyorder", offering)
      console.log(offering)
  }


  useEffect(() => {
    setSellOffering(Offerings(marketData))
  }, [marketData])

 // console.log("BUY MAKETDATA", sellOffering)


  // NEXT - REMOVED OR REPLACED WHEN CLICKED

  
  return (
    
    <div className="marketplace_middle_ingred_container">
          
        {
          sellOffering.map((item, i) => {
             return (
              <div className='marketplace_offering' key={i} id={`item${i}`} onClick={() => placeBuyOrder(item.sellID)}>
                <img src={herbs[item.ingredient]} key={i} alt="" className="marketplace_ingred" />
                <div className="marketplace_offering_price_btn">{item.price}</div>
              </div>
                
             )
             
          })
        }
      
        <div className="marketplace_extra_space_bottom"></div>  
      </div>

  );

}

export default MarketplaceBuy