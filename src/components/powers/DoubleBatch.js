import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { dectivate_power } from "../../redux/PowerReducer"
import flasks from "../../image_assets/FlaskImageExport"

let duration = 0

function DoubleBatch() {

    const dispatch = useDispatch()
    const potionsList = useSelector((state) => state.potions.value)
    const powersList = useSelector((state) => state.powers.value)

    function startPower() {

        if (potionsList[15].level === 1) {duration = powersList[15].duration_level_1}
        if (potionsList[15].level === 2) {duration = powersList[15].duration_level_2}
        if (potionsList[15].level === 3) {duration = powersList[15].duration_level_3}  
    }
    
    useEffect(() => {
        document.getElementById("fill_doubleBatch").style.width = `${100/duration*powersList[15].counter15}%`
        if (powersList[15].counter15 > duration) {
            dispatch(dectivate_power({power_name: "DOUBLE BATCH"}))
        }
    },[powersList[15].counter15])
       

    useEffect(() => {
        if (powersList[15].batch === "active") {startPower()} 
    })

    return (
        <div className="power_effect_container">
      <div id="fill_doubleBatch" className="power_fill"></div>
      <div className="power_fill_content">
          <img src={flasks[15]} alt="" className="power_flask" />
          DOUBLE BATCH
      </div>
      
  </div>
    )
}

export default DoubleBatch