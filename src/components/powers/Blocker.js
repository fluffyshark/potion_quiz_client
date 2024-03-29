import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { dectivate_power } from "../../redux/PowerReducer"
import flasks from "../../image_assets/FlaskImageExport"
import blocker4 from "../../image_assets/general/slime_blocker4.png"
import {motion} from "framer-motion"

let duration = 0

function Blocker() {

     
    const dispatch = useDispatch()
    const powersList = useSelector((state) => state.powers.value)



    function startPower() {

        if (powersList[14].attackLevel14 === 1) {duration = powersList[14].duration_level_1}
        if (powersList[14].attackLevel14 === 2) {duration = powersList[14].duration_level_2}
        if (powersList[14].attackLevel14 === 3) {duration = powersList[14].duration_level_3}  

        document.getElementById("power_blocker").style.display = "inherit"
        document.getElementById("blocker_big_splash").style.display = "inherit"
        setTimeout(function() {document.getElementById("blocker_big_splash").style.display = "none"}, 2500);
    }
    
    useEffect(() => {
        document.getElementById("fill_blocker").style.width = `${100/duration*powersList[14].counter14}%`
        console.log("duration", duration)
        if (powersList[14].counter14 > duration) {
            dispatch(dectivate_power({power_name: "BLOCKER"}))
            document.getElementById("power_blocker").style.display = "none"
        }
    },[powersList[14].counter14])
       

    useEffect(() => {
        if (powersList[14].blocker === "active") {startPower(); } 
    }, [powersList[14].blocker])



    return (
        <>
            <div className="power_effect_container">
                <div id="fill_blocker" className="power_fill"></div>
                <div className="power_fill_content">
                    <img src={flasks[14]} alt="" className="power_flask" />
                    BLOCKER
                </div>
      
            </div>
            <motion.img initial={{opacity: 0.9}} animate={{opacity: 0}} transition={{delay: 1, duration: 1}} id='blocker_big_splash' src={blocker4} alt="" />
        </>
    )


}

export default Blocker

