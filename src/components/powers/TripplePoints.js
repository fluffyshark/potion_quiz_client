import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { dectivate_power } from "../../redux/PowerReducer"
import flasks from "../../image_assets/FlaskImageExport"

let duration = 0

function TripplePoints() {

    const dispatch = useDispatch()
    const potionsList = useSelector((state) => state.potions.value)
    const powersList = useSelector((state) => state.powers.value)

    function startPower() {

        if (potionsList[9].level === 1) {duration = powersList[9].duration_level_1}
        if (potionsList[9].level === 2) {duration = powersList[9].duration_level_2}
        if (potionsList[9].level === 3) {duration = powersList[9].duration_level_3}  
    }
    
    useEffect(() => {
        document.getElementById("fill_tripplePoints").style.width = `${100/duration*powersList[9].counter9}%`
        if (powersList[9].counter9 > duration) {
            dispatch(dectivate_power({power_name: "TRIPPLE POINTS"}))
        }
    },[powersList[9].counter9])
       

    useEffect(() => {
        if (powersList[9].tripplePoints === "active") {startPower()} 
    })

    return (
        <div className="power_effect_container">
      <div id="fill_tripplePoints" className="power_fill"></div>
      <div className="power_fill_content">
          <img src={flasks[9]} alt="" className="power_flask" />
          TRIPPLE POINTS
      </div>
      
  </div>
    )
}

export default TripplePoints

