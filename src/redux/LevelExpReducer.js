import { createSlice } from "@reduxjs/toolkit";

var LevelExpData = {currentLevel: 1, totalExp: 0, title: "NOVICE", level_2_requirement: 10, level_3_requirement: 20, level_4_requirement: 35, level_5_requirement: 50}

export const levelExpSlice = createSlice({
    name: "level",
    initialState: {value: LevelExpData},
    reducers: {
        add_exp: (state) => {
            state.value.map((level) => {
                level.value += 1
            }) 
        },
        add_exp_amount: (state, action) => {
            state.value.totalExp += action.payload 
            if (state.value.totalExp >= state.value.level_2_requirement && state.value.totalExp <= state.value.level_3_requirement) {
                state.value.currentLevel = 2
                state.value.title = "APPRENTICE"
            } else if (state.value.totalExp >= state.value.level_3_requirement && state.value.totalExp <= state.value.level_4_requirement) {
                state.value.currentLevel = 3
                state.value.title = "EXPERT"
            } else if (state.value.totalExp >= state.value.level_4_requirement && state.value.totalExp <= state.value.level_5_requirement) {
                state.value.currentLevel = 4
                state.value.title = "MASTER"
            } else if (state.value.totalExp >= state.value.level_5_requirement) {
                state.value.currentLevel = 5
                state.value.title = "GRANDMASTER"
            }     
        },
        reduce_exp: (state) => {
            state.value.totalExp = 0
        },
        reduce_exp_amount: (state, action) => {
            state.value -= action.payload
        },
        
      
    }
})

export const {add_exp, add_exp_amount, reduce_exp, reduce_exp_amount} = levelExpSlice.actions
export default levelExpSlice.reducer
