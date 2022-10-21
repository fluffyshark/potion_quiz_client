import React, { useEffect } from 'react'
import "./flipcard.css"
import "./responsive/responsive.css"
import "./responsive/tablet.css"
import card_front from "../../image_assets/potions/cards/potion2_gold.png"
import potion_fail from "../../image_assets/general/potion_fail.png"
import card_back from "../../image_assets/general/card_back1.webp"

function FlipCard(props) {
  console.log("CARD PROPS", props.reveal)

  useEffect(() => {
    if (props.reveal === true) {document.getElementById("theCard2").style.transform = "rotateY(180deg)"} 
    else {document.getElementById("theCard2").style.transform = "rotateY(0deg)"}
  
  })
 

  return (
    <div className='mainContainer'>

        <div className="theCard" id="theCard2">

            <div className="theFront"><img src={card_back} alt="" /></div>

            <div className="theBack"><img id="flipCardImg" src={potion_fail} alt="" /></div>

        </div>

        

    </div>
  )
}

export default FlipCard