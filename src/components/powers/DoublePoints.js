import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { dectivate_power } from "../../redux/PowerReducer"
import flasks from "../../image_assets/FlaskImageExport"

let duration = 0

function DoublePoints() {

    const dispatch = useDispatch()
    const powersList = useSelector((state) => state.powers.value)
    const potionsList = useSelector((state) => state.potions.value)

    function startDoublePoints() {

        if (potionsList[1].level === 1) {duration = powersList[1].duration_level_1}
        if (potionsList[1].level === 2) {duration = powersList[1].duration_level_2}
        if (potionsList[1].level === 3) {duration = powersList[1].duration_level_3}     
    }
    

    useEffect(() => {
        document.getElementById("fill_doublePoints").style.width = `${100/duration*powersList[1].counter1}%`
        if (powersList[1].counter1 > duration) {
            dispatch(dectivate_power({power_name: "DOUBLE POINTS"}))
        }
    },[powersList[1].counter1])
       

    useEffect(() => {
        if (powersList[1].doublePoints === "active") {startDoublePoints()} 
    })
    
      


    return (
        <div className="power_effect_container">
            <div id="fill_doublePoints" className="power_fill"></div>
            <div className="power_fill_content">
                <img src={flasks[1]} alt="" className="power_flask" />
                DOUBLE POINTS
            </div>
            
        </div>
    )
}

export default DoublePoints