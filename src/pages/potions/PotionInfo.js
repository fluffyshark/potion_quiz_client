import React from 'react'
import "./potionInfo.css"
import exitBtn from "../../image_assets/general/exit_btn.png"
import flasks from "../../image_assets/FlaskImageExport"

function PotionInfo(potionID) {

    let infoID = potionID.potionID
    let potion;

    switch (infoID) {
        case 0: potion = potionInfoData[0]; break;  case 1: potion = potionInfoData[1]; break;
        case 2: potion = potionInfoData[2]; break;  case 3: potion = potionInfoData[3]; break;
        case 4: potion = potionInfoData[4]; break;  case 5: potion = potionInfoData[5]; break;
        case 6: potion = potionInfoData[6]; break;  case 7: potion = potionInfoData[7]; break;
        case 8: potion = potionInfoData[8]; break;  case 9: potion = potionInfoData[9]; break;
        case 10: potion = potionInfoData[10]; break;  case 11: potion = potionInfoData[11]; break; 
        case 12: potion = potionInfoData[12]; break;  case 13: potion = potionInfoData[13]; break;
        case 14: potion = potionInfoData[14]; break;  case 15: potion = potionInfoData[15]; break;
        case 16: potion = potionInfoData[16]; break;  case 17: potion = potionInfoData[17]; break;
        case 18: potion = potionInfoData[18]; break;  case 19: potion = potionInfoData[19]; break;
    
        default:
            break;
    }


    function exitInfoView() {document.getElementById("potionInfo").style.display = "none"}

  return (
    <div className="potionInfo_container" id="potionInfo">
      <div className="potionInfo_scroll">
        <div className="potionInfo_scroll_top"><img onClick={() => {exitInfoView()}} src={exitBtn} alt="" /></div>
        <div className="potionInfo_scroll_title">{potion.name}</div>
        <div className="potionInfo_scroll_description">{potion.description}</div>
        <div className="potionInfo_scroll_flask"><img src={potion.flaskImage} alt="" /></div>
        <div className="potionInfo_scroll_effect">
          <p id="effectTitle">{potion.effectTitle}</p>
          <p>{potion.effectBronze}</p>
          <p>{potion.effectSilver}</p>
          <p>{potion.effectGold}</p>
        </div>
      </div>
    </div>
  )
}

export default PotionInfo

// Display PotionInfo
export const DisplayInfo = () => {document.getElementById("potionInfo").style.display = "flex"}




const potionInfoData = [
  {
    name: "GIVE GIFT",
    description: "Gives two players a gift of experience to help unlock new potions.",
    flaskImage: flasks[0],
    effectTitle: "EXP GIFTED (of TOTAL)",
    effectBronze: "Bronze: 2%", 
    effectSilver: "Silver: 4%", 
    effectGold: "Gold: 6%", 
  },
  {
    name: "DOUBLE POINTS",
    description: "Double you income for each question.",
    flaskImage: flasks[1],
    effectTitle: "DURATION",
    effectBronze: "Bronze:  60 seconds", 
    effectSilver: "Silver:   120 seconds", 
    effectGold: "Gold:   200 seconds", 
  },
  {
    name: "SPEED UP",
    description: "Reduces the wait time between questions.",
    flaskImage: flasks[2],
    effectTitle: "WAIT TIME REDUCTION",
    effectBronze: "Bronze: -25% for 60 seconds", 
    effectSilver: "Silver: -75% for 120 seconds", 
    effectGold: "Gold: -100% for 200 seconds", 
  },
  {
    name: "PROTECTION",
    description: "Gives you protection agains all harmful potions.",
    flaskImage: flasks[3],
    effectTitle: "DURATION",
    effectBronze: "Bronze: 60 seconds", 
    effectSilver: "Silver: 180 seconds", 
    effectGold: "Gold: 300 seconds", 
  },
  {
    name: "FREEZE",
    description: "Makes your target unable to do anything by freezing the screen.",
    flaskImage: flasks[4],
    effectTitle: "DURATION",
    effectBronze: "Bronze: 15 seconds", 
    effectSilver: "Silver: 20 seconds", 
    effectGold: "Gold: 25 seconds", 
  },
  {
    name: "EASY MODE",
    description: "You will only need to choose between two answer alternatives.",
    flaskImage: flasks[5],
    effectTitle: "NUMBER OF USES",
    effectBronze: "Bronze: 20 times", 
    effectSilver: "Silver: 50 times", 
    effectGold: "Gold: 100 times", 
  },
  {
    name: "POINT POISON",
    description: "Your target will lose 2 gold every second this potion is active.",
    flaskImage: flasks[6],
    effectTitle: "DURATION",
    effectBronze: "Bronze: 30 seconds", 
    effectSilver: "Silver: 60 seconds", 
    effectGold: "Gold: 120 seconds", 
  },
  {
    name: "GIVE GIFT",
    description: "Gift two players a set crafting ingredients.",
    flaskImage: flasks[7],
    effectTitle: "AMOUNT OF INGREDIENTS",
    effectBronze: "Bronze: 12 ingredients", 
    effectSilver: "Silver: 25 ingredients", 
    effectGold: "Gold: 50 ingredients", 
  },
  {
    name: "TRANSMUTATION",
    description: "Transform several ingredients into one of your choosing.",
    flaskImage: flasks[8],
    effectTitle: "INGREDIENT REQUIREMENT",
    effectBronze: "Bronze: 12 indredients", 
    effectSilver: "Silver: 8 ingredients", 
    effectGold: "Gold: 4 ingredients", 
  },
  {
    name: "TRIPPLE POINTS",
    description: "Tripple you income for each question.",
    flaskImage: flasks[9],
    effectTitle: "DURATION",
    effectBronze: "Bronze: 100 seconds", 
    effectSilver: "Silver: 200 seconds", 
    effectGold: "Gold: 400 seconds", 
  },
  {
    name: "JUKEBOX",
    description: "The host starts playing background music of your choosing.",
    flaskImage: flasks[10],
    effectTitle: "AVAILABLE OPTIONS",
    effectBronze: "Bronze: 4 melodies", 
    effectSilver: "Silver: 8 melodies", 
    effectGold: "Gold: 12 melodies", 
  },
  {
    name: "PRICE RUNNER",
    description: "Get disconts at the shop for 60 seconds.",
    flaskImage: flasks[11],
    effectTitle: "DISCOUNTS",
    effectBronze: "Bronze: 10% price reduction", 
    effectSilver: "Silver: 25% price reduction", 
    effectGold: "Gold: 40% price reduction", 
  },
  {
    name: "MASS PROTECTION",
    description: "Gives you and three others protection agains all harmful potions.",
    flaskImage: flasks[12],
    effectTitle: "DURATION",
    effectBronze: "Bronze: 60 seconds", 
    effectSilver: "Silver: 180 seconds", 
    effectGold: "Gold: 300 seconds", 
  },
  {
    name: "REVEAL",
    description: "Reveal ingredient's correct amount for random potions.",
    flaskImage: flasks[13],
    effectTitle: "NUMBER OF REVEALS",
    effectBronze: "Bronze:  1 reveal", 
    effectSilver: "Silver:   2 reveals", 
    effectGold: "Gold:    4 reveals", 
  },
  {
    name: "BLOCKER",
    description: "Throw slime on your target's screen and locks him in the quiz section.",
    flaskImage: flasks[14],
    effectTitle: "DURATION",
    effectBronze: "Bronze: 30 seconds", 
    effectSilver: "Silver: 60 seconds", 
    effectGold: "Gold: 120 seconds", 
  },
  {
    name: "DOUBLE BATCH",
    description: "Craft two potions instead of one while this potion is active.",
    flaskImage: flasks[15],
    effectTitle: "DURATION",
    effectBronze: "Bronze: 30 seconds", 
    effectSilver: "Silver: 120 seconds", 
    effectGold: "Gold: 200 seconds", 
  },
  {
    name: "EPIC CHALLENGE",
    description: "Clear the challenges and get a random rewards for it.",
    flaskImage: flasks[16],
    effectTitle: "CHALLENGES",
    effectBronze: "Bronze: 10 correct question in a row", 
    effectSilver: "Silver: 25 correct question in a row", 
    effectGold: "Gold: 50 correct question in a row", 
  },
  {
    name: "STREAK BONUS",
    description: "Get increasing bonus income for every correct question in a row. While you stay in quiz section.",
    flaskImage: flasks[17],
    effectTitle: "BONUS INCREASE",
    effectBronze: "Bronze: +1 per correct question", 
    effectSilver: "Silver: +2 per correct question", 
    effectGold: "Gold: +5 per correct question", 
  },
  {
    name: "MASS FREEZE",
    description: "Makes three players unable to do anything by freezing the screen.",
    flaskImage: flasks[18],
    effectTitle: "DURATION",
    effectBronze: "Bronze: 60 seconds", 
    effectSilver: "Silver: 120 seconds", 
    effectGold: "Gold: 200 seconds", 
  },
  {
    name: "GOLDEN POINTS",
    description: "Makes the each question worth 5x the normal income.",
    flaskImage: flasks[19],
    effectTitle: "DURATION",
    effectBronze: "Bronze: 100 seconds", 
    effectSilver: "Silver: 200 seconds", 
    effectGold: "Gold: 400 seconds", 
  }

]