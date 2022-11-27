import { createSlice } from "@reduxjs/toolkit";
import { saveToLocalStorage } from "../components/saveToLocalStorage/SaveToLocalStorage";
import no_ingred from "../image_assets/general/no_ingred.png"

const CraftData = [
    {id: 0, image: no_ingred, selected_id: 200, amount: 0, total: 0},
    {id: 1, image: no_ingred, selected_id: 200, amount: 0, total: 0},
    {id: 2, image: no_ingred, selected_id: 200, amount: 0, total: 0},
    {id: 3, image: no_ingred, selected_id: 200, amount: 0, total: 0},
]


export const craftSlice = createSlice({
    name: "craft",
    initialState: {value: CraftData},
    reducers: {
        select_ingredients: (state, action) => {
            state.value.map((ingredient) => {
                if (ingredient.id === action.payload.id) {
                    ingredient.image = action.payload.image 
                    ingredient.selected_id = action.payload.selected_id
                    ingredient.total = action.payload.total
                    if (ingredient.total >= 1) {ingredient.amount += 1; ingredient.total -= 1}
                }
            })
            saveToLocalStorage("craftList", state.value)
        },
        deSelect_ingredients: (state, action) => {
            state.value.map((ingredient) => {
                if (ingredient.id === action.payload.id) {
                    if (ingredient.amount >= 0) {ingredient.amount -= 1; ingredient.total += 1}
                    if (ingredient.amount < 1) {ingredient.selected_id = action.payload.selected_id; ingredient.image = action.payload.image}
                }
            })
            saveToLocalStorage("craftList", state.value)
        },
        remove_for_crafting: (state, action) => {
            state.value.map((ingredient) => {
                    ingredient.amount = 0
                    ingredient.selected_id = 200
                    ingredient.total = 0
                    ingredient.image = no_ingred
            })
            saveToLocalStorage("craftList", state.value)
        },

        
       

        
    }
})

export const {select_ingredients, deSelect_ingredients, remove_for_crafting} = craftSlice.actions
export default craftSlice.reducer
