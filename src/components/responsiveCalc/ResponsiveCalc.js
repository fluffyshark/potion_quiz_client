


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

// 969px = 69% | 57% on selected

export const ingredAmountTop = (height, width) => {
    let amountTop = 100





    return amountTop

}



