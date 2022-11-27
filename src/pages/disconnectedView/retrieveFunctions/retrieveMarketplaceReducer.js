
export const retrieveMarketplaceReducer = () => {

    const retrievedData = JSON.parse(localStorage.getItem("marketData"))
 
     return retrievedData
 }