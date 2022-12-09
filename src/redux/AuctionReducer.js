import { createSlice } from "@reduxjs/toolkit";
import { retrievePotionReducer } from "../pages/disconnectedView/retrieveFunctions/retrievePotionReducer"
import card_back from "../image_assets/general/card_back1.webp"



export const AuctionCards = [
    {id: 0, potionID: 200, counter: 100, countGoal: 0, status: "not_started", image: card_back},
    {id: 1, potionID: 200, counter: 90, countGoal: 0, status: "not_started", image: card_back},
    {id: 2, potionID: 200, counter: 80, countGoal: 0, status: "not_started", image: card_back},
    {id: 3, potionID: 200, counter: 70, countGoal: 0, status: "not_started", image: card_back},
    {id: 4, potionID: 200, counter: 60, countGoal: 0, status: "not_started", image: card_back},
    {id: 5, potionID: 200, counter: 50, countGoal: 0, status: "not_started", image: card_back},
    {id: 6, potionID: 200, counter: 40, countGoal: 0, status: "not_started", image: card_back},
    {id: 7, potionID: 200, counter: 30, countGoal: 0, status: "not_started", image: card_back}
]

export const auctionSlice = createSlice({
    name: "auction",
    initialState: {value: AuctionCards},
    reducers: {
        increase_auction_counter: (state) => {
            state.value.map((item) => {
                
                if (item.status === "active") {
                    if (item.counter > item.countGoal) {item.counter -= 1} else {item.status = "waiting_for_card"}
                }
                
            })
        },
        new_auction: (state, action) => {
            state.value.map((item) => {
                if (item.id === action.payload.auctionSlot) {
                    item.potionID = action.payload.newAuctionCard
                    item.counter = addingAuction(action.payload).counter
                    item.countGoal = addingAuction(action.payload).countGoal
                    item.image = addingAuction(action.payload).image
                    item.status = "active"
                }
            })
        },
        activate_auction: (state) => {
            state.value.map((item) => {
                if (item.status === "not_started") {item.status = "waiting_for_card"} 
            })
        },
      
    
    // NEXT - ADJUST POTIONS TO PLAYER'S POTIOn LEVEL - Make a function to use the correct image based on player potion level
    // NEXT - ADJUST PRICES
    // NEXT - MAKE AUCTION RESPONSIVE
    }
    
})


function addingAuction(data) {
   let newAuction = {counter: 100, countGoal: 0, image: card_back}

    switch (data.newAuctionCard) {
        case 0: newAuction = {counter: 30, countGoal: 0, image: levelAdjustedImage(0)}; break;
        case 1: newAuction = {counter: 30, countGoal: 0, image: levelAdjustedImage(1)}; break;
        case 2: newAuction = {counter: 30, countGoal: 0, image: levelAdjustedImage(2)}; break;
        case 3: newAuction = {counter: 30, countGoal: 0, image: levelAdjustedImage(3)}; break;
        case 4: newAuction = {counter: 30, countGoal: 0, image: levelAdjustedImage(4)}; break;
        case 5: newAuction = {counter: 30, countGoal: 0, image: levelAdjustedImage(5)}; break;
        case 6: newAuction = {counter: 30, countGoal: 0, image: levelAdjustedImage(6)}; break;
        case 7: newAuction = {counter: 30, countGoal: 0, image: levelAdjustedImage(7)}; break;
        case 8: newAuction = {counter: 30, countGoal: 0, image: levelAdjustedImage(8)}; break;
        case 9: newAuction = {counter: 30, countGoal: 0, image: levelAdjustedImage(9)}; break;
        case 10: newAuction = {counter: 30, countGoal: 0, image: levelAdjustedImage(10)}; break;
        case 11: newAuction = {counter: 30, countGoal: 0, image: levelAdjustedImage(11)}; break;
        case 12: newAuction = {counter: 30, countGoal: 0, image: levelAdjustedImage(12)}; break;
        case 13: newAuction = {counter: 30, countGoal: 0, image: levelAdjustedImage(13)}; break;
        case 14: newAuction = {counter: 30, countGoal: 0, image: levelAdjustedImage(14)}; break;
        case 15: newAuction = {counter: 30, countGoal: 0, image: levelAdjustedImage(15)}; break;
        case 16: newAuction = {counter: 30, countGoal: 0, image: levelAdjustedImage(16)}; break;
        case 17: newAuction = {counter: 30, countGoal: 0, image: levelAdjustedImage(17)}; break;
        case 18: newAuction = {counter: 30, countGoal: 0, image: levelAdjustedImage(18)}; break;
        case 19: newAuction = {counter: 30, countGoal: 0, image: levelAdjustedImage(19)}; break;
        default:
            break;
    }


    // Show player the potion image according to the player's potion's level
    function levelAdjustedImage(id) {
        // Get potionData from localStorage
        let allPotions = retrievePotionReducer()
        // Declare return variable
        let potionImage = card_back
        // Depending on player's potion level, the function will return the correct potion card image 
        if (allPotions[id].level === 1) {potionImage = allPotions[id].image_bronze; console.log("allPotions[id].image_bronze", allPotions[id].image_bronze)}
        if (allPotions[id].level === 2) {potionImage = allPotions[id].image_silver; console.log("allPotions[id].image_silver", allPotions[id].image_silver)}
        if (allPotions[id].level === 3) {potionImage = allPotions[id].image_gold; console.log("allPotions[id].image_gold", allPotions[id].image_gold)}

        return potionImage
        
    } // End of levelAdjustedImage()



    return newAuction

} // End of addingAuction()




export const {increase_auction_counter, activate_auction, new_auction} = auctionSlice.actions
export default auctionSlice.reducer


