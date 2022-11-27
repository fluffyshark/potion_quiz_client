import { createSlice } from "@reduxjs/toolkit";
import { saveToLocalStorage } from "../components/saveToLocalStorage/SaveToLocalStorage.js";
import { PotionRecipeData } from "./PotionRecipeData"


function createRecipe() {
    /// Creating, filling, shuffling an array
    var ingred = [...Array(180).keys()].sort(() => Math.random() - 0.5);
    
    /// Assigning numbers, then removing those numbers from the array
     for (let i = 0; i < PotionRecipeData.length; i++) {
        PotionRecipeData[i].ing1_id = ingred[0]; PotionRecipeData[i].ing2_id = ingred[1]
        PotionRecipeData[i].ing3_id = ingred[2]; PotionRecipeData[i].ing4_id = ingred[3]
        ingred.shift(); ingred.shift()
        ingred.shift(); ingred.shift()
      }
      // Assigning amount numbers 
      for (let i = 0; i < 4; i++) {
        PotionRecipeData[i].ing1_amount = Math.floor(Math.random() * 3) + 1; PotionRecipeData[i].ing2_amount = Math.floor(Math.random() * 3) + 1;
        PotionRecipeData[i].ing3_amount = Math.floor(Math.random() * 3) + 1; PotionRecipeData[i].ing4_amount = Math.floor(Math.random() * 3) + 1;
    }
      for (let i = 4; i < 8; i++) {
        PotionRecipeData[i].ing1_amount = Math.floor(Math.random() * 3) + 2; PotionRecipeData[i].ing2_amount = Math.floor(Math.random() * 3) + 2;
        PotionRecipeData[i].ing3_amount = Math.floor(Math.random() * 3) + 2; PotionRecipeData[i].ing4_amount = Math.floor(Math.random() * 3) + 2;
    }
      for (let i = 8; i < 12; i++) {
        PotionRecipeData[i].ing1_amount = Math.floor(Math.random() * 4) + 3; PotionRecipeData[i].ing2_amount = Math.floor(Math.random() * 4) + 3;
        PotionRecipeData[i].ing3_amount = Math.floor(Math.random() * 4) + 3; PotionRecipeData[i].ing4_amount = Math.floor(Math.random() * 4) + 3;
    }
      for (let i = 12; i < 16; i++) {
        PotionRecipeData[i].ing1_amount = Math.floor(Math.random() * 5) + 4; PotionRecipeData[i].ing2_amount = Math.floor(Math.random() * 4) + 3;
        PotionRecipeData[i].ing3_amount = Math.floor(Math.random() * 4) + 3; PotionRecipeData[i].ing4_amount = Math.floor(Math.random() * 4) + 3;
    }
      for (let i = 16; i < 20; i++) {
        PotionRecipeData[i].ing1_amount = Math.floor(Math.random() * 6) + 5; PotionRecipeData[i].ing2_amount = Math.floor(Math.random() * 4) + 3;
        PotionRecipeData[i].ing3_amount = Math.floor(Math.random() * 4) + 3; PotionRecipeData[i].ing4_amount = Math.floor(Math.random() * 4) + 3;
    }

    
}
createRecipe()



export const recipeSlice = createSlice({
    name: "recipe",
    initialState: {value: PotionRecipeData},
    reducers: {
        golden_ingredient: (state, action) => {
            state.value.map((ingredient) => {
                if (ingredient.id === action.payload.id) {
                  if (action.payload.ingredientNr === "ing1") {ingredient.ing1_golden = true}
                  if (action.payload.ingredientNr === "ing2") {ingredient.ing2_golden = true}
                  if (action.payload.ingredientNr === "ing3") {ingredient.ing3_golden = true}
                  if (action.payload.ingredientNr === "ing4") {ingredient.ing4_golden = true}       
                }
            })
            saveToLocalStorage("recipeList", state.value)
        },

        retrive_potionRecipe: (state, action) => {
          state.value.map((recipe, i) => {
              recipe.ing1_id = action.payload[i].ing1_id; recipe.ing2_id = action.payload[i].ing2_id; recipe.ing3_id = action.payload[i].ing3_id; recipe.ing4_id = action.payload[i].ing4_id
              
              recipe.ing1_amount = action.payload[i].ing1_amount; recipe.ing2_amount = action.payload[i].ing2_amount; recipe.ing3_amount = action.payload[i].ing3_amount; recipe.ing4_amount = action.payload[i].ing4_amount
              
              recipe.ing1_golden = action.payload[i].ing1_golden; recipe.ing2_golden = action.payload[i].ing2_golden; recipe.ing3_golden = action.payload[i].ing3_golden; recipe.ing4_golden = action.payload[i].ing4_golden      
          })
      },
      
        
       

        
    }
})

export const {golden_ingredient, retrive_potionRecipe} = recipeSlice.actions
export default recipeSlice.reducer
