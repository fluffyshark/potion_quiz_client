
export const Offerings = (marketData) => {
    
    let allSellOrders = []
    let offering = []

    // marketData are read-only object name from array
   marketData.map((data) => {
    allSellOrders.push(data)
   })

  
    // Sort array of objects by price, low to high
    function compare( a, b ) {
        if ( a.price < b.price ){
          return -1;
        }
        if ( a.price > b.price ){
          return 1;
        }
        return 0;
      }
      
      allSellOrders.sort( compare );

     
      // Removes dublicates of the same ingredient, as only one of each ingredient type will be shown at the time. 
      offering = allSellOrders.filter(
        (order, index) => index === allSellOrders.findIndex(other => order.ingredient === other.ingredient));


  //  console.log("IngredientID", offering)
    return offering
}

