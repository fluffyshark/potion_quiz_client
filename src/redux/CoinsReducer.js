import { createSlice } from "@reduxjs/toolkit";

export const coinSlice = createSlice({
    name: "coins",
    initialState: {value: 0},
    reducers: {
        add_coins: (state) => {
            state.value += 1
        },
        add_coins_amount: (state, action) => {
            state.value += action.payload
        },
        reduce_coins: (state) => {
            state.value -= 1
        },
        reduce_coins_amount: (state, action) => {
            state.value -= action.payload
        },
        
      
    }
})

export const {add_coins, add_coins_amount, reduce_coins, reduce_coins_amount} = coinSlice.actions
export default coinSlice.reducer
