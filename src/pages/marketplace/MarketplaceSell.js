import React from 'react'
import hidden_ingred from "../../image_assets/general/hidden_ingred.png"
import { useSelector } from "react-redux"


function MarketplaceSell() {

  const ingredientsList = useSelector((state) => state.ingredients.value)



  return (
    
    <div className="marketplace_middle_ingred_container">


      {ingredientsList.map((ingredient, i) => {
          if (ingredient.amount > 0) {
            return (
              <div key={i} className="craftView_ingredBox">
                <img src={ingredient.image_normal} alt="" className="marketplace_ingred" /> 
                <p className="craftView_ingred_amount">{ingredient.amount}</p>
              </div>
            )
          } else if (ingredient.discovered === false) {
            return (
              <div className="craftView_ingredBox">
                <img src={hidden_ingred} alt="" className="marketplace_ingred marketplace_no_ingred" /> 
              </div>
            )
          } else {
          return (
            <div className="craftView_ingredBox">
              <img src={hidden_ingred} alt="" className="marketplace_ingred" /> 
            </div>
          )
        }
        })
      }
       
             
        <div className="marketplace_extra_space_bottom"></div>
      </div>

  )
}

export default MarketplaceSell