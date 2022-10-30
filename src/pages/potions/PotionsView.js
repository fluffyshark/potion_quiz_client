import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar"
import LevelProgressBar from './LevelProgressBar';
import {Reveal} from "../../components/powers/Reveal"
import "./potionsView.css"
import "./responsive/responsive.css"
import "./responsive/tablet.css"
import { motion } from "framer-motion";
import Icer from "../../components/powers/Icer"
import MassFreeze from "../../components/powers/MassFreeze.js"
// Redux
import { useSelector, useDispatch } from "react-redux"
import { activate_power } from "../../redux/PowerReducer"
import { reduce_potion } from '../../redux/PotionReducer';
import { golden_ingredient } from "../../redux/PotionRecipeReducer"
// Images & Sounds
import card_back from "../../image_assets/general/card_back1.webp"
import PotionSelectPlayers from './PotionSelectPlayers';
import ReceiveGiveGift from '../../components/powers/GiveGift';
import PotionInfo, {DisplayInfo} from './PotionInfo';
import {playSound} from "../../components/playSound/playSound"



function PotionsView(props_socket) {

  var props = {
    focus: "potions",
  }

  const [recipe, setRecipe] = useState({id: 0, ingred1: 0, ingred2: 0, ingred3: 0, ingred4: 0, flask: 0, amount1: 0, amount2: 0, amount3: 0, amount4: 0})
  const [playerLevel, setPlayerLevel] = useState(1)
  const [selectPlayer, setSelectPlayer] = useState(["hidden", "hidden", "hidden"])

  let navigate = useNavigate()
  const dispatch = useDispatch()
  const potionsList = useSelector((state) => state.potions.value)
  const recipeList = useSelector((state) => state.recipe.value)
  const ingredientsList = useSelector((state) => state.ingredients.value)
  const levelExp = useSelector((state) => state.levelExp.value)
  const powersList = useSelector((state) => state.powers.value)


  useEffect(() => {
    setPlayerLevel(levelExp.currentLevel)
  }, [levelExp.currentLevel])


  // Clicking on cards
  const potionInteraction = (id) => {

    // If potion has no amount
    if (potionsList[id].amount > 0) {
      document.getElementById("potionView_actions").style.display = "inherit"
    } else {
      document.getElementById("potionView_actions").style.display = "none"
    }
    
    // Show or not, if the level is high enough
    if (playerLevel === 4 && id > 15) {playSound("nope")}
    else if (playerLevel === 3 && id > 11) {playSound("nope")}
    else if (playerLevel === 2 && id > 7) {playSound("nope")}
    else if (playerLevel === 1 && id > 3) {playSound("nope")}
    else {
      // Display the recipe at the bottom of the page
      setRecipe({
        id: id, 
        ingred1: recipeList[id].ing1_id, 
        ingred2: recipeList[id].ing2_id, 
        ingred3: recipeList[id].ing3_id, ingred4: 
        recipeList[id].ing4_id, 
        flask: recipeList[id].potion_image, 
        amount1: recipeList[id].ing1_amount, 
        amount2: recipeList[id].ing2_amount, amount3: 
        recipeList[id].ing3_amount, 
        amount4: recipeList[id].ing4_amount})
      
        playSound("blop")
        console.log(recipe)
    }
  }

  
  // Clicking on "USE"
  const activatePotion = () => {
    switch (recipe.id) {
      case 0: setSelectPlayer(["blessing", "GIFT EXP"]); break;
      case 1: dispatch(activate_power({power_name: "DOUBLE POINTS"})); playSound("blessing"); break;
      case 2: dispatch(activate_power({power_name: "SPEED UP"})); playSound("blessing"); break;
      case 3: dispatch(activate_power({power_name: "PROTECTION"})); playSound("blessing"); break;
      case 4: setSelectPlayer(["curse", "FREEZE"]); break;
      case 5: dispatch(activate_power({power_name: "FIFTY FIFTY"})); break;
      case 6: setSelectPlayer(["curse", "POINT POISON"]); playSound("curse"); break;
      case 7: setSelectPlayer(["blessing", "GIVE GIFT"]); break;
      case 8: dispatch(activate_power({power_name: "TRANSMUTATION"})); break;
      case 9: dispatch(activate_power({power_name: "TRIPPLE POINTS"})); playSound("blessing"); break;
      case 10: dispatch(activate_power({power_name: "JUKEBOX"})); playSound("blessing"); break;
      case 11: dispatch(activate_power({power_name: "PRICE RUNNER"})); playSound("blessing"); break;
      case 13: playSound("blessing"); 
                const revealIngrd = Reveal(recipeList, potionsList); 
                dispatch(golden_ingredient({id: revealIngrd[0].id, ingredientNr: revealIngrd[0].golden}))
                dispatch(golden_ingredient({id: revealIngrd[1].id, ingredientNr: revealIngrd[1].golden}))
                dispatch(golden_ingredient({id: revealIngrd[2].id, ingredientNr: revealIngrd[2].golden}))
      break;
      case 14: setSelectPlayer(["curse", "BLOCKER"]); break;
      case 15: dispatch(activate_power({power_name: "DOUBLE BATCH"})); playSound("blessing"); break;
      case 16: dispatch(activate_power({power_name: "EPIC CHALLENGE"})); playSound("blessing"); break;
      case 17: dispatch(activate_power({power_name: "STREAK BONUS"})); playSound("blessing"); break;
      case 18: setSelectPlayer(["curse", "MASS FREEZE"]); break;
      case 19: dispatch(activate_power({power_name: "GOLDEN POINTS"})); playSound("blessing"); break;

      default:
        break;

    }

    // Removes one potion from user
    dispatch(reduce_potion({id: recipe.id}))

    // If potion used is on self, then navigate to "QuizView"
    if (recipe.id === 1 || recipe.id === 2 || recipe.id === 3 || recipe.id === 9 || recipe.id === 10 || recipe.id === 11 || recipe.id === 15 || recipe.id === 16 || recipe.id === 18 || recipe.id === 19) {navigate('/quiz')}

  } // End of activatePotion()



  useEffect(() => {
    // Show potion ingredient are hidden if potion card not selected
    window.setTimeout(function(){
      if (recipe.ingred1 === 0) {document.getElementById("potionView_footer_display").style.display = "none"} else {document.getElementById("potionView_footer_display").style.display = "flex"}  
    }, 500);
  }, [recipe])
  

  const hideSelectPlayers = () => {
    setSelectPlayer(["hidden", "hidden", "hidden"])
  }






  return (
    <div className='potionsView'>

        <PotionInfo potionID={recipe.id} />

        {powersList[4].freeze === "active" && powersList[3].protection !== "active" && <Icer />}
        {powersList[18].mass_freeze === "active" && powersList[3].protection !== "active" && <MassFreeze />}
        {powersList[7].gift === "active" && <ReceiveGiveGift />}

        {selectPlayer[0] === "blessing" && <PotionSelectPlayers socket={props_socket} selectPlayer={selectPlayer} hideSelectPlayers={hideSelectPlayers} />}
        {selectPlayer[0] === "curse" && <PotionSelectPlayers socket={props_socket} selectPlayer={selectPlayer}  hideSelectPlayers={hideSelectPlayers} />}
        
        <Navbar focus={props}/>
        
        <div className="potionView_middle">
            <div className="potionView_middle_container">
              
              <LevelProgressBar />

              <div className="potionView_middle_cards">

      
                {potionsList.map((potion, i) => {
                    if (potion.amount > 0) {
                        if (potion.level === 1) {
                          return (
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 200, damping: 40 }} key={i} className="cardBox">
                              <img onClick={() => potionInteraction(i)} src={potion.image_bronze} alt="" className="cards cards_clickable" /> 
                              <p className="cards_amount_text">{potion.amount}</p>
                            </motion.div>
                          )
                        }
                        if (potion.level === 2) {
                          return (
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 200, damping: 40 }} key={i} className="cardBox">
                              <img onClick={() => potionInteraction(i)} src={potion.image_silver} alt="" className="cards cards_clickable" /> 
                              <p className="cards_amount_text">{potion.amount}</p>
                            </motion.div>
                          )
                        }
                        if (potion.level === 3) {
                          return (
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 200, damping: 40 }} key={i} className="cardBox">
                              <img onClick={() => potionInteraction(i)} src={potion.image_gold} alt="" className="cards cards_clickable" /> 
                              <p className="cards_amount_text">{potion.amount}</p>
                            </motion.div>
                          )
                        }


                      
                    } else if (potion.discovered === true) {
                      if (potion.level === 1) {
                        return (
                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 200, damping: 40 }} key={i} className="cardBox">
                            <img onClick={() => potionInteraction(i)} src={potion.image_bronze} alt="" className="cards cards_no_amount cards_clickable" /> 
                            <p className="cards_amount_text">{potion.amount}</p>
                          </motion.div>
                        )
                      }
                      if (potion.level === 2) {
                        return (
                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 200, damping: 40 }} key={i} className="cardBox">
                            <img onClick={() => potionInteraction(i)} src={potion.image_silver} alt="" className="cards cards_no_amount cards_clickable" /> 
                            <p className="cards_amount_text">{potion.amount}</p>
                          </motion.div>
                        )
                      }
                      if (potion.level === 3) {
                        return (
                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 200, damping: 40 }} key={i} className="cardBox">
                            <img onClick={() => potionInteraction(i)} src={potion.image_gold} alt="" className="cards cards_no_amount cards_clickable" /> 
                            <p className="cards_amount_text">{potion.amount}</p>
                          </motion.div>
                        )
                      }


                   
                      } else {   
                        if (playerLevel === 1 && i < 4) {
                            return (
                              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 200, damping: 40 }} key={i} className="cardBox">
                              <img onClick={() => potionInteraction(i)} src={card_back} alt="" className="cards cards_clickable" /> 
                              </motion.div>
                            )
                          } else if (playerLevel === 2 && i < 8) { 
                            return (
                              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 200, damping: 40 }} key={i} className="cardBox">
                              <img onClick={() => potionInteraction(i)} src={card_back} alt="" className="cards cards_clickable" /> 
                              </motion.div>
                            )
                          } else if (playerLevel === 3 && i < 12) { 
                            return (
                              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 200, damping: 40 }} key={i} className="cardBox">
                              <img onClick={() => potionInteraction(i)} src={card_back} alt="" className="cards cards_clickable" /> 
                              </motion.div>
                            )
                          } else if (playerLevel === 4 && i < 16) { 
                            return (
                              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 200, damping: 40 }} key={i} className="cardBox">
                              <img onClick={() => potionInteraction(i)} src={card_back} alt="" className="cards cards_clickable" /> 
                              </motion.div>
                            )
                          } else if (playerLevel === 5 && i < 21) { 
                            return (
                              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 200, damping: 40 }} key={i} className="cardBox">
                              <img onClick={() => potionInteraction(i)} src={card_back} alt="" className="cards cards_clickable" /> 
                              </motion.div>
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
       
          <div className="potionView_footer_container" id="potionView_footer_display">
            {recipeList[recipe.id].ing1_golden ? (<div className='bottom_recipe_container'><img src={ingredientsList[recipe.ingred1].image_golden} alt="" className="card_ingredient" /><p className="footer_ingred_amount">{recipe.amount1}</p></div>) : (<><img src={ingredientsList[recipe.ingred1].image_normal} alt="" className="card_ingredient" /></>)}
            {recipeList[recipe.id].ing2_golden ? (<div className='bottom_recipe_container'><img src={ingredientsList[recipe.ingred2].image_golden} alt="" className="card_ingredient" /><p className="footer_ingred_amount">{recipe.amount2}</p></div>) : (<><img src={ingredientsList[recipe.ingred2].image_normal} alt="" className="card_ingredient" /></>)}
            <img src={recipe.flask} alt="" className="chosen_bottle" />
            {recipeList[recipe.id].ing3_golden ? (<div className='bottom_recipe_container'><img src={ingredientsList[recipe.ingred3].image_golden} alt="" className="card_ingredient" /><p className="footer_ingred_amount">{recipe.amount3}</p></div>) : (<><img src={ingredientsList[recipe.ingred3].image_normal} alt="" className="card_ingredient" /></>)}
            {recipeList[recipe.id].ing4_golden ? (<div className='bottom_recipe_container'><img src={ingredientsList[recipe.ingred4].image_golden} alt="" className="card_ingredient" /><p className="footer_ingred_amount">{recipe.amount4}</p></div>) : (<><img src={ingredientsList[recipe.ingred4].image_normal} alt="" className="card_ingredient" /></>)}          
          </div> 
          
          <div id="potionView_actions" className="potionView_footer_actions">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 17 }} onClick={() => activatePotion()} className="potion_action_btns"><p>USE</p></motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 17 }} onClick={() => DisplayInfo()} className="potion_action_btns"><p>INFO</p></motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 17 }} className="potion_action_btns"><p>SELL</p></motion.div>
          </div>
        </div>
    </div>
  )
}

export default PotionsView


