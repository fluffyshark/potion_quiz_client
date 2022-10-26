import { createSlice } from "@reduxjs/toolkit";

export var CoinData = {total: 0, income: 10,}

export const coinSlice = createSlice({
    name: "coins",
    initialState: {value: CoinData},
    reducers: {
        add_coins: (state) => {
            state.value.total += state.value.income
        },
        add_coins_amount: (state, action) => {
            state.value.total += action.payload
            console.log("action.payload", action.payload)
            
        },
        reduce_coins: (state) => {
            state.value.total -= state.value.income
        },
        reduce_coins_amount: (state, action) => {
            state.value.total -= action.payload
            console.log("reduce_coins_amount", reduce_coins_amount)
        },
        change_coins_income: (state, action) => {
            state.value.income = action.payload
        },
        
        
      
    }
    
})


export const {add_coins, add_coins_amount, reduce_coins, reduce_coins_amount, change_coins_income} = coinSlice.actions
export default coinSlice.reducer


