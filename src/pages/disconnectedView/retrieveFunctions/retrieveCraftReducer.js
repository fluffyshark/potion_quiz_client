
export const retrieveCraftReducer = () => {

    const retrievedData = JSON.parse(localStorage.getItem("craftList"))
      
     return retrievedData
 }