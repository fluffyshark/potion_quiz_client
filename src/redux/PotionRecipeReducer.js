import { createSlice } from "@reduxjs/toolkit";
import flasks from "../image_assets/FlaskImageExport.js"

var PotionRecipeData = [
    // NOVICE
    {id: 0, potion_name: "GIFT EXP", potion_image: flasks[0], ing1_id: 200, ing2_id: 200, ing3_id: 200, ing4_id: 200, ing1_amount: 0, ing2_amount: 0, ing3_amount: 0, ing4_amount: 0, ing1_golden: false, ing2_golden: false, ing3_golden: false, ing4_golden: false},
    {id: 1, potion_name: "DOUBLE POINTS", potion_image: flasks[1], ing1_id: 200, ing2_id: 200, ing3_id: 200, ing4_id: 200, ing1_amount: 0, ing2_amount: 0, ing3_amount: 0, ing4_amount: 0, ing1_golden: false, ing2_golden: false, ing3_golden: false, ing4_golden: false},
    {id: 2, potion_name: "SPEED UP", potion_image: flasks[2], ing1_id: 200, ing2_id: 200, ing3_id: 200, ing4_id: 200, ing1_amount: 0, ing2_amount: 0, ing3_amount: 0, ing4_amount: 0, ing1_golden: false, ing2_golden: false, ing3_golden: false, ing4_golden: false},
    {id: 3, potion_name: "PROTECTION", potion_image: flasks[3], ing1_id: 200, ing2_id: 200, ing3_id: 200, ing4_id: 200, ing1_amount: 0, ing2_amount: 0, ing3_amount: 0, ing4_amount: 0, ing1_golden: false, ing2_golden: false, ing3_golden: false, ing4_golden: false},
    // APPRENTICE
    {id: 4, potion_name: "FREEZE", potion_image: flasks[4], ing1_id: 200, ing2_id: 200, ing3_id: 200, ing4_id: 200, ing1_amount: 0, ing2_amount: 0, ing3_amount: 0, ing4_amount: 0, ing1_golden: false, ing2_golden: false, ing3_golden: false, ing4_golden: false},
    {id: 5, potion_name: "INSANITY", potion_image: flasks[5], ing1_id: 200, ing2_id: 200, ing3_id: 200, ing4_id: 200, ing1_amount: 0, ing2_amount: 0, ing3_amount: 0, ing4_amount: 0, ing1_golden: false, ing2_golden: false, ing3_golden: false, ing4_golden: false},
    {id: 6, potion_name: "POINT POISON", potion_image: flasks[6], ing1_id: 200, ing2_id: 200, ing3_id: 200, ing4_id: 200, ing1_amount: 0, ing2_amount: 0, ing3_amount: 0, ing4_amount: 0, ing1_golden: false, ing2_golden: false, ing3_golden: false, ing4_golden: false},
    {id: 7, potion_name: "GIVE GIFT", potion_image: flasks[7], ing1_id: 200, ing2_id: 200, ing3_id: 200, ing4_id: 200, ing1_amount: 0, ing2_amount: 0, ing3_amount: 0, ing4_amount: 0, ing1_golden: false, ing2_golden: false, ing3_golden: false, ing4_golden: false},
    // EXPERT
    {id: 8, potion_name: "CONFUSION", potion_image: flasks[8], ing1_id: 200, ing2_id: 200, ing3_id: 200, ing4_id: 200, ing1_amount: 0, ing2_amount: 0, ing3_amount: 0, ing4_amount: 0, ing1_golden: false, ing2_golden: false, ing3_golden: false, ing4_golden: false},
    {id: 9, potion_name: "TRIPPLE POINTS", potion_image: flasks[9], ing1_id: 200, ing2_id: 200, ing3_id: 200, ing4_id: 200, ing1_amount: 0, ing2_amount: 0, ing3_amount: 0, ing4_amount: 0, ing1_golden: false, ing2_golden: false, ing3_golden: false, ing4_golden: false},
    {id: 10, potion_name: "JUKEBOX", potion_image: flasks[10], ing1_id: 200, ing2_id: 200, ing3_id: 200, ing4_id: 200, ing1_amount: 0, ing2_amount: 0, ing3_amount: 0, ing4_amount: 0, ing1_golden: false, ing2_golden: false, ing3_golden: false, ing4_golden: false},
    {id: 11, potion_name: "PRICE RUNNER", potion_image: flasks[11], ing1_id: 200, ing2_id: 200, ing3_id: 200, ing4_id: 200, ing1_amount: 0, ing2_amount: 0, ing3_amount: 0, ing4_amount: 0, ing1_golden: false, ing2_golden: false, ing3_golden: false, ing4_golden: false},
    // MASTER
    {id: 12, potion_name: "MASS PROTECTION", potion_image: flasks[12], ing1_id: 200, ing2_id: 200, ing3_id: 200, ing4_id: 200, ing1_amount: 0, ing2_amount: 0, ing3_amount: 0, ing4_amount: 0, ing1_golden: false, ing2_golden: false, ing3_golden: false, ing4_golden: false},
    {id: 13, potion_name: "REVEAL", potion_image: flasks[13], ing1_id: 200, ing2_id: 200, ing3_id: 200, ing4_id: 200, ing1_amount: 0, ing2_amount: 0, ing3_amount: 0, ing4_amount: 0, ing1_golden: false, ing2_golden: false, ing3_golden: false, ing4_golden: false},
    {id: 14, potion_name: "BLOCKER", potion_image: flasks[14], ing1_id: 200, ing2_id: 200, ing3_id: 200, ing4_id: 200, ing1_amount: 0, ing2_amount: 0, ing3_amount: 0, ing4_amount: 0, ing1_golden: false, ing2_golden: false, ing3_golden: false, ing4_golden: false},
    {id: 15, potion_name: "DOUBLE BATCH", potion_image: flasks[15], ing1_id: 200, ing2_id: 200, ing3_id: 200, ing4_id: 200, ing1_amount: 0, ing2_amount: 0, ing3_amount: 0, ing4_amount: 0, ing1_golden: false, ing2_golden: false, ing3_golden: false, ing4_golden: false},
    // GRANDMASTER
    {id: 16, potion_name: "EPIC CHALLENGE", potion_image: flasks[16], ing1_id: 200, ing2_id: 200, ing3_id: 200, ing4_id: 200, ing1_amount: 0, ing2_amount: 0, ing3_amount: 0, ing4_amount: 0, ing1_golden: false, ing2_golden: false, ing3_golden: false, ing4_golden: false},
    {id: 17, potion_name: "STREAK BONUS", potion_image: flasks[17], ing1_id: 200, ing2_id: 200, ing3_id: 200, ing4_id: 200, ing1_amount: 0, ing2_amount: 0, ing3_amount: 0, ing4_amount: 0, ing1_golden: false, ing2_golden: false, ing3_golden: false, ing4_golden: false},
    {id: 18, potion_name: "MASS FREEZE", potion_image: flasks[18], ing1_id: 200, ing2_id: 200, ing3_id: 200, ing4_id: 200, ing1_amount: 0, ing2_amount: 0, ing3_amount: 0, ing4_amount: 0, ing1_golden: false, ing2_golden: false, ing3_golden: false, ing4_golden: false},
    {id: 19, potion_name: "GOLDEN POINTS", potion_image: flasks[19], ing1_id: 200, ing2_id: 200, ing3_id: 200, ing4_id: 200, ing1_amount: 0, ing2_amount: 0, ing3_amount: 0, ing4_amount: 0, ing1_golden: false, ing2_golden: false, ing3_golden: false, ing4_golden: false}
]

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
