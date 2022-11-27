
export const retrieveLevelExpReducer = () => {

    const retrievedData = JSON.parse(localStorage.getItem("levelExp"))
 
     return retrievedData
 }