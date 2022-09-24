import { createSlice } from "@reduxjs/toolkit";

// export var GameData = []

export const gameStatsSlice = createSlice({
    name: "gameStats",
    initialState: {value: []},
    reducers: {
        add_gameStats: (state, action) => {
            state.value = action.payload
        //    console.log("GameStatsReducer - action.payload", action.payload)
        //    console.log("GameStatsReducer - local GameData", state.value)
        },
       
        
      
    }
    
})


export const {add_gameStats} = gameStatsSlice.actions
export default gameStatsSlice.reducer


