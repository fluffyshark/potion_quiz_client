import { createSlice } from "@reduxjs/toolkit";
import { saveToLocalStorage } from "../components/saveToLocalStorage/SaveToLocalStorage.js";
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
            saveToLocalStorage("ingredientsList", state.value)
        },
        
        decrease_ingredients: (state, action) => {
            state.value.map((ingredient) => {
                if (ingredient.id === action.payload.id) {
                    ingredient.discovered = true
                    if (ingredient.amount >= 1) {ingredient.amount -= 1}
                }
            })
            saveToLocalStorage("ingredientsList", state.value)
        },

        giveGift_ingredients: (state, action) => {
         //   console.log(action.payload.colletArray)
            for (let i = 0; i < action.payload.colletArray.length; i++) {
                state.value.map((ingredient) => {
                    if (ingredient.id === action.payload.colletArray[i]) {
                        ingredient.amount += 1
                        ingredient.discovered = true
                    }
                })
            }  
            saveToLocalStorage("ingredientsList", state.value)
        },

        transmute_ingredients: (state, action) => {
                state.value.map((ingredient, i) => {
                    if (ingredient.id === action.payload.chosenID) {
                        ingredient.amount += 1
                        ingredient.discovered = true
                    }  
                }) 
                state.value.map((ingredient) => {
                    for (let i = 0; i < action.payload.discardingIDs.length; i++) {
                        if (ingredient.id === action.payload.discardingIDs[i]) {
                            ingredient.amount -= 1
                        }
                    }
                    saveToLocalStorage("ingredientsList", state.value)
                })
        },

        epic_challenge_ingredients: (state, action) => {
            let array = []
            for (let i = 0; i < action.payload; i++) {
                array.push(Math.floor(Math.random() * 180))
            }  
            for (let i = 0; i < action.payload; i++) {
                state.value.map((ingredient) => {
                    if (ingredient.id === array[i]) {
                        ingredient.amount += 1
                        ingredient.discovered = true
                    }
                })
            }  
            saveToLocalStorage("ingredientsList", state.value)
        },
        
        buy_four_ingredients: (state, action) => {
            for (let i = 0; i < 4; i++) {
                state.value.map((ingredient) => {
                    if (ingredient.id === action.payload[i]) {
                        ingredient.amount += 1
                        ingredient.discovered = true
                    }
                })
            }  
            saveToLocalStorage("ingredientsList", state.value)
        },

        buy_fourteen_ingredients: (state, action) => {
            for (let i = 0; i < 15; i++) {
                state.value.map((ingredient) => {
                    if (ingredient.id === action.payload[i]) {
                        ingredient.amount += 1
                        ingredient.discovered = true
                    }
                })
            }  
            saveToLocalStorage("ingredientsList", state.value)
        },

        buy_fifty_ingredients: (state, action) => {
            for (let i = 0; i < 50; i++) {
                state.value.map((ingredient) => {
                    if (ingredient.id === action.payload[i]) {
                        ingredient.amount += 1
                        ingredient.discovered = true
                    }
                })
            } 
            saveToLocalStorage("ingredientsList", state.value) 
        },
        
        retrive_ingreidentData: (state, action) => {
            state.value = action.payload
        },

        return_craftIngrediets: (state, action) => {
            state.value.map((ingredient) => {
                if (ingredient.id === action.payload.id) {
                        ingredient.amount += action.payload.amount
                        ingredient.discovered = true
                }
            })
            saveToLocalStorage("ingredientsList", state.value)
        },

    }
})

export const {increase_ingredients, decrease_ingredients, giveGift_ingredients, transmute_ingredients, epic_challenge_ingredients, buy_four_ingredients, buy_fourteen_ingredients, buy_fifty_ingredients, retrive_ingreidentData, return_craftIngrediets} = ingredientSlice.actions
export default ingredientSlice.reducer
