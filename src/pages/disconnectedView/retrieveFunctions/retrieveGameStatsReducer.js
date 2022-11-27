
export const retrieveGameStatsReducer = () => {

    const retrievedData = JSON.parse(localStorage.getItem("gameStats"))
 
     return retrievedData
 }