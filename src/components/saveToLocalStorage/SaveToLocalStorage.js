
export const saveToLocalStorage = (type, data) => {

    switch (type) {
        case "coins": storeCoinList(data); break;
        case "playerStats": storePlayerStats(data); break;
        case "gameStats": storeGameStats(data); break;
        case "potionsList": storePotionsList(data); break;
        case "levelExp": storeLevelExp(data); break;
        case "ingredientsList": storeIngredientsList(data); break;
        case "recipeList": storeRecipeList(data); break;
        case "craftList": storeCraftList(data); break;
        case "marketData": storeMarketData(data); break;
        case "buyletter": storeBuyletter(data); break;
        default:
            break;
    }
    
    
    
}


function storeCoinList(coinList) {// Called from CoinsReducer.js
    localStorage.setItem("coinList", JSON.stringify(coinList))
} 

function storePlayerStats(playerStats) {// Called from PlayerSocketReducer.js
    localStorage.setItem("playerStats", JSON.stringify(playerStats))
}

function storeGameStats(gameStats) {// Called from GameStatsReducer.js
    localStorage.setItem("gameStats", JSON.stringify(gameStats))
    console.log("gameStats", gameStats)
}

function storePotionsList(potionsList) {// Called from PotionReducer.js
    const storedPotionList = potionsList.map(({ image_bronze, image_silver, image_gold, ...rest }) => rest)
    localStorage.setItem("potionsList", JSON.stringify(storedPotionList))
}

function storeLevelExp(levelExp) {
    localStorage.setItem("levelExp", JSON.stringify(levelExp))
}

function storeIngredientsList(ingredientsList) {
    const storedIngredientsList = ingredientsList.map(({ image_normal, image_golden, ...rest }) => rest)
    localStorage.setItem("ingredientsList", JSON.stringify(storedIngredientsList))
}

function storeRecipeList(recipeList) {
    const storedRecipeList = recipeList.map(({ potion_image, ...rest }) => rest)
    localStorage.setItem("recipeList", JSON.stringify(storedRecipeList))
}

function storeCraftList(craftList) {
    const storedCraftList = craftList.map(({ image, ...rest }) => rest)
    localStorage.setItem("craftList", JSON.stringify(storedCraftList))
}

function storeMarketData(marketData) {
    localStorage.setItem("marketData", JSON.stringify(marketData))
}

function storeBuyletter(buyletter) {
    localStorage.setItem("buyletter", JSON.stringify(buyletter))
}