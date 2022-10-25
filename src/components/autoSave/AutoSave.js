
export const AutoSave = (playerStats, gameStats, coinList, potionsList, powersList, levelExp, ingredientsList, recipeList, craftList, marketData, buyletter) => {

    storePlayerStats(playerStats)
    storeGameStats(gameStats)
    storeCoinList(coinList)

    storePotionsList(potionsList)
    storePowersList(powersList)
    storeLevelExp(levelExp)
    
    storeIngredientsList(ingredientsList)
    storeRecipeList(recipeList)
    storeCraftList(craftList)

    storeMarketData(marketData)
    storeBuyletter(buyletter)

//    clearLocalStorage()

//    checkSizeOfLocalStorage()

}


// Player related 
function storePlayerStats(playerStats) {localStorage.setItem("playerStats", JSON.stringify(playerStats))}

function storeGameStats(gameStats) {localStorage.setItem("gameStats", JSON.stringify(gameStats))}

function storeCoinList(coinList) {localStorage.setItem("coinList", JSON.stringify(coinList))}


// Potion related
function storePotionsList(potionsList) {
    const storedPotionList = potionsList.map(({ image_bronze, image_silver, image_gold, ...rest }) => rest)
   
    console.log("storedPotionList", storedPotionList)
   
    localStorage.setItem("potionsList", JSON.stringify(storedPotionList))
}

function storePowersList(powersList) {localStorage.setItem("powersList", JSON.stringify(powersList))}

function storeLevelExp(levelExp) {localStorage.setItem("levelExp", JSON.stringify(levelExp))}


// Ingredient related
function storeIngredientsList(ingredientsList) {
    const storedIngredientsList = ingredientsList.map(({ image_normal, image_golden, ...rest }) => rest)
    localStorage.setItem("ingredientsList", JSON.stringify(storedIngredientsList))
}

function storeRecipeList(recipeList) {
    const storedRecipeList = recipeList.map(({ potion_image, ...rest }) => rest)
    localStorage.setItem("recipeList", JSON.stringify(storedRecipeList))
}

function storeCraftList(craftList) {localStorage.setItem("craftList", JSON.stringify(craftList))}


// Market related
function storeMarketData(marketData) {localStorage.setItem("marketData", JSON.stringify(marketData))}

function storeBuyletter(buyletter) {localStorage.setItem("buyletter", JSON.stringify(buyletter))}


// Utility related
function clearLocalStorage() {
    localStorage.removeItem("powersList"); localStorage.removeItem("potionsList"); localStorage.removeItem("ingredientsList"); localStorage.removeItem("coinList")
    localStorage.removeItem("playerStats"); localStorage.removeItem("craftList"); localStorage.removeItem("levelExp"); localStorage.removeItem("marketData")
    localStorage.removeItem("gameStats"); localStorage.removeItem("buyletter"); localStorage.removeItem("recipeList")
}

function checkSizeOfLocalStorage() {
    var _lsTotal = 0,
    _xLen, _x;
    for (_x in localStorage) {
    if (!localStorage.hasOwnProperty(_x)) {
        continue;
    }
    _xLen = ((localStorage[_x].length + _x.length) * 2);
    _lsTotal += _xLen;
    console.log(_x.substr(0, 50) + " = " + (_xLen / 1024).toFixed(2) + " KB")
    };
    console.log("Total = " + (_lsTotal / 1024).toFixed(2) + " KB");
}
 