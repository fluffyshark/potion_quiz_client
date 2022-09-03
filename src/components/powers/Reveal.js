
/// NEXT - INFORMATION IS CORRECT NOW WHAT HAPPENS IF REVEAL IS LEVEL 2 OR 3

export const Reveal = (recipeList, potionList) => {
    let revealIngredients = []
    let possible_reveal_collection = []
  
    // Loop through and list all ingredients with undiscovered amounts
    for (let i = 0; i < 20; i++) {
        if (recipeList[i].ing1_golden === false) {possible_reveal_collection.push({id: i, golden: "ing1"})}
        if (recipeList[i].ing2_golden === false) {possible_reveal_collection.push({id: i, golden: "ing2"})}
        if (recipeList[i].ing3_golden === false) {possible_reveal_collection.push({id: i, golden: "ing3"})}
        if (recipeList[i].ing4_golden === false) {possible_reveal_collection.push({id: i, golden: "ing4"})}
    }

    // Add first undiscovered amount to array
    revealIngredients.push(possible_reveal_collection[0])
    
    // Remove the one that was already added
    possible_reveal_collection.shift()

    // Shuffle the remaining 
    possible_reveal_collection.sort(() => Math.random() - 0.5)
    
    // if Reveal potion is level 2, then add one more amount reveal
    if (potionList[13].level === 2) {revealIngredients.push(possible_reveal_collection[0])}

    // if Reveal potion is level 3, then add two more amount reveal
    else if (potionList[13].level === 3) {revealIngredients.push(possible_reveal_collection[0]); revealIngredients.push(possible_reveal_collection[1])}

    // if Reveal is level one add values that will do nothing (need to fill up)
    else {revealIngredients.push({id: 0, golden: "none"}); revealIngredients.push({id: 0, golden: "none"}) }

    console.log("possible_reveal_collection", possible_reveal_collection)
    console.log("revealIngredients", revealIngredients)
    
   return revealIngredients
}

 