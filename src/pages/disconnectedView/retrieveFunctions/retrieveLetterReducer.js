
export const retrieveLetterReducer = () => {

    const retrievedData = JSON.parse(localStorage.getItem("buyletter"))
 
     return retrievedData
 }