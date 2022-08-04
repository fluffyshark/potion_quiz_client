import { createSlice } from "@reduxjs/toolkit";
import { PotionData } from "./PotionData.js"

export const potionSlice = createSlice({
    name: "potions",
    initialState: {value: PotionData},
    reducers: {
        add_potion: (state, action) => {
            state.value.map((potion) => {
                if (potion.id === action.payload.id) {
                    potion.amount += 1
                    potion.discovered = true
                }
            })
        },
        
        reduce_potion: (state, action) => {
            state.value.map((potion) => {
                if (potion.id === action.payload.id) {
                    potion.amount -= 1
                }
            })
        },

        
    }
})

export const {add_potion, reduce_potion } = potionSlice.actions
export default potionSlice.reducer
