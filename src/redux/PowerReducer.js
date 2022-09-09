import { createSlice } from "@reduxjs/toolkit";

var PowerData = [
    // NOVICE
    {id: 0, power_name: "GIFT EXP", exp_level_1: 1, exp_level_2: 2, exp_level_3: 3, received_level1: 1},
    {id: 1, power_name: "DOUBLE POINTS", doublePoints: "inactive", coin_amount: 20, duration_level_1: 60, duration_level_2: 120, duration_level_3: 200, counter1: 0 },
    {id: 2, power_name: "SPEED UP", speedUp: "inactive", speed_1: 3000, speed_2: 1000, speed_3: 0, duration_level_1: 60, duration_level_2: 120, duration_level_3: 200, counter2: 0 },
    {id: 3, power_name: "PROTECTION", protection: "inactive", duration_level_1: 60, duration_level_2: 180, duration_level_3: 300, counter3: 0 },
    /// APPRENTICE
    {id: 4, power_name: "FREEZE", freeze: "inactive", duration_level_1: 10, duration_level_2: 15, duration_level_3: 20, attackLevel4: 1, },
    {id: 5, power_name: "FIFTY FIFTY", fiftyfifty: "inactive", duration_level_1: 5, duration_level_2: 10, duration_level_3: 30, counter5: 0 },
    {id: 6, power_name: "POINT POISON", poison: "inactive", duration_level_1: 30, duration_level_2: 60, duration_level_3: 120, received_duration: 30, counter6: 0 },
    {id: 7, power_name: "GIVE GIFT", gift_amount_1: 5, gift_amount_2: 10, gift_amount_3: 20 },
    /// EXPERT
    {id: 8, power_name: "CONFUSION", confusion: "inactive", duration_level_1: 5, duration_level_2: 10, duration_level_3: 15 },
    {id: 9, power_name: "TRIPPLE POINTS", tripplePoints: "inactive", coin_amount: 30, duration_level_1: 60, duration_level_2: 120, duration_level_3: 200, counter9: 0 },
    {id: 10, power_name: "JUKEBOX", playlist_level: 1 },
    {id: 11, power_name: "PRICE RUNNER", discount_level_1: 10, discount_level_2: 25, discount_level_3: 40, duration: 60, counter11: 0},
    // MASTER
    {id: 12, power_name: "MASS PROTECTION", duration_level_1: 60, duration_level_2: 180, duration_level_3: 300, counter12: 0},
    {id: 13, power_name: "REVEAL", reveal: "inactive", reveal_level: 1, reveal_level: 2, reveal_level: 3},
    {id: 14, power_name: "BLOCKER", blocker: "inactive", duration_level_1: 60, duration_level_2: 180, duration_level_3: 300, attackLevel14: 1, counter14: 0},
    {id: 15, power_name: "DOUBLE BATCH", duration_level_1: 60, duration_level_2: 180, duration_level_3: 300, counter15: 0},
    // GRANDMASTER
    {id: 16, power_name: "EPIC CHALLENGE", challenge_level_1: 10, challenge_level_2: 25, challenge_level_3: 50, counter16: 0},
    {id: 17, power_name: "STREAK BONUS", streak: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], counter17: 0},
    {id: 18, power_name: "MASS FREEZE", mass_freeze: "inactive", duration_level_1: 10, duration_level_2: 15, duration_level_3: 20, attackLevel18: 1, counter18: 0 },
    {id: 19, power_name: "GOLDEN POINTS", goldenPoints: "inactive", coin_amount: 50, duration_level_1: 60, duration_level_2: 120, duration_level_3: 200, counter19: 0 },

    {id: 20, power_name: "LEADERBOARD CARDS", leaderboard_card: "inactive", counter20_card: 0},
    {id: 21, power_name: "LEADERBOARD STATS", leaderboard_stats: "inactive", counter21_stats: 0}
]


export const powerSlice = createSlice({
    name: "powers",
    initialState: {value: PowerData},
    reducers: {
        activate_power: (state, action) => {
            state.value.map((power) => {
                if (action.payload.power_name === "FREEZE" ) {power.freeze = "active"}
                if (action.payload.power_name === "MASS FREEZE" ) {power.mass_freeze = "active"}
                if (action.payload.power_name === "PROTECTION" ) {power.protection = "active"}
                if (action.payload.power_name === "DOUBLE POINTS" ) {power.doublePoints = "active"}
                if (action.payload.power_name === "TRIPPLE POINTS" ) {power.tripplePoints = "active"}
                if (action.payload.power_name === "GOLDEN POINTS" ) {power.goldenPoints = "active"}
                if (action.payload.power_name === "SPEED UP" ) {power.speedUp = "active"}
                if (action.payload.power_name === "POINT POISON" ) {power.poison = "active"}
                if (action.payload.power_name === "BLOCKER" ) {power.blocker = "active"}
                if (action.payload.power_name === "FIFTY FIFTY" ) {power.fiftyfifty = "active"}

                if (action.payload.power_name === "LEADERBOARD CARDS" ) {power.leaderboard_card = "active"}
                if (action.payload.power_name === "LEADERBOARD STATS" ) {power.leaderboard_stats = "active"}
            })
        },

        dectivate_power: (state, action) => {
            state.value.map((power) => {
                if (action.payload.power_name === "FREEZE" ) {power.freeze = "inactive"}
                if (action.payload.power_name === "MASS FREEZE" ) {power.mass_freeze = "inactive"}
                if (action.payload.power_name === "PROTECTION" ) {power.protection = "inactive"; power.counter3 = 0}
                if (action.payload.power_name === "DOUBLE POINTS" ) {power.doublePoints = "inactive"; power.counter1 = 0}
                if (action.payload.power_name === "TRIPPLE POINTS" ) {power.tripplePoints = "inactive"; power.counter9 = 0}
                if (action.payload.power_name === "GOLDEN POINTS" ) {power.goldenPoints = "inactive"; power.counter19 = 0}
                if (action.payload.power_name === "SPEED UP" ) {power.speedUp = "inactive"; power.counter2 = 0}
                if (action.payload.power_name === "POINT POISON" ) {power.poison = "inactive"; power.counter6 = 0}
                if (action.payload.power_name === "BLOCKER" ) {power.blocker = "inactive"; power.counter14 = 0}
                if (action.payload.power_name === "FIFTY FIFTY" ) {power.fiftyfifty = "inactive"; power.counter5 = 0}

                if (action.payload.power_name === "LEADERBOARD CARDS" ) {power.leaderboard_card = "inactive"; power.counter20_card = 0}
                if (action.payload.power_name === "LEADERBOARD STATS" ) {power.leaderboard_stats = "inactive"; power.counter21_stats = 0}
            })
        },

        power_counter: (state) => {
            state.value.map((power) => {
                if (power.doublePoints === "active") {power.counter1 += 1}
                if (power.speedUp === "active") {power.counter2 += 1}
                if (power.tripplePoints === "active") {power.counter9 += 1}
                if (power.goldenPoints === "active") {power.counter19 += 1}
                if (power.poison === "active") {power.counter6 += 1}
                if (power.protection === "active") {power.counter3 += 1}
                if (power.blocker === "active") {power.counter14 += 1}

                if (power.leaderboard_card === "active") {power.counter20_card += 1}
                if (power.leaderboard_stats === "active") {power.counter21_stats += 1}
                
            })
        },
        power_special: (state, action) => {
            state.value.map((power) => {
                if (power.fiftyfifty === "active") {power.counter5 += 1}
                
                // Check if action.payload has the proporty, otherwise an error will be cast when mapping through all objects
                if (action.hasOwnProperty('potionName')) {
                    if (action.payload.potionName === "BLOCKER") {power.attackLevel14 = action.payload.effect}
                }
                
                
            })
        },
        
    }
})

export const { activate_power, dectivate_power, power_counter, power_special } = powerSlice.actions
export default powerSlice.reducer
