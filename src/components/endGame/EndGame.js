
export function EndGame(socket, gameCode) {

    // Make player leave room and the game data will be deleted on the server-side
    socket.emit("player_end_game", gameCode);

    localStorage.setItem("disconnected", "EndGame")

    // Removing game data from localStorage 
//    localStorage.removeItem("playerStats")
    localStorage.removeItem("coinList")
    localStorage.removeItem("gameStats")
    localStorage.removeItem("levelExp")
    localStorage.removeItem("potionsList")
    localStorage.removeItem("ingredientsList")
    localStorage.removeItem("recipeList")
    localStorage.removeItem("marketData")
    localStorage.removeItem("buyletter")
    localStorage.removeItem("craftList")
    localStorage.removeItem("powersList")

    console.log("Device Ends Game")
}


// CREATE A NEW GAME END PAGE