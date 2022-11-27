
import { PotionData } from "../../../redux/PotionData.js"

export const retrievePotionReducer = () => {

    const storedPotionData = JSON.parse(localStorage.getItem("potionsList"))
    let retrievedData = JSON.parse(JSON.stringify(PotionData))

    retrievedData.map((item, i) => {
      item.amount = storedPotionData[i].amount; item.discovered = storedPotionData[i].discovered
      item.level = storedPotionData[i].level; item.earnedPoints = storedPotionData[i].earnedPoints
    })
 
     return retrievedData
 }