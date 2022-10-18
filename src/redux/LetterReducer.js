import { createSlice } from "@reduxjs/toolkit";


export const buyLetterSlice = createSlice({
    name: "buyletter",
    initialState: {value: []},
    reducers: {
        add_buyLetter: (state, action) => {
            state.value.push(action.payload)
        },
        remove_buyLetter: (state, action) => {
            state.value.splice(action.payload, 1)
        }
       
    }
    
})


export const {add_buyLetter, remove_buyLetter} = buyLetterSlice.actions
export default buyLetterSlice.reducer
