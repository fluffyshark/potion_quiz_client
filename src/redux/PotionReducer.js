import { createSlice } from "@reduxjs/toolkit";
import { PotionData } from "./PotionData.js"
import io from "socket.io-client"

//const socket = io.connect("https://potion-quiz-server.herokuapp.com/")
const socket = io.connect("http://localhost:3001")

let levelsCounter = [0,0,0]

export const potionSlice = createSlice({
    name: "potions",
    initialState: {value: PotionData},
    reducers: {
        add_potion: (state, action) => {
            state.value.map((potion) => {
                if (potion.id === action.payload.id) {
                    potion.amount += 1
                    potion.discovered = true
                }
            })
        },
        
        reduce_potion: (state, action) => {
            state.value.map((potion) => {
                if (potion.id === action.payload.id) {
                    potion.amount -= 1
                    console.log("AMMOUNT REDUCED")
                }
            })
        },

        add_discovery_points: (state, action) => {
            state.value.map((potion) => {
                if (potion.id === action.payload.id) {
                    if (action.payload.earnedPoints === 20 && potion.earnedPoints === 0) {
                        potion.earnedPoints += action.payload.earnedPoints
                    } 
                    if (action.payload.earnedPoints === 30 && potion.earnedPoints === 20) {
                        potion.earnedPoints += action.payload.earnedPoints
                    }
                    if (action.payload.earnedPoints === 100 && potion.earnedPoints === 50) {
                        potion.earnedPoints += action.payload.earnedPoints
                    }

                   
                }
            })
        },

        increase_potion_level: (state, action) => {
            state.value.map((potion) => {
                if (potion.id === action.payload.id) {
                    if (action.payload.potion_Level === "silver") {potion.level = 2} 
                    if (action.payload.potion_Level === "gold") {potion.level = 3}  
                }     
            }) 
        },

        
    }
})

export const {add_potion, reduce_potion, add_discovery_points, increase_potion_level } = potionSlice.actions
export default potionSlice.reducer
