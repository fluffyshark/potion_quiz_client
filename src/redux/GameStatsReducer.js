import { createSlice } from "@reduxjs/toolkit";

// export var GameData = []

export const gameStatsSlice = createSlice({
    name: "gameStats",
    initialState: {value: []},
    reducers: {
        add_players: (state, action) => {
            state.value = action.payload
            console.log("GameStatsReducer - action.payload", action.payload)
            console.log("GameStatsReducer - local GameData", state.value)
        },
        add_coins_amount: (state, action) => {
            state.value.total += action.payload   
        },
        reduce_coins: (state) => {
            state.value.total -= state.value.income
        },
        reduce_coins_amount: (state, action) => {
            state.value.total -= action.payload
        },
        change_coins_income: (state, action) => {
            state.value.income = action.payload
        },
        
        
      
    }
    
})


export const {add_players, add_coins_amount, reduce_coins, reduce_coins_amount, change_coins_income} = gameStatsSlice.actions
export default gameStatsSlice.reducer


