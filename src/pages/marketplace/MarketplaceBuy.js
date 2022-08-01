import React, { useEffect, useState } from 'react'
import "./marketplace.css"
import gameStats from "../../gameStats/GameStats.js"
import herbs from "../../image_assets/HerbImageExport"



function MarketplaceBuy() {

  
  const [ingredOffering, setIngredOffering] = useState(gameStats.ingredients_for_sale)


  function buyIngred(offeringID) {
    
    // Visually removing clicked ingredient
    document.getElementById(`item${offeringID}`).style.display = "none"

    // Finds the index of the clicked ingredient
    const index = gameStats.ingredients_for_sale.findIndex(x => x.id === offeringID)

    // Remove remove ingredient from array at index
    gameStats.ingredients_for_sale.splice(index, 1);

    // Update new list and new indexes
    setIngredOffering(gameStats.ingredients_for_sale)

  }

  

  return (
    
    <div className="marketplace_middle_ingred_container">
          
        {
          ingredOffering.map((item, i) => {
            console.log(item)
             return (
              <div className='marketplace_offering' key={i} id={`item${item.id}`} onClick={() => buyIngred(item.id)}>
                <img src={herbs[item.imageNr]} key={i} alt="" className="marketplace_ingred" />
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