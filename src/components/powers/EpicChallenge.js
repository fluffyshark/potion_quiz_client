import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { dectivate_power } from "../../redux/PowerReducer"
import { epic_challenge_ingredients } from "../../redux/IngredientReducer"
import flasks from "../../image_assets/FlaskImageExport"

function EpicChallenge(props) {
    let challenge = 10
    let answerCount = props.answerCount

    const [challengeScore, setChallengeScore] = useState(-1)
    const [wrongChecker, setWrongChecker] = useState([])

    const dispatch = useDispatch()
    const powersList = useSelector((state) => state.powers.value)
    const potionsList = useSelector((state) => state.potions.value)

    function startEpicChallenge() {

        setWrongChecker(wrongChecker => [...wrongChecker, answerCount.wrong])

        if (wrongChecker.length === 0 || wrongChecker[wrongChecker.length - 1] >= answerCount.wrong) {

            console.log("wrongChecker", wrongChecker)
            if (potionsList[16].level === 1) {challenge = powersList[16].challenge_level_1}
            if (potionsList[16].level === 2) {challenge = powersList[16].challenge_level_2}
            if (potionsList[16].level === 3) {challenge = powersList[16].challenge_level_3}  
            
            setTimeout(function() {
                setChallengeScore(challengeScore + 1)
                document.getElementById("fill_epic").style.width = `${((challengeScore + 1)/challenge)*100}%`

                if (challengeScore >= challenge - 1) {
                    let reward = 50

                    if (challenge === 10) {dispatch(epic_challenge_ingredients(50)); reward = 75}
                    if (challenge === 25) {dispatch(epic_challenge_ingredients(100)); reward = 150}
                    if (challenge === 50) {dispatch(epic_challenge_ingredients(300)); reward = 300}

                    document.getElementById("power_blocker").style.display = "none"

                    setTimeout(function() { 
                        document.getElementById("epic_challenge_text").innerHTML = "CHALLENGE COMPLETE"
                        document.getElementById("epic_challenge_score").style.display = "none"
                    }, 1500);

                    setTimeout(function() { document.getElementById("epic_challenge_text").innerHTML = `+${reward} INGREDIENTS`}, 4000);

                    setTimeout(function() { dispatch(dectivate_power({power_name: "EPIC CHALLENGE"}))}, 7000); 
                } 

            }, 1500);
            

            document.getElementById("power_blocker").style.display = "inherit"

        } else {
            document.getElementById("power_blocker").style.display = "none"
            dispatch(dectivate_power({power_name: "EPIC CHALLENGE"}))
        }
        
    }
    

    useEffect(() => {
        if (powersList[16].epic === "active") {startEpicChallenge()}}, [answerCount])
    
    


    return (
        <div className="power_effect_container">
            <div id="fill_epic" className="power_fill"></div>
            <div className="power_fill_content">
                <img src={flasks[16]} alt="" className="power_flask" />
                <p id="epic_challenge_text">EPIC CHALLENGE</p>
                <p id="epic_challenge_score">{challengeScore} / {challenge}</p>
                
            </div>
        </div>

    )
}

export default EpicChallenge