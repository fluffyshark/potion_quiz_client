import React from 'react'
import "./potionsView.css"
import { useSelector } from "react-redux"
import Navbar from "../../components/navbar/Navbar"
import progressbar_fill from "../../image_assets/general/progressbar_fill.png"
import card_back from "../../image_assets/general/card_back.png"
import bottle_exp from "../../image_assets/potions/bottles/bottle_exp.png"
import ingred1 from "../../image_assets//herbs//normal/ingred1.png"
import ingred2 from "../../image_assets//herbs//normal/ingred2.png"
import ingred3 from "../../image_assets//herbs//normal/ingred3.png"
import ingred4 from "../../image_assets//herbs//normal/ingred4.png"

function PotionsView() {

  var props = {
    focus: "potions",
  }

  const potionsList = useSelector((state) => state.potions.value)


  return (
    <div className='potionsView'>
        <Navbar focus={props}/>
        
        <div className="potionView_middle">
            <div className="potionView_middle_container">
              <div className="potionView_middle_level">
                <p className="potionView_middle_level_title">APPRENTICE</p>
                <div className="potionView_middle_level_progressbar"><img src={progressbar_fill} alt="" className="progressbar_fill" /></div>
                <p className="potionView_middle_level_status">LEVEL 1 - UNLOCKED</p>
              </div>
              <div className="potionView_middle_cards">

              
                {potionsList.map((potion, i) => {
                    if (potion.amount > 0) {
                        if (potion.level === 1) {
                          return (
                            <div key={i} className="cardBox">
                              <img  src={potion.image_bronze} alt="" className="cards cards_clickable" /> 
                              <p className="cards_amount_text">{potion.amount}</p>
                            </div>
                          )
                        }
                        if (potion.level === 2) {
                          return (
                            <div key={i} className="cardBox">
                              <img  src={potion.image_silver} alt="" className="cards cards_clickable" /> 
                              <p className="cards_amount_text">{potion.amount}</p>
                            </div>
                          )
                        }
                        if (potion.level === 3) {
                          return (
                            <div key={i} className="cardBox">
                              <img  src={potion.image_gold} alt="" className="cards cards_clickable" /> 
                              <p className="cards_amount_text">{potion.amount}</p>
                            </div>
                          )
                        }


                      
                    } else if (potion.discovered === true) {
                      if (potion.level === 1) {
                        return (
                          <div key={i} className="cardBox">
                            <img  src={potion.image_bronze} alt="" className="cards cards_no_amount" /> 
                            <p className="cards_amount_text">{potion.amount}</p>
                          </div>
                        )
                      }
                      if (potion.level === 2) {
                        return (
                          <div key={i} className="cardBox">
                            <img  src={potion.image_silver} alt="" className="cards cards_no_amount" /> 
                            <p className="cards_amount_text">{potion.amount}</p>
                          </div>
                        )
                      }
                      if (potion.level === 3) {
                        return (
                          <div key={i} className="cardBox">
                            <img  src={potion.image_gold} alt="" className="cards cards_no_amount" /> 
                            <p className="cards_amount_text">{potion.amount}</p>
                          </div>
                        )
                      }


                    } else {
                      return (
                        <div key={i} className="cardBox">
                        <img src={card_back} alt="" className="cards" /> 
                        </div>
                      )
                    }
                    })
                }
                
               
                <div className="extra_space"></div>
              </div>      
            </div>
        </div>
        
        <div className="potionView_footer">
          <div className="potionView_footer_container">
            <img src={ingred1} alt="" className="card_ingredient" />
            <img src={ingred2} alt="" className="card_ingredient" />
            <img src={bottle_exp} alt="" className="chosen_bottle" />
            <img src={ingred3} alt="" className="card_ingredient" />
            <img src={ingred4} alt="" className="card_ingredient" />
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