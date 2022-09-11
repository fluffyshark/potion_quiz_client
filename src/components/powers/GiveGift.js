import React, { useEffect, useState } from 'react'
import exitBtn from "../../image_assets/general/exit_btn.png"
import "./powers.css"
import { useSelector, useDispatch } from "react-redux"
import { dectivate_power } from "../../redux/PowerReducer"
import { giveGift_ingredients } from "../../redux/IngredientReducer"


function ReceiveGiveGift() {

  const [giftArray, setGiftArray] = useState([])

  const dispatch = useDispatch()
  const powersList = useSelector((state) => state.powers.value)
  const ingredientsList = useSelector((state) => state.ingredients.value)


  function startGift() {
    let amount = 0
    let colletArray = []

    if (powersList[7].attackLevel7 === 1) {amount = powersList[7].gift_amount_1}
    if (powersList[7].attackLevel7 === 2) {amount = powersList[7].gift_amount_2}
    if (powersList[7].attackLevel7 === 3) {amount = powersList[7].gift_amount_3}

    /// Creating, filling, shuffling an array with the id of all ingredients  
    var ingred = [...Array(180).keys()].sort(() => Math.random() - 0.5);
    
    /// Assigning as many ingredient's id, as the gifted amount level allows 
    for (let i = 0; i < amount; i++) {colletArray.push(ingred[i])}

    /// Assign ingredients' id to giftArray, that will be mapped out
    setGiftArray(colletArray)

    /// Add the ingredients to user's collection via ingredientReducer
    dispatch(giveGift_ingredients({colletArray}))

    /// Show Give Gift popup layout
    document.getElementById("give_gift").style.display = "flex"

  } // End of startGift()

  
  useEffect(() => {if (powersList[7].gift === "active") {startGift()}}, [powersList[7].gift])

  function exitGiftView() {
    document.getElementById("give_gift").style.display = "none"
    dispatch(dectivate_power({power_name: "GIVE GIFT"}))
  }

  return (
    <div className="give_gift_container" id="give_gift">
      <div className="give_gift_scroll">
        <div className="give_gift_scroll_top"><img onClick={() => {exitGiftView()}} src={exitBtn} alt="" /></div>
        <div className="give_gift_scroll_text">
            <p className="give_gift_scroll_text_title">YOU GOT A GIFT</p>
            <p className="give_gift_scroll_text_sender">Sent by a true friend</p>
        </div>
        <div className="give_gift_scroll_wrap">
          {
            giftArray.map((herb, i) => {
              return <img key={i} className='give_gift_scroll_wrap_herbs' src={ingredientsList[giftArray[i]].image_normal} alt="" />
            })
          }
        </div>
      </div>
    </div>
  )
}

export default ReceiveGiveGift













