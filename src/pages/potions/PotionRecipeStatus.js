import React from 'react'
import "./potionRecipeStatus.css"
import { useSelector } from "react-redux"
import { motion } from "framer-motion"
import exitBtn from "../../image_assets/general/exit_btn.png"
import none_ingred from "../../image_assets/general/none_ingred.png"
import hidden_ingred from "../../image_assets/general/hidden_ingred.webp"

function PotionRecipeStatus({recipe}) {


    // Make available ingredients data from redux
    const ingredientsList = useSelector((state) => state.ingredients.value)
    // Make available market data from redux
    const marketData = useSelector((state) => state.theMarket.value)

    // Tells BuySell state playerPurchase to close this view
    function exitScrollView() {
        document.getElementById("potionRecipeStatus").style.display = "none"
    }


  return (
    <div id="potionRecipeStatus" className='potionRecipeStatus'>
            <motion.div initial={{opacity:0, scale:0}} animate={{opacity:1, scale:1}} className="potionRecipeStatus_scroll">
        
                <div className="potionRecipeStatus_scroll_top"><img onClick={() => {exitScrollView()}} src={exitBtn} alt="" /></div>

                <div className="potionRecipeStatus_scroll_text"><p className="potionRecipeStatus_scroll_text_title">INGREDIENT STATUS</p></div>

                <div className="potionRecipeStatus_scroll_main">
                    <div className="potionRecipeStatus_scroll_owned">
                        <p>YOU ALREADY OWN</p>
                        <div className="potionRecipeStatus_scroll_ingredients">
                            {ingredientsList[recipe.ingred1].amount > 0 && <img src={ingredientsList[recipe.ingred1].image_normal} alt="" />} {ingredientsList[recipe.ingred1].amount === 0 && <img src={none_ingred} alt="" />}
                            {ingredientsList[recipe.ingred2].amount > 0 && <img src={ingredientsList[recipe.ingred2].image_normal} alt="" />} {ingredientsList[recipe.ingred2].amount === 0 && <img src={none_ingred} alt="" />}
                            {ingredientsList[recipe.ingred3].amount > 0 && <img src={ingredientsList[recipe.ingred3].image_normal} alt="" />} {ingredientsList[recipe.ingred3].amount === 0 && <img src={none_ingred} alt="" />}
                            {ingredientsList[recipe.ingred4].amount > 0 && <img src={ingredientsList[recipe.ingred4].image_normal} alt="" />} {ingredientsList[recipe.ingred4].amount === 0 && <img src={none_ingred} alt="" />}
                        </div>
                        
                      
                    </div>
                    <div className="potionRecipeStatus_scroll_owned">
                        <p>AVAILABLE IN MARKET</p>
                        <div className="potionRecipeStatus_scroll_ingredients">
                            {marketData.map((item, i) => {
                                    
                                return (
                                    <>
                                        {item.ingredient === recipe.ingred1 && <img src={ingredientsList[recipe.ingred1].image_normal} alt="" />} 
                                        {item.ingredient === recipe.ingred2 && <img src={ingredientsList[recipe.ingred2].image_normal} alt="" />}
                                        {item.ingredient === recipe.ingred3 && <img src={ingredientsList[recipe.ingred3].image_normal} alt="" />}
                                        {item.ingredient === recipe.ingred4 && <img src={ingredientsList[recipe.ingred4].image_normal} alt="" />}
                                    </>
                                ) 
                               
                            })}
                            
                        </div>
                    </div>
                </div>

            </motion.div>
        </div>
  )
}

export default PotionRecipeStatus