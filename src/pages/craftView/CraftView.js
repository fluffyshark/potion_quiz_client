import React from 'react'
import "./craftView.css"
import Navbar from "../../components/navbar/Navbar"
import hidden_ingred from "../../image_assets/general/hidden_ingred.png"
import no_ingred from "../../image_assets/general/no_ingred.png"
import caldrun from "../../image_assets/general/caldrun.png"

function CraftView() {
  return (
    <div className='craftView'>
        <Navbar />
        <div className="craftView_middle">
          <div className="craftView_middle_container">
            <div className="craftView_middle_ingred_container">
            <div className="craftView_extra_space_top"></div>
              <img src={hidden_ingred} alt="" className="craftView_ingred" />
              <img src={hidden_ingred} alt="" className="craftView_ingred" />
              <img src={hidden_ingred} alt="" className="craftView_ingred" />
              <img src={hidden_ingred} alt="" className="craftView_ingred" />

              <img src={hidden_ingred} alt="" className="craftView_ingred" />
              <img src={hidden_ingred} alt="" className="craftView_ingred" />
              <img src={hidden_ingred} alt="" className="craftView_ingred" />
              <img src={hidden_ingred} alt="" className="craftView_ingred" />

              <img src={hidden_ingred} alt="" className="craftView_ingred" />
              <img src={hidden_ingred} alt="" className="craftView_ingred" />
              <img src={hidden_ingred} alt="" className="craftView_ingred" />
              <img src={hidden_ingred} alt="" className="craftView_ingred" />

              <img src={hidden_ingred} alt="" className="craftView_ingred" />
              <img src={hidden_ingred} alt="" className="craftView_ingred" />
              <img src={hidden_ingred} alt="" className="craftView_ingred" />
              <img src={hidden_ingred} alt="" className="craftView_ingred" />

              <img src={hidden_ingred} alt="" className="craftView_ingred" />
              <img src={hidden_ingred} alt="" className="craftView_ingred" />
              <img src={hidden_ingred} alt="" className="craftView_ingred" />
              <img src={hidden_ingred} alt="" className="craftView_ingred" />

              <img src={hidden_ingred} alt="" className="craftView_ingred" />
              <img src={hidden_ingred} alt="" className="craftView_ingred" />
              <img src={hidden_ingred} alt="" className="craftView_ingred" />
              <img src={hidden_ingred} alt="" className="craftView_ingred" />

              <img src={hidden_ingred} alt="" className="craftView_ingred" />
              <img src={hidden_ingred} alt="" className="craftView_ingred" />
              <img src={hidden_ingred} alt="" className="craftView_ingred" />
              <img src={hidden_ingred} alt="" className="craftView_ingred" />

              <img src={hidden_ingred} alt="" className="craftView_ingred" />
              <img src={hidden_ingred} alt="" className="craftView_ingred" />
              <img src={hidden_ingred} alt="" className="craftView_ingred" />
              <img src={hidden_ingred} alt="" className="craftView_ingred" />

              <img src={hidden_ingred} alt="" className="craftView_ingred" />
              <img src={hidden_ingred} alt="" className="craftView_ingred" />
              <img src={hidden_ingred} alt="" className="craftView_ingred" />
              <img src={hidden_ingred} alt="" className="craftView_ingred" />
              <div className="craftView_extra_space_bottom"></div>
            </div>
          </div>
        </div>
        <div className="craftView_footer">
        <div className="craftView_footer_container">
            <img src={no_ingred} alt="" className="recipe_ingredient" />
            <img src={no_ingred} alt="" className="recipe_ingredient" />
            <img src={caldrun} alt="" className="footer_cauldrun" />
            <img src={no_ingred} alt="" className="recipe_ingredient" />
            <img src={no_ingred} alt="" className="recipe_ingredient" />
          </div>
        </div>
    </div>
  )
}

export default CraftView