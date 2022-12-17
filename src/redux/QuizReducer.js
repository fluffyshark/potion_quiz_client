import { createSlice } from "@reduxjs/toolkit";
import { saveToLocalStorage } from "../components/saveToLocalStorage/SaveToLocalStorage";

export const quizSlice = createSlice({
    name: "quiz",
    initialState: {value: []},
    reducers: {
        add_all_quizzes: (state, action) => {
            state.value = action.payload
            console.log("userOwnedQuizREDUX", state.value)
        },
        select_one_quiz: (state, action) => {
            state.value = action.payload
            console.log("SELECTED QUIZ REDUZ", state.value)
        },
    }

})


export const { add_all_quizzes, select_one_quiz } = quizSlice.actions
export default quizSlice.reducer


