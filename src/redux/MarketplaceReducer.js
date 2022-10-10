import { createSlice } from "@reduxjs/toolkit";

// Players send their sell orders by Socket.io to server
// Players send their buy orders by Socket.io to server 
// Server compile all orders and updates market data
// Server sends updated market data to all players


export const marketSlice = createSlice({
    name: "themarket",
    initialState: {value: []},
    reducers: {
        update_market: (state, action) => {
            state.value = action.payload
          //  console.log("MARKETREDUCER", state.value)
        },
       
        
      
    }
    
})


export const {update_market} = marketSlice.actions
export default marketSlice.reducer


