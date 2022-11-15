import React, { useState } from 'react'
import hidden_ingred from "../../image_assets/general/hidden_ingred.webp"
import { useSelector } from "react-redux"
import { motion } from "framer-motion";
import "./marketplace.css"
import "./responsive/responsive.css"
import "./responsive/tablet.css"



function MarketplaceSell({setSelectedID}) {

  const ingredientsList = useSelector((state) => state.ingredients.value)


  return (
    
    <div className="marketplace_middle_ingred_container">


      {ingredientsList.map((ingredient, i) => {
          if (ingredient.amount > 0) {
            return (
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 200, damping: 40 }} key={i} className="marketplace_ingredBox">
                 <img onClick={() => {setSelectedID(i)}} src={ingredient.image_normal} alt="" className="marketplace_ingred" /> 
                <p className="marketplace_ingred_amount">{ingredient.amount}</p>
              </motion.div>
            )
          } else if (ingredient.discovered === false) {
            return (
              <div key={i} className="marketplace_ingredBox">
                <img src={hidden_ingred} alt="" className="marketplace_ingred marketplace_no_ingred" /> 
              </div>
            )
          } else {
          return (
            <div key={i} className="marketplace_ingredBox">
              <img src={hidden_ingred} alt="" className="marketplace_ingred marketplace_no_ingred" /> 
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