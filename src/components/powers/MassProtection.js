import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { dectivate_power } from "../../redux/PowerReducer"
import flasks from "../../image_assets/FlaskImageExport"



  function MassProtection() {

    const dispatch = useDispatch()
    const potionsList = useSelector((state) => state.potions.value)
    const powersList = useSelector((state) => state.powers.value)

    function setDuration() {
        let duration = 0

        if (potionsList[12].level === 1) {duration = powersList[12].duration_level_1}
        if (potionsList[12].level === 2) {duration = powersList[12].duration_level_2}
        if (potionsList[12].level === 3) {duration = powersList[12].duration_level_3}  

        return duration
    }
    
    useEffect(() => {
        document.getElementById("fill_protection").style.width = `${100/setDuration()*powersList[12].counter12}%`
        if (powersList[12].counter12 > setDuration()) {
            dispatch(dectivate_power({power_name: "FREEZE"}))
            dispatch(dectivate_power({power_name: "POINT POISON"}))
            dispatch(dectivate_power({power_name: "PROTECTION"}))
            dispatch(dectivate_power({power_name: "MASS PROTECTION"}))
        }
    },[powersList[12].counter12])
       
/*
    useEffect(() => {
        if (powersList[12].massProtection === "active") {startPower()} 
    })
*/

    return (
        <div className="power_effect_container">
      <div id="fill_protection" className="power_fill"></div>
      <div className="power_fill_content">
          <img src={flasks[12]} alt="" className="power_flask" />
          MASS PROTECTION
      </div>
      
  </div>
    )

  }


  export default MassProtection
  
