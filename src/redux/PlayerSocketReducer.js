import { createSlice } from "@reduxjs/toolkit";
import io from "socket.io-client"
import { saveToLocalStorage } from "../components/saveToLocalStorage/SaveToLocalStorage";

//const socket = io.connect("https://potionquiz.com/")
const socket = io.connect("http://localhost:3001")

export var PlayerData = {playerID: "", playerName: "", cards: [0,0,0], gameCode: "", displayCode: 0, playerQuizScore: {totalQuestions: 0, correct: 0, wrong: 0}}


export const playerStatsSlice = createSlice({
    name: "playerStats",
    initialState: {value: PlayerData},
    reducers: {
        add_playerStartData: (state, action) => {
            state.value.playerName = action.payload.playerName
            state.value.gameCode = action.payload.gameCode
            state.value.cards = action.payload.cards
            state.value.playerID = action.payload.playerID
            if (action.payload.hasOwnProperty('displayCode')) { state.value.displayCode = action.payload.displayCode}
            console.log("playerData", action.payload)
            saveToLocalStorage("playerStats", state.value)
        },

        add_playerPoints: (state, action) => {
            state.value.playerPoints += action.payload  
            socket.emit("sending_player_data", { player: state.value.playerName, cards: state.value.cards, gameCode: state.value.gameCode });
            saveToLocalStorage("playerStats", state.value)
        },

        add_quiz_score: (state, action) => {
            state.value.playerQuizScore = action.payload 
        },
    }
    
})


export const {add_playerStartData, add_playerPoints, add_quiz_score} = playerStatsSlice.actions
export default playerStatsSlice.reducer


