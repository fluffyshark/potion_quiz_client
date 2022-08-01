import playerGoldReducer from "./playerGold";
import isLoggedReducer from "./isLogged";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    playerGold: playerGoldReducer,
    isLogged: isLoggedReducer
})

export default allReducers