import {PotionData} from "../../redux/PotionData"
import { IngredientData } from "../../redux/IngredientData"
import { PotionRecipeData } from "../../redux/PotionRecipeData"


// Setting up local storage for Potions, LevelExp, Ingredients, BuyLetter and PotionRecipe are required to be able to load from it when disconnected.
export const InitialSaveToLocalStorage = () => {

    storeLevelExp()

    storePotionsList()

    storeIngredientsList()

    storeRecipeList()

    storeBuyletter()
}


function storeLevelExp() {
    var levelExp = {currentLevel: 1, totalExp: 0, title: "NOVICE", level_2_requirement: 10, level_3_requirement: 20, level_4_requirement: 35, level_5_requirement: 50}
    localStorage.setItem("levelExp", JSON.stringify(levelExp))
}

function storePotionsList() {
    const storedPotionList = PotionData.map(({ image_bronze, image_silver, image_gold, ...rest }) => rest)
    localStorage.setItem("potionsList", JSON.stringify(storedPotionList))
}

function storeIngredientsList() {
    const storedIngredientsList = IngredientData.map(({ image_normal, image_golden, ...rest }) => rest)
    localStorage.setItem("ingredientsList", JSON.stringify(storedIngredientsList))
}

function storeRecipeList() {
    const storedRecipeList = PotionRecipeData.map(({ potion_image, ...rest }) => rest)
    localStorage.setItem("recipeList", JSON.stringify(storedRecipeList))
}

function storeBuyletter() {
    localStorage.setItem("buyletter", JSON.stringify([]))
}
