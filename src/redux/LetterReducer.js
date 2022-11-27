import { createSlice } from "@reduxjs/toolkit";
import { saveToLocalStorage } from "../components/saveToLocalStorage/SaveToLocalStorage";


export const buyLetterSlice = createSlice({
    name: "buyletter",
    initialState: {value: []},
    reducers: {
        add_buyLetter: (state, action) => {
            state.value.push(action.payload)
            saveToLocalStorage("buyletter", state.value)
        },
        remove_buyLetter: (state, action) => {
            state.value.splice(action.payload, 1)
            saveToLocalStorage("buyletter", state.value)
        },
        retrive_buyLetter: (state, action) => {
            state.value = action.payload
        },
       
    }
    
})


export const {add_buyLetter, remove_buyLetter, retrive_buyLetter} = buyLetterSlice.actions
export default buyLetterSlice.reducer
