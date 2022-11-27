import { IngredientData } from "../../../redux/IngredientData"

export const retrieveIngredientReducer = () => {

    const storedIngredentData = JSON.parse(localStorage.getItem("ingredientsList"))
    let retrievedData = JSON.parse(JSON.stringify(IngredientData))

    retrievedData.map((item, i) => {
      item.amount = storedIngredentData[i].amount; 
      item.discovered = storedIngredentData[i].discovered
    })
 
     return retrievedData
 }