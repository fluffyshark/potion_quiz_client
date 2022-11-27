
export const retrievePotionRecipeReducer = () => {

    const retrievedData = JSON.parse(localStorage.getItem("recipeList"))
 
     return retrievedData
 }