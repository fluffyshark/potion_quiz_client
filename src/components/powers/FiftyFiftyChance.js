import React, { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { dectivate_power } from "../../redux/PowerReducer"
import flasks from "../../image_assets/FlaskImageExport"

let duration = 0

// ALSO KNOW AS EASY MODE
function FiftyFiftyChance() {

    const dispatch = useDispatch()
    const powersList = useSelector((state) => state.powers.value)
    const potionsList = useSelector((state) => state.potions.value)

    function startFiftyFifty() {

        if (potionsList[5].level === 1) {duration = powersList[5].duration_level_1}
        if (potionsList[5].level === 2) {duration = powersList[5].duration_level_2}
        if (potionsList[5].level === 3) {duration = powersList[5].duration_level_3}     
    }
    
    // CHANGE TO USES INSTEAD OF TIME
    useEffect(() => {
        document.getElementById("fill_fiftyfifty").style.width = `${100/duration*powersList[5].counter5}%`
        if (powersList[5].counter5 > duration) {
            dispatch(dectivate_power({power_name: "FIFTY FIFTY"}))
        }
    },[powersList[5].counter5])
       

    useEffect(() => {
        if (powersList[5].fiftyfifty === "active") {startFiftyFifty()} 
    })
    
    return (
        <div className="power_effect_container">
            <div id="fill_fiftyfifty" className="power_fill"></div>
            <div className="power_fill_content">
                <img src={flasks[5]} alt="" className="power_flask" />
                EASY MODE
            </div>
            
        </div>
    )
}

export default FiftyFiftyChance