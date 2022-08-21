import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { dectivate_power } from "../../redux/PowerReducer"
import flasks from "../../image_assets/FlaskImageExport"

let duration = 0

  function Protection() {

    const dispatch = useDispatch()
    const potionsList = useSelector((state) => state.potions.value)
    const powersList = useSelector((state) => state.powers.value)

    function startPower() {

        if (potionsList[3].level === 1) {duration = powersList[3].duration_level_1}
        if (potionsList[3].level === 2) {duration = powersList[3].duration_level_2}
        if (potionsList[3].level === 3) {duration = powersList[3].duration_level_3}  
    }
    
    useEffect(() => {
        document.getElementById("fill_protection").style.width = `${100/duration*powersList[3].counter3}%`
        if (powersList[3].counter3 > duration) {
            dispatch(dectivate_power({power_name: "FREEZE"}))
            dispatch(dectivate_power({power_name: "POINT POISON"}))
            dispatch(dectivate_power({power_name: "PROTECTION"}))
        }
    },[powersList[3].counter3])
       

    useEffect(() => {
        if (powersList[3].protection === "active") {startPower()} 
    })

    return (
        <div className="power_effect_container">
      <div id="fill_protection" className="power_fill"></div>
      <div className="power_fill_content">
          <img src={flasks[3]} alt="" className="power_flask" />
          PROTECTION
      </div>
      
  </div>
    )

  }


  export default Protection
  
