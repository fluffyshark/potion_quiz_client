import { createSlice } from "@reduxjs/toolkit";
import { IngredientData } from "./IngredientData.js"

export const ingredientSlice = createSlice({
    name: "ingredients",
    initialState: {value: IngredientData},
    reducers: {
        increase_ingredients: (state, action) => {
            state.value.map((ingredient) => {
                if (ingredient.id === action.payload.id) {
                    ingredient.amount += 1
                    ingredient.discovered = true
                }
            })
        },
        decrease_ingredients: (state, action) => {
            state.value.map((ingredient) => {
                if (ingredient.id === action.payload.id) {
                    ingredient.discovered = true
                    if (ingredient.amount >= 1) {ingredient.amount -= 1}
                }
            })
        },
        
        buy_four_ingredients: (state) => {
            let array = []
            for (let i = 0; i < 4; i++) {
                array.push(Math.floor(Math.random() * 180))
            }  
            for (let i = 0; i < 4; i++) {
                state.value.map((ingredient) => {
                    if (ingredient.id === array[i]) {
                        ingredient.amount += 1
                        ingredient.discovered = true
                        console.log(ingredient.id)
                    }
                })
            }  
        },

        buy_fourteen_ingredients: (state) => {
            let array = []
            for (let i = 0; i < 15; i++) {
                array.push(Math.floor(Math.random() * 180))
            }  
            for (let i = 0; i < 15; i++) {
                state.value.map((ingredient) => {
                    if (ingredient.id === array[i]) {
                        ingredient.amount += 1
                        ingredient.discovered = true
                        console.log(ingredient.id)
                    }
                })
            }  
        },

        buy_fifty_ingredients: (state) => {
            let array = []
            for (let i = 0; i < 50; i++) {
                array.push(Math.floor(Math.random() * 180))
            }  
            for (let i = 0; i < 50; i++) {
                state.value.map((ingredient) => {
                    if (ingredient.id === array[i]) {
                        ingredient.amount += 1
                        ingredient.discovered = true
                        console.log(ingredient.id)
                    }
                })
            }  
        },
        

    }
})

export const {increase_ingredients, decrease_ingredients, buy_four_ingredients, buy_fourteen_ingredients, buy_fifty_ingredients} = ingredientSlice.actions
export default ingredientSlice.reducer
