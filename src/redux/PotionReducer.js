import { createSlice } from "@reduxjs/toolkit";
import { PotionData } from "./PotionData.js"
import io from "socket.io-client"
import { saveToLocalStorage } from "../components/saveToLocalStorage/SaveToLocalStorage.js";

//const socket = io.connect("https://potionquiz.com/")
const socket = io.connect("http://16.171.11.140/")
//const socket = io.connect("https://server-potionquiz.herokuapp.com/")
//const socket = io.connect("http://localhost:3001")

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
            saveToLocalStorage("potionsList", state.value)
        },
        
        reduce_potion: (state, action) => {
            state.value.map((potion) => {
                if (potion.id === action.payload.id) {
                    potion.amount -= 1
                }
            })
            saveToLocalStorage("potionsList", state.value)
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
            saveToLocalStorage("potionsList", state.value)
        },

        increase_potion_level: (state, action) => {
            state.value.map((potion) => {
                if (potion.id === action.payload.id) {
                    if (action.payload.potion_Level === "silver") {potion.level = 2} 
                    if (action.payload.potion_Level === "gold") {potion.level = 3}  
                }     
            }) 
            saveToLocalStorage("potionsList", state.value)
        },

        retrive_potionData: (state, action) => {
            state.value = action.payload
        },

       
    }
})

export const {add_potion, reduce_potion, add_discovery_points, increase_potion_level, retrive_potionData } = potionSlice.actions
export default potionSlice.reducer
