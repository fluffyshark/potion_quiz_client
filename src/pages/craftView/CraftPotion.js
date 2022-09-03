import React, { useEffect } from 'react'
import "./craftPotion.css"
import card_back from "../../image_assets/general/card_back.png"
import { useSelector, useDispatch } from "react-redux"
import {remove_for_crafting } from "../../redux/CraftReducer"
import {add_potion, add_discovery_points, increase_potion_level } from "../../redux/PotionReducer"
import {golden_ingredient} from "../../redux/PotionRecipeReducer"
import {add_playerPoints} from "../../redux/PlayerSocketReducer"


function CraftPotion(props) {

    let socket = props.socket  


    const dispatch = useDispatch()
    const craftList = useSelector((state) => state.crafting.value)
    const recipeList = useSelector((state) => state.recipe.value) 
    const potionList = useSelector((state) => state.potions.value) 
    const playerStats = useSelector((state) => state.playerStats.value) 
    
    const matchRecipe = () => {
        
        let matching = []
        
        // CHANGE recipeList.length to lower or higher depending on playerLevel to only match with the right level 
        for (let i = 0; i < recipeList.length; i++) {
        
            if (recipeList[i].ing1_id === craftList[0].selected_id || recipeList[i].ing1_id === craftList[1].selected_id || recipeList[i].ing1_id === craftList[2].selected_id || recipeList[i].ing1_id === craftList[3].selected_id)
            {
                matching.push(i)
             
            }
            if (recipeList[i].ing2_id === craftList[0].selected_id || recipeList[i].ing2_id === craftList[1].selected_id || recipeList[i].ing2_id === craftList[2].selected_id || recipeList[i].ing2_id === craftList[3].selected_id)
            {
                matching.push(i)
             
            }
            if (recipeList[i].ing3_id === craftList[0].selected_id || recipeList[i].ing3_id === craftList[1].selected_id || recipeList[i].ing3_id === craftList[2].selected_id || recipeList[i].ing3_id === craftList[3].selected_id)
            {
                matching.push(i)
              
            }
            if (recipeList[i].ing4_id === craftList[0].selected_id || recipeList[i].ing4_id === craftList[1].selected_id || recipeList[i].ing4_id === craftList[2].selected_id || recipeList[i].ing4_id === craftList[3].selected_id)
            {
                matching.push(i)
               
            }
            
        }

        // Check for level 1
        // Checking if all "matching" have the same value, if so then all ingredients exist in the same potion
        if (matching[0] === matching[1] && matching[1] === matching[2] && matching[2] === matching[3])
            {
                if (potionList[matching[0]].earnedPoints === 0) {dispatch(add_discovery_points({id: matching[0], earnedPoints: 20})); dispatch(add_playerPoints(20))}
                    
     
                // A bronze potion will only be made if you are at level 1, otherwise failing to reach silver or gold quality will end in failure
                if (potionList[matching[0]].level === 1) {
                    dispatch(add_potion({id: matching[0]}))
                    document.getElementById("craftedPotionCard").src = potionList[matching[0]].image_bronze
                }
                
                
               
                // Check for level 2 amd level 3

                // Arrays with ingredients IDs listed for overview
                let recipeArray = [recipeList[matching[0]].ing1_id,recipeList[matching[0]].ing2_id,recipeList[matching[0]].ing3_id,recipeList[matching[0]].ing4_id]
                let craftArray = [craftList[0].selected_id,craftList[1].selected_id,craftList[2].selected_id,craftList[3].selected_id]
                let resultArray = [0,0,0,0]
                let sortArr = [200,200,200,200]
             
                // Finds the index of each craftArray ingredient ID, to be able to match its placement with the ingredient ID at recipleList. 
                sortArr[0] = craftArray.indexOf(recipeList[matching[0]].ing1_id)
                sortArr[1] = craftArray.indexOf(recipeList[matching[0]].ing2_id)
                sortArr[2] = craftArray.indexOf(recipeList[matching[0]].ing3_id)
                sortArr[3] = craftArray.indexOf(recipeList[matching[0]].ing4_id)

                // To collect the IDs where the amount were correct
                let correctAmountID = [200,200,200,200]
               
                // Check if the player selected the same amount of the ingredient as the recipe declare, if so add "1" to resultArray. 
                // Also collects the correct amount IDs in the "correctAmountID"
                if (recipeList[matching[0]].ing1_amount === craftList[sortArr[0]].amount) {resultArray[0] = 1; correctAmountID[0] = recipeList[matching[0]].ing1_id}
                if (recipeList[matching[0]].ing2_amount === craftList[sortArr[1]].amount) {resultArray[1] = 1; correctAmountID[1] = recipeList[matching[0]].ing2_id}
                if (recipeList[matching[0]].ing3_amount === craftList[sortArr[2]].amount) {resultArray[2] = 1; correctAmountID[2] = recipeList[matching[0]].ing3_id}
                if (recipeList[matching[0]].ing4_amount === craftList[sortArr[3]].amount) {resultArray[3] = 1; correctAmountID[3] = recipeList[matching[0]].ing4_id}

                // Return the sum of resultArray as "result"
                let result = 0; for (let i = 0; i < resultArray.length; i++) {result += resultArray[i];}

                // See which ingredient that should be a gold frame and display ingredient amount
                if (correctAmountID[0] != 200) {dispatch(golden_ingredient({id: matching[0], ingredientNr: "ing1"}))}
                if (correctAmountID[1] != 200) {dispatch(golden_ingredient({id: matching[0], ingredientNr: "ing2"}))}
                if (correctAmountID[2] != 200) {dispatch(golden_ingredient({id: matching[0], ingredientNr: "ing3"}))}
                if (correctAmountID[3] != 200) {dispatch(golden_ingredient({id: matching[0], ingredientNr: "ing4"}))}

                // If resultArray has a value over 2 then, then player got at least two ingredients amount correct -> it's at least a silver card 
                if (result >= 2) {

                    

                    // If player has not been rewarded with points for silver card yet, or updated 
                    if (potionList[matching[0]].earnedPoints < 50) {
                        dispatch(add_discovery_points({id: matching[0], earnedPoints: 30}))
                        dispatch(add_playerPoints(30))
                        dispatch(increase_potion_level({id: matching[0], potion_Level: "silver"}))
                    }

                    // A silver potion will only be made if you are at level 2 or level 1, otherwise at level 3 failing to reach gold quality will end in failure
                    if (potionList[matching[0]].level === 2) {dispatch(add_potion({id: matching[0]}))}
                    
                    // If resultArray has a value of, then player got all four ingredients amount correct -> it's golden card 
                    if (result === 4) {
                        
                        // If player has not been rewarded with points for silver card yet
                        if (potionList[matching[0]].earnedPoints < 100) {dispatch(add_discovery_points({id: matching[0], earnedPoints: 100})); dispatch(add_playerPoints(100))}

                        document.getElementById("craftedPotionCard").src = potionList[matching[0]].image_gold
                        dispatch(increase_potion_level({id: matching[0], potion_Level: "gold"}))
                    } else {
                        // if not a gold card then at least a silver card
                        document.getElementById("craftedPotionCard").src = potionList[matching[0]].image_silver
                    }

                } 

               
                    
            }


            // COVER NAVBAR DURING CRAFT WAIT, OTHERWISE INGREDIENTS WILL NOT DISSAPEAR
            // NO PLAYER POINTS ARE DISPLAYED
            

            setTimeout(function() {
                document.getElementById("craftedPotionCard").src = card_back
                document.getElementById("craftPotion").style.display = "none"
                dispatch(remove_for_crafting())
                console.log("PLAYERDATA after 5 sec: ", playerStats)
              }, 5000);
              

        
    } // End of matchRecipe()




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


