import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { dectivate_power } from "../../redux/PowerReducer"
import flasks from "../../image_assets/FlaskImageExport"

let duration = 0

function SpeedUp() {
  
    const dispatch = useDispatch()
    const potionsList = useSelector((state) => state.potions.value)
    const powersList = useSelector((state) => state.powers.value)

    function startPower() {

        if (potionsList[2].level === 1) {duration = powersList[2].duration_level_1}
        if (potionsList[2].level === 2) {duration = powersList[2].duration_level_2}
        if (potionsList[2].level === 3) {duration = powersList[2].duration_level_3}  
    }
    
    useEffect(() => {
        document.getElementById("fill_speedUp").style.width = `${100/duration*powersList[2].counter2}%`
        if (powersList[2].counter2 > duration) {
            dispatch(dectivate_power({power_name: "SPEED UP"}))
        }
    },[powersList[2].counter2])
       

    useEffect(() => {
        if (powersList[2].speedUp === "active") {startPower()} 
    })
  
  
    return (
      <div className="power_effect_container">
      <div id="fill_speedUp" className="power_fill"></div>
      <div className="power_fill_content">
          <img src={flasks[2]} alt="" className="power_flask" />
          SPEED UP
      </div>
      
  </div>
  )

}

export default SpeedUp