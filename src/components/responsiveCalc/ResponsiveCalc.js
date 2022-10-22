


// Functions calculating correct CSS for elements affected by the variance of viewports in devices

console.log("width: ", window.innerWidth)
    console.log("height: ", window.innerHeight)

    
    if (window.innerHeight === 969) {console.log("CORRECT ESTIMATES")}

// iPad 9.7-inch
// - Safari brower (no extra tabs) - 768x954 - 97vh
// - Safari brower (with extra tabs) - 768x921 - 93vh
// - Chrome brower (no extra tabs) - 768x909 - 92vh
// - Firefox brower (no extra tabs) - 768x906 - ??vh - Working

// iPad 10.2-inch
// - Safari brower (no extra tabs) - 810x977 - 94vh
// - Safari brower (with extra tabs) - 810x1010 - 97vh
// - Chrome brower (no extra tabs) - 810x965 - 94vh

// Craft ingred amounts
// 969px = 69% | 57% on selected (My computer) 
// 954px = 66.8% | 58.8% in selected (iPad 9.7-inch) 
// 668px = 68.8% | 56.5% in selected (Ubuntu 1292x668)

export const ingredAmountTop = (height, width) => {
    let amountTop = 100


// 969 - 668 = 301
// 14.0435 - 9.7093 = 4.3342

// 969 - 954 = 15


    return amountTop

}



