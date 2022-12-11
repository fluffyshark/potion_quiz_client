import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { dectivate_power } from "../../redux/PowerReducer"
import flasks from "../../image_assets/FlaskImageExport"



function PointPoision() {

     
    const dispatch = useDispatch()
    const powersList = useSelector((state) => state.powers.value)


    function setDuration() {
        let duration = 0

        if (powersList[6].attackLevel6 === 1) {duration = powersList[6].duration_level_1}
        if (powersList[6].attackLevel6 === 2) {duration = powersList[6].duration_level_2}
        if (powersList[6].attackLevel6 === 3) {duration = powersList[6].duration_level_3}  

        return duration
    }
    

    useEffect(() => {
        // Power is active
        document.getElementById("fill_poison").style.width = `${100/setDuration()*powersList[6].counter6}%`
        // Reduce coins dispatch is placed in <Navbar> where the coins are displayed
    //    dispatch(reduce_coins_amount(2))
    
        // Power is deactivated
        if (powersList[6].counter6 > setDuration()) {
            dispatch(dectivate_power({power_name: "POINT POISON"}))
        }
    },[powersList[6].counter6])
       
    
/*
    useEffect(() => {
        if (powersList[6].poison === "active") {startPower()} 
    }, [powersList[6].poison])

*/

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

