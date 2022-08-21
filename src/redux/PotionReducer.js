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
                    console.log("Potion with id: ", potion.id, " discovered, currently owning: ",potion.amount)
                }
            })
        },
        
        reduce_potion: (state, action) => {
            state.value.map((potion) => {
                if (potion.id === action.payload.id) {
                    potion.amount -= 1
                    console.log("AMMOUNT REDUCED")
                }
            })
        },

        
    }
})

export const {add_potion, reduce_potion } = potionSlice.actions
export default potionSlice.reducer
