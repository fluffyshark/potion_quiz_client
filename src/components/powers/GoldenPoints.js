import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { dectivate_power } from "../../redux/PowerReducer"
import flasks from "../../image_assets/FlaskImageExport"

let duration = 0

function GoldenPoints() {

    const dispatch = useDispatch()
    const potionsList = useSelector((state) => state.potions.value)
    const powersList = useSelector((state) => state.powers.value)

    function startPower() {

        if (potionsList[19].level === 1) {duration = powersList[19].duration_level_1}
        if (potionsList[19].level === 2) {duration = powersList[19].duration_level_2}
        if (potionsList[19].level === 3) {duration = powersList[19].duration_level_3}  
    }
    
    useEffect(() => {
        document.getElementById("fill_goldenPoints").style.width = `${100/duration*powersList[19].counter19}%`
        if (powersList[19].counter19 > duration) {
            dispatch(dectivate_power({power_name: "GOLDEN POINTS"}))
        }
    },[powersList[19].counter19])
       

    useEffect(() => {
        if (powersList[19].goldenPoints === "active") {startPower()} 
    })

    return (
        <div className="power_effect_container">
      <div id="fill_goldenPoints" className="power_fill"></div>
      <div className="power_fill_content">
          <img src={flasks[19]} alt="" className="power_flask" />
          GOLDEN POINTS
      </div>
      
  </div>
    )
}

export default GoldenPoints

