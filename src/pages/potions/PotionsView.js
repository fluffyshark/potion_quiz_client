import React, { useEffect, useState } from 'react'
import "./potionsView.css"
import { useSelector, useDispatch } from "react-redux"
import { reduce_coins_amount } from "../../redux/CoinsReducer.js"
import { add_exp_amount } from "../../redux/LevelExpReducer"
import Navbar from "../../components/navbar/Navbar"
import progressbar_fill from "../../image_assets/general/progressbar_fill.png"
import card_back from "../../image_assets/general/card_back.png"
import blop from "../../sound_assets/blop.wav"
import nope from "../../sound_assets/click_01.wav"
import levelBtn from "../../image_assets/general/level_btn.png"
import coindrop from "../../sound_assets/coindrop.mp3"


function PotionsView() {

  var props = {
    focus: "potions",
  }

  const [recipe, setRecipe] = useState({ingred1: 0, ingred2: 0, ingred3: 0, ingred4: 0, flask: 0})
  const [playerLevel, setPlayerLevel] = useState(1)

  const dispatch = useDispatch()
  const potionsList = useSelector((state) => state.potions.value)
  const recipeList = useSelector((state) => state.recipe.value)
  const ingredientsList = useSelector((state) => state.ingredients.value)
  const coinbag = useSelector((state) => state.coins.value)
  const levelExp = useSelector((state) => state.levelExp.value)

  function playSound(sound) {
    if (sound === "blop") {new Audio(blop).play()}
    if (sound === "nope") {new Audio(nope).play()}
    if (sound === "coin") {new Audio(coindrop).play()}
  }
  

  const potionInteraction = (id) => {
    
    if (playerLevel === 4 && id > 15) {playSound("nope")}
    else if (playerLevel === 3 && id > 11) {playSound("nope")}
    else if (playerLevel === 2 && id > 7) {playSound("nope")}
    else if (playerLevel === 1 && id > 3) {playSound("nope")}
    else {
      setRecipe({ingred1: recipeList[id].ing1_id, ingred2: recipeList[id].ing2_id, ingred3: recipeList[id].ing3_id, ingred4: recipeList[id].ing4_id, flask: recipeList[id].potion_image})
      playSound("blop")
    }
    
  }


  const buyLevel = () => {
    dispatch(reduce_coins_amount(50))
    dispatch(add_exp_amount(1))
    playSound("coin")   
  }


  useEffect(() => {
    var exp = 1
    if (levelExp.currentLevel === 1) {exp = levelExp.totalExp / levelExp.level_2_requirement * 110}
    if (levelExp.currentLevel === 2) {exp = (levelExp.totalExp - 10) / levelExp.level_3_requirement * 196; setPlayerLevel(2)}
    if (levelExp.currentLevel === 3) {exp = (levelExp.totalExp - 20) / levelExp.level_4_requirement * 230; setPlayerLevel(3)}
    if (levelExp.currentLevel === 4) {exp = (levelExp.totalExp - 35) / levelExp.level_5_requirement * 330; setPlayerLevel(4)}
    if (levelExp.currentLevel === 5) {exp = 100; setPlayerLevel(5); document.getElementById("levelBtn").style.display = "none"}

    document.getElementById("progressBar").style.width = `${exp}%`

  })

  useEffect(() => {
    if (coinbag < 50) {document.getElementById("levelBtn").style.opacity = 0.5}
    if (coinbag > 49) {document.getElementById("levelBtn").style.opacity = 1}
  })
 
  console.log("levelEXP", levelExp)
 

  return (
    <div className='potionsView'>
        <Navbar focus={props}/>
        
        <div className="potionView_middle">
            <div className="potionView_middle_container">
              <div className="potionView_middle_level">
                <p className="potionView_middle_level_title">{levelExp.title}</p>
                <div className="potionView_middle_level_progressbar">
                  <div className="potionView_middle_level_progressbar_limiter"><img id="progressBar" src={progressbar_fill} alt="" className="progressbar_fill" /></div>
                </div>
                <img onClick={() => {buyLevel()}} src={levelBtn} alt="" id="levelBtn" className="potionView_middle_level_btn" />
              </div>
              <div className="potionView_middle_cards">

      
                {potionsList.map((potion, i) => {
                    if (potion.amount > 0) {
                        if (potion.level === 1) {
                          return (
                            <div key={i} className="cardBox">
                              <img onClick={() => potionInteraction(i)} src={potion.image_bronze} alt="" className="cards cards_clickable" /> 
                              <p className="cards_amount_text">{potion.amount}</p>
                            </div>
                          )
                        }
                        if (potion.level === 2) {
                          return (
                            <div key={i} className="cardBox">
                              <img onClick={() => potionInteraction(i)} src={potion.image_silver} alt="" className="cards cards_clickable" /> 
                              <p className="cards_amount_text">{potion.amount}</p>
                            </div>
                          )
                        }
                        if (potion.level === 3) {
                          return (
                            <div key={i} className="cardBox">
                              <img onClick={() => potionInteraction(i)} src={potion.image_gold} alt="" className="cards cards_clickable" /> 
                              <p className="cards_amount_text">{potion.amount}</p>
                            </div>
                          )
                        }


                      
                    } else if (potion.discovered === true) {
                      if (potion.level === 1) {
                        return (
                          <div key={i} className="cardBox">
                            <img onClick={() => potionInteraction(i)} src={potion.image_bronze} alt="" className="cards cards_no_amount cards_clickable" /> 
                            <p className="cards_amount_text">{potion.amount}</p>
                          </div>
                        )
                      }
                      if (potion.level === 2) {
                        return (
                          <div key={i} className="cardBox">
                            <img onClick={() => potionInteraction(i)} src={potion.image_silver} alt="" className="cards cards_no_amount cards_clickable" /> 
                            <p className="cards_amount_text">{potion.amount}</p>
                          </div>
                        )
                      }
                      if (potion.level === 3) {
                        return (
                          <div key={i} className="cardBox">
                            <img onClick={() => potionInteraction(i)} src={potion.image_gold} alt="" className="cards cards_no_amount cards_clickable" /> 
                            <p className="cards_amount_text">{potion.amount}</p>
                          </div>
                        )
                      }


                   
                      } else {   
                        if (playerLevel === 1 && i < 4) {
                            return (
                              <div key={i} className="cardBox">
                              <img onClick={() => potionInteraction(i)} src={card_back} alt="" className="cards cards_clickable" /> 
                              </div>
                            )
                          } else if (playerLevel === 2 && i < 8) { 
                            return (
                              <div key={i} className="cardBox">
                              <img onClick={() => potionInteraction(i)} src={card_back} alt="" className="cards cards_clickable" /> 
                              </div>
                            )
                          } else if (playerLevel === 3 && i < 12) { 
                            return (
                              <div key={i} className="cardBox">
                              <img onClick={() => potionInteraction(i)} src={card_back} alt="" className="cards cards_clickable" /> 
                              </div>
                            )
                          } else if (playerLevel === 4 && i < 16) { 
                            return (
                              <div key={i} className="cardBox">
                              <img onClick={() => potionInteraction(i)} src={card_back} alt="" className="cards cards_clickable" /> 
                              </div>
                            )
                          } else if (playerLevel === 5 && i < 21) { 
                            return (
                              <div key={i} className="cardBox">
                              <img onClick={() => potionInteraction(i)} src={card_back} alt="" className="cards cards_clickable" /> 
                              </div>
                            )
                          } else {
                            return (
                              <div key={i} className="cardBox">
                              <img onClick={() => potionInteraction(i)} src={card_back} alt="" className="cards cards_not_discovered cards_clickable" /> 
                              </div>
                            )

                        }
                        
                      }
                      
                    })
                }
                
               
                <div className="extra_space"></div>
              </div>      
            </div>
        </div>
        
        <div className="potionView_footer">
          
          <div className="potionView_footer_container">
            <img src={ingredientsList[recipe.ingred1].image_normal} alt="" className="card_ingredient" />
            <img src={ingredientsList[recipe.ingred2].image_normal} alt="" className="card_ingredient" />
            <img src={recipe.flask} alt="" className="chosen_bottle" />
            <img src={ingredientsList[recipe.ingred3].image_normal} alt="" className="card_ingredient" />
            <img src={ingredientsList[recipe.ingred4].image_normal} alt="" className="card_ingredient" />
          </div> 
          
          <div className="potionView_footer_actions">
                  <div className="potion_action_btns">USE</div>
                  <div className="potion_action_btns">SELL</div>
                  <div className="potion_action_btns">CRAFT</div>
                </div>
        </div>
    </div>
  )
}

export default PotionsView