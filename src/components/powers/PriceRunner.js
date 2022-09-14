import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { dectivate_power } from "../../redux/PowerReducer"
import flasks from "../../image_assets/FlaskImageExport"

let duration = 0

function PriceRunner() {

    const dispatch = useDispatch()
    const powersList = useSelector((state) => state.powers.value)

    function startPower() {duration = 60}
    
    useEffect(() => {
        document.getElementById("fill_priceRunner").style.width = `${100/duration*powersList[11].counter11}%`
        if (powersList[11].counter11 > duration) {
            dispatch(dectivate_power({power_name: "PRICE RUNNER"}))
        }
    },[powersList[11].counter11])
       


    useEffect(() => {
        if (powersList[11].price === "active") {startPower()} 
    })

    return (
        <div className="power_effect_container">
      <div id="fill_priceRunner" className="power_fill"></div>
      <div className="power_fill_content">
          <img src={flasks[11]} alt="" className="power_flask" />
          PRICE RUNNER
      </div>
      
  </div>
    )
}

export default PriceRunner