
export const retrieveCoinsReducer = () => {

   const retrievedData = JSON.parse(localStorage.getItem("coinList"))

    return retrievedData
}