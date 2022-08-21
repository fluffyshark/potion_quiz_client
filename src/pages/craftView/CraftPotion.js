import React from 'react'
import "./craftPotion.css"
import card_back from "../../image_assets/general/card_back.png"
import { useSelector, useDispatch } from "react-redux"
import {remove_for_crafting } from "../../redux/CraftReducer"
import {add_potion } from "../../redux/PotionReducer"


function CraftPotion() {

    const dispatch = useDispatch()
    const craftList = useSelector((state) => state.crafting.value)
    const recipeList = useSelector((state) => state.recipe.value) 
    const potionList = useSelector((state) => state.potions.value) 

    const matchRecipe = () => {
        
        let matching = []
        
        // CHANGE recipeList.length to lower or higher depending on playerLevel to only match with the right level 
        for (let i = 0; i < recipeList.length; i++) {
        
            if (recipeList[i].ing1_id === craftList[0].selected_id || recipeList[i].ing1_id === craftList[1].selected_id || recipeList[i].ing1_id === craftList[2].selected_id || recipeList[i].ing1_id === craftList[3].selected_id)
            {
                matching.push(i)
                console.log("POTION", i, recipeList[i].ing1_id)
            }
            if (recipeList[i].ing2_id === craftList[0].selected_id || recipeList[i].ing2_id === craftList[1].selected_id || recipeList[i].ing2_id === craftList[2].selected_id || recipeList[i].ing2_id === craftList[3].selected_id)
            {
                matching.push(i)
                console.log("POTION", i, recipeList[i].ing2_id)
            }
            if (recipeList[i].ing3_id === craftList[0].selected_id || recipeList[i].ing3_id === craftList[1].selected_id || recipeList[i].ing3_id === craftList[2].selected_id || recipeList[i].ing3_id === craftList[3].selected_id)
            {
                matching.push(i)
                console.log("POTION", i, recipeList[i].ing3_id)
            }
            if (recipeList[i].ing4_id === craftList[0].selected_id || recipeList[i].ing4_id === craftList[1].selected_id || recipeList[i].ing4_id === craftList[2].selected_id || recipeList[i].ing4_id === craftList[3].selected_id)
            {
                matching.push(i)
                console.log("POTION", i, recipeList[i].ing4_id)
            }
            
        }

        if (matching[0] === matching[1] && matching[1] === matching[2] && matching[2] === matching[3])
            {
                document.getElementById("craftedPotionCard").src = potionList[matching[0]].image_bronze
                dispatch(add_potion({id: matching[0]}))
                console.log("SUCCESS:", matching[0])
            }

        console.log(matching)

        

            setTimeout(function() {
                document.getElementById("craftedPotionCard").src = card_back
                document.getElementById("craftPotion").style.display = "none"
                dispatch(remove_for_crafting())
              }, 5000);
              

        
    }

  return (
 
    <div className='craftPotion' id="craftPotion">
        <div className="craftPotion_contentcontainer">
            <div className="craftPotion_textholder">
                <p id="revealCard_text">YOU CRAFTED</p>
            </div>
            <div className="craftPotion_imageholder">
                <img id="craftedPotionCard" onClick={() => {matchRecipe()}} src={card_back} alt="" className="craftPotion_image" />
            </div>
            <div className="craftPotion_ingredientsholder">
                <div className="craftPotion_ingredientwrapper">
                    <img src={craftList[0].image} alt="" className="craftPotion_ingred" />
                    <p className='craftPotion_amount_text'>{craftList[0].amount}</p>
                </div>
                <div className="craftPotion_ingredientwrapper">
                    <img src={craftList[1].image} alt="" className="craftPotion_ingred" />
                    <p className='craftPotion_amount_text'>{craftList[1].amount}</p>
                </div>
                <div className="craftPotion_ingredientwrapper">
                    <img src={craftList[2].image} alt="" className="craftPotion_ingred" />
                    <p className='craftPotion_amount_text'>{craftList[2].amount}</p>
                </div>
                <div className="craftPotion_ingredientwrapper">
                    <img src={craftList[3].image} alt="" className="craftPotion_ingred" />
                    <p className='craftPotion_amount_text'>{craftList[3].amount}</p>
                </div>

            </div>
        </div>
    </div>
    
  )
}

export default CraftPotion


