import React from 'react'
import "./craftView.css"
import CraftPotion from "./CraftPotion.js"
import { motion } from "framer-motion";
import Icer from "../../components/powers/Icer"
import MassFreeze from "../../components/powers/MassFreeze.js"
import { useSelector, useDispatch } from "react-redux"
import Navbar from "../../components/navbar/Navbar"
import hidden_ingred from "../../image_assets/general/hidden_ingred.png"
import no_ingred from "../../image_assets/general/no_ingred.png"
import caldrun from "../../image_assets/general/caldrun.png"
import {select_ingredients, deSelect_ingredients} from "../../redux/CraftReducer"
import { increase_ingredients, decrease_ingredients } from "../../redux/IngredientReducer.js"
import ingdrop1 from "../../sound_assets/Ingdrop1.wav"
import ingdrop2 from "../../sound_assets/Ingdrop2.wav"
import ingdrop3 from "../../sound_assets/Ingdrop3.wav"
import ingdrop4 from "../../sound_assets/Ingdrop4.wav"
import ingdrop5 from "../../sound_assets/Ingdrop5.wav"
import craftPotionSound from "../../sound_assets/CraftPotion.wav"
import ReceiveGiveGift from '../../components/powers/GiveGift';

var craftingSlots = [200,200,200,200]



function CraftView(props_socket) {

  var props = {
    focus: "craft",
  }
  let socket = props_socket.socket

  const dispatch = useDispatch()
  const ingredientsList = useSelector((state) => state.ingredients.value)
  const craftList = useSelector((state) => state.crafting.value) 
  const powersList = useSelector((state) => state.powers.value)

  function playSound(sound) {
    if (sound === "drop01") {new Audio(ingdrop1).play()}
    if (sound === "drop02") {new Audio(ingdrop2).play()}
    if (sound === "drop03") {new Audio(ingdrop3).play()}
    if (sound === "drop04") {new Audio(ingdrop4).play()}
    if (sound === "drop05") {new Audio(ingdrop5).play()}
    if (sound === "craftPotionSound") {new Audio(craftPotionSound).play()}
  }

  const dropIngredSound = () => {
    switch (Math.floor(Math.random() * 5)) {
      case 0: playSound("drop01"); break;
      case 1: playSound("drop02"); break;
      case 2: playSound("drop03"); break;
      case 3: playSound("drop04"); break;
      case 4: playSound("drop05"); break;
      default: break;
    }
  }

  const selectIngredient = (addRemove, nr, selected_id) => {
   
  if (addRemove === "add") {
      if (craftList[0].selected_id === 200 || craftingSlots[0] === selected_id ) {
        if (craftingSlots[1] !== selected_id && craftingSlots[2] !== selected_id && craftingSlots[3] !== selected_id) {
          if (ingredientsList[selected_id].amount > 0) {
            dispatch(select_ingredients({id:0, selected_id: selected_id, total:ingredientsList[selected_id].amount, image: ingredientsList[selected_id].image_normal}))
            document.getElementById("craftAmount1").style.display = "inherit"
            dispatch(decrease_ingredients({id:selected_id}))
            craftingSlots[0] = selected_id 
            dropIngredSound()
          } 
        }
      }
      else if (craftList[1].selected_id === 200 || craftingSlots[1] === selected_id ) { 
        if (craftingSlots[0] !== selected_id && craftingSlots[2] !== selected_id && craftingSlots[3] !== selected_id) {
          if (ingredientsList[selected_id].amount > 0) {
            dispatch(select_ingredients({id:1, selected_id: selected_id, total:ingredientsList[selected_id].amount, image: ingredientsList[selected_id].image_normal}))  
            document.getElementById("craftAmount2").style.display = "inherit"
            dispatch(decrease_ingredients({id:selected_id}))
            craftingSlots[1] = selected_id 
            dropIngredSound()
          }
        }   
      }
      else if (craftList[2].selected_id === 200 || craftingSlots[2] === selected_id) {
        if (craftingSlots[0] !== selected_id && craftingSlots[1] !== selected_id && craftingSlots[3] !== selected_id) {
          if (ingredientsList[selected_id].amount > 0) {
            dispatch(select_ingredients({id:2, selected_id: selected_id, total:ingredientsList[selected_id].amount, image: ingredientsList[selected_id].image_normal})); 
            document.getElementById("craftAmount3").style.display = "inherit"
            dispatch(decrease_ingredients({id:selected_id}))
            craftingSlots[2] = selected_id
            dropIngredSound() 
          }
        }
      }
      else if (craftList[3].selected_id === 200 || craftingSlots[3] === selected_id) {
        if (craftingSlots[0] !== selected_id && craftingSlots[1] !== selected_id && craftingSlots[2] !== selected_id) {
          if (ingredientsList[selected_id].amount > 0) {
            dispatch(select_ingredients({id:3, selected_id: selected_id, total:ingredientsList[selected_id].amount, image: ingredientsList[selected_id].image_normal})); 
            document.getElementById("craftAmount4").style.display = "inherit"
            dispatch(decrease_ingredients({id:selected_id}))
            craftingSlots[3] = selected_id 
            dropIngredSound()
          }
        }
      }
 
      if (!craftingSlots.includes(200)) {
        document.getElementById("caldrun").style.opacity = 1;
        document.getElementById("caldrun").style.pointerEvents = "inherit"
    } 

      
      

    } // End of if-statement
  
    
  
  if (addRemove === "remove") {
      if (nr === 0 && craftList[0].selected_id !== 200) {
        dispatch(increase_ingredients({id:craftList[0].selected_id}))
        dispatch(deSelect_ingredients({id:0, selected_id: 200, image: no_ingred}))
      }
      if (craftList[0].amount < 1) {
        craftingSlots[0] = 200; document.getElementById("craftAmount1").style.display = "none"
        document.getElementById("caldrun").style.opacity = 0.5
      }
      if (nr === 1 && craftList[1].selected_id !== 200) {
        dispatch(increase_ingredients({id:craftList[1].selected_id}))
        dispatch(deSelect_ingredients({id:1, selected_id: 200, image: no_ingred}))
      }
      if (craftList[1].amount < 1) {
        craftingSlots[1] = 200; document.getElementById("craftAmount2").style.display = "none"
        document.getElementById("caldrun").style.opacity = 0.5
      }
      if (nr === 2 && craftList[2].selected_id !== 200) {
        dispatch(increase_ingredients({id:craftList[2].selected_id}))
        dispatch(deSelect_ingredients({id:2, selected_id: 200, image: no_ingred}))   
      }
      if (craftList[2].amount < 1) {
        craftingSlots[2] = 200; document.getElementById("craftAmount3").style.display = "none"
        document.getElementById("caldrun").style.opacity = 0.5
      }
      if (nr === 3 && craftList[3].selected_id !== 200) {
        dispatch(increase_ingredients({id:craftList[3].selected_id}))
        dispatch(deSelect_ingredients({id:3, selected_id: 200, image: no_ingred}))  
      }
      if (craftList[3].amount === 0) {
        craftingSlots[3] = 200; document.getElementById("craftAmount4").style.display = "none"
        document.getElementById("caldrun").style.opacity = 0.5
      }
      
    } 
    
  } // End of selectIngredient




  const craftPotion = () => {
    
    document.getElementById("craftAmount1").style.display = "none"
    document.getElementById("craftAmount2").style.display = "none"
    document.getElementById("craftAmount3").style.display = "none"
    document.getElementById("craftAmount4").style.display = "none"

    craftingSlots[0] = 200
    craftingSlots[1] = 200
    craftingSlots[2] = 200
    craftingSlots[3] = 200
   
    document.getElementById("craftPotion").style.display = "inherit"

    playSound("craftPotionSound")

  } // End of craftPotion

 

  return (
    <div className='craftView'>

      {powersList[4].freeze === "active" && powersList[3].protection !== "active" && <Icer />}
      {powersList[18].mass_freeze === "active" && powersList[3].protection !== "active" && <MassFreeze />}
      {powersList[7].gift === "active" && <ReceiveGiveGift />}

      <Navbar focus={props}/>

      <div className="craftView_middle">
        <CraftPotion socket={socket}/>
          <div className="craftView_middle_container">
            <div className="craftView_middle_ingred_container">
            <div className="craftView_extra_space_top"></div>

            
                {ingredientsList.map((ingredient, i) => {
                   if (ingredient.amount > 0) {
                     return (
                      <div key={i} onClick={() => selectIngredient("add", 200, ingredient.id)} className="craftView_ingredBox">
                        <motion.img whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 200, damping: 40 }} src={ingredient.image_normal} alt="" className="craftView_ingred" /> 
                        <p className="craftView_ingred_amount">{ingredient.amount}</p>
                      </div>
                     )
                   } else if (ingredient.discovered === false) {
                     return (
                      <div key={i} className="craftView_ingredBox">
                      <img src={hidden_ingred} alt="" className="craftView_ingred" /> 
                      </div>
                     )
                   } else {
                    return (
                      <div key={i} className="craftView_ingredBox">
                      <img src={ingredient.image_normal} alt="" className="craftView_ingred" style={{opacity:0.5}} /> 
                      </div>
                     )
                   }
                  })
                }
          
            
              
              <div className="craftView_extra_space_bottom"></div>
            </div>
          </div>
        </div>

        <div className="craftView_footer">
          <div className="craftView_footer_container">
            <div className="craftView_footer_craftholder">
              <img onClick={() => selectIngredient("remove", 0, 200)}  id="craftImg1" src={craftList[0].image} alt="" className="recipe_ingredient" />
              <p id="craftAmount1" className="selected_ingredients_amount">{craftList[0].amount}</p>
            </div>
            <div className="craftView_footer_craftholder">
              <img onClick={() => selectIngredient("remove", 1, 200)} id="craftImg2" src={craftList[1].image} alt="" className="recipe_ingredient" />
              <p id="craftAmount2" className="selected_ingredients_amount">{craftList[1].amount}</p>
            </div>

            <img onClick={() => craftPotion()} id="caldrun" src={caldrun} alt="" className="footer_cauldrun" />

            <div className="craftView_footer_craftholder">
              <img onClick={() => selectIngredient("remove", 2, 200)} id="craftImg3" src={craftList[2].image} alt="" className="recipe_ingredient" />
              <p id="craftAmount3" className="selected_ingredients_amount">{craftList[2].amount}</p>
            </div>
            <div className="craftView_footer_craftholder">
              <img onClick={() => selectIngredient("remove", 3, 200)} id="craftImg4" src={craftList[3].image} alt="" className="recipe_ingredient" />
              <p id="craftAmount4" className="selected_ingredients_amount">{craftList[3].amount}</p>
            </div>
              
          </div>
        </div>
        
    </div>
  )
}

export default CraftView