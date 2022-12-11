import { createSlice } from "@reduxjs/toolkit";

export var EndGameData = {gameStatus: "Not In Game"}

export const endGameSlice = createSlice({
    name: "endgame",
    initialState: {value: EndGameData},
    reducers: {
        change_game_status: (state, action) => {
            state.value.gameStatus = action.payload
        },
       
        
        
      
    }
    
})


export const {change_game_status} = endGameSlice.actions
export default endGameSlice.reducer


