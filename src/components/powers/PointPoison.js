import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { dectivate_power } from "../../redux/PowerReducer"
import { reduce_coins_amount } from "../../redux/CoinsReducer"
import flasks from "../../image_assets/FlaskImageExport"

let duration = 0

function PointPoision() {

     
    const dispatch = useDispatch()
    const potionsList = useSelector((state) => state.potions.value)
    const powersList = useSelector((state) => state.powers.value)


    function startPower() {

        if (potionsList[6].level === 1) {duration = powersList[6].duration_level_1}
        if (potionsList[6].level === 2) {duration = powersList[6].duration_level_2}
        if (potionsList[6].level === 3) {duration = powersList[6].duration_level_3}  
    }
    
    useEffect(() => {
        document.getElementById("fill_poison").style.width = `${100/duration*powersList[6].counter6}%`
        dispatch(reduce_coins_amount(2))
        console.log("duration", duration)
        if (powersList[6].counter6 > duration) {
            dispatch(dectivate_power({power_name: "POINT POISON"}))
        }
    },[powersList[6].counter6])
       

    useEffect(() => {
        if (powersList[6].poison === "active") {startPower()} 
    })

    return (
        <div className="power_effect_container">
      <div id="fill_poison" className="power_fill"></div>
      <div className="power_fill_content">
          <img src={flasks[6]} alt="" className="power_flask" />
          POINTS POISON
      </div>
      
  </div>
    )


}

export default PointPoision

