import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { dectivate_power } from "../../redux/PowerReducer"
import money_icon from "../../image_assets/general/money_icon.webp"
import { add_coins_amount } from "../../redux/CoinsReducer.js"

function StreakBonus(props) {
    let bonus = 0
    let answerCount = props.answerCount
    
    const [currentBonus, setCurrentBonus] = useState(0)
    const [wrongChecker, setWrongChecker] = useState([])

    const dispatch = useDispatch()
    const powersList = useSelector((state) => state.powers.value)
    const potionsList = useSelector((state) => state.potions.value)

    function calculateStreakBonus() {

        setWrongChecker(wrongChecker => [...wrongChecker, answerCount.wrong]);

        if (wrongChecker.length === 0 || wrongChecker[wrongChecker.length - 1] >= answerCount.wrong) {

            if (potionsList[17].level === 1) {bonus = powersList[17].streak_level_1}
            if (potionsList[17].level === 2) {bonus = powersList[17].streak_level_2}
            if (potionsList[17].level === 3) {bonus = powersList[17].streak_level_3}  

            document.getElementById("fill_streakBonus").classList.add('streakBonus_normal')

            setTimeout(function() {
                setCurrentBonus(currentBonus + bonus)
                dispatch(add_coins_amount(currentBonus))
                document.getElementById("fill_streakBonus").classList.add('streakBonus_success')
                document.getElementById("fill_streakBonus").classList.remove('streakBonus_normal')
              }, 1500);

              setTimeout(function() {
                document.getElementById("fill_streakBonus").classList.remove('streakBonus_success')
                document.getElementById("fill_streakBonus").classList.add('streakBonus_normal')
              }, 2500);

        } else {
            dispatch(dectivate_power({power_name: "STREAK BONUS"}))
            setCurrentBonus(0)
        }

        
        

        console.log("wrongChecker", wrongChecker)
    }
    

    useEffect(() => {if (powersList[17].streak === "active") {calculateStreakBonus()} }, [answerCount])
    

    return (
        <div className="power_effect_container">
            <div id="fill_streakBonus" className="power_fill"></div>
            <div className="power_fill_streakBonus">
                <p className="streakBonus_text" >STREAK BONUS</p>
                <div className="streakBonus_bonusContainer">
                    <p className="streakBonus_bonus" >+{currentBonus}</p> 
                    <img src={money_icon} alt="" className="streakBonus_money_icon" />
                </div>
                
            </div>
            
        </div>
    )
}

export default StreakBonus