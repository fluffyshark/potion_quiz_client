import React, { useState } from 'react'
import gameStats from "../../gameStats/GameStats.js"
import hidden_ingred from "../../image_assets/general/hidden_ingred.png"
import herbs from "../../image_assets/HerbImageExport"


function MarketplaceBuy() {

  const [ingredients, setIngresients] = useState(gameStats.ingredients_owned)

  console.log(herbs[0])

  

  return (
    
    <div className="marketplace_middle_ingred_container">
            
        {
          ingredients.map((item, i) => {
            if (item === 0) return (<img src={hidden_ingred} key={i} alt="" className="marketplace_ingred" />)
            else return (<img src={herbs[i]} key={i} alt="" className="marketplace_ingred" />)
           
          })
        }
             
        <div className="marketplace_extra_space_bottom"></div>
      </div>

  );

}

export default MarketplaceBuy