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
        
        buy_four_ingredients: (state) => {
            for (let i = 0; i < 5; i++) {
                state.value.map((ingredient) => {
                    if (ingredient.id === Math.floor(Math.random() * 69)) {
                        ingredient.amount += 1
                        ingredient.discovered = true
                    }
                })
            }  
        },

        buy_fourteen_ingredients: (state) => {
            for (let i = 0; i < 15; i++) {
                state.value.map((ingredient) => {
                    if (ingredient.id === Math.floor(Math.random() * 69)) {
                        ingredient.amount += 1
                        ingredient.discovered = true
                    }
                })
            }  
        },

        buy_fifty_ingredients: (state) => {
            for (let i = 0; i < 51; i++) {
                state.value.map((ingredient) => {
                    if (ingredient.id === Math.floor(Math.random() * 69)) {
                        ingredient.amount += 1
                        ingredient.discovered = true
                    }
                })
            }  
        },
        
    }
})

export const {increase_ingredients, buy_four_ingredients, buy_fourteen_ingredients, buy_fifty_ingredients} = ingredientSlice.actions
export default ingredientSlice.reducer
