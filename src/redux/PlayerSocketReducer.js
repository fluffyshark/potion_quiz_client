import { createSlice } from "@reduxjs/toolkit";
import io from "socket.io-client"

const socket = io.connect("https://server-potionquiz.herokuapp.com/")
//const socket = io.connect("http://localhost:3001")

export var PlayerData = {playerName: "", cards: [0,0,0], gameCode: ""}


export const playerStatsSlice = createSlice({
    name: "playerStats",
    initialState: {value: PlayerData},
    reducers: {
        add_playerStartData: (state, action) => {
            state.value.playerName = action.payload.playerName
            state.value.gameCode = action.payload.gameCode
            state.value.cards = action.payload.cards
            console.log("playerName", state.value.playerName)
        },

        add_playerPoints: (state, action) => {
            state.value.playerPoints += action.payload  
            console.log("POINTS FOR NEW POTION: ", action.payload, "PLAYERDATA", PlayerData ) 
            socket.emit("sending_player_data", { player: state.value.playerName, cards: state.value.cards, gameCode: state.value.gameCode });
        }
    }
    
})


export const {add_playerStartData, add_playerPoints} = playerStatsSlice.actions
export default playerStatsSlice.reducer


