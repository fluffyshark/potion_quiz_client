
export const retrievePlayerSocketReducer = () => {

    const retrievedData = JSON.parse(localStorage.getItem("playerStats"))
 
     return retrievedData
 }