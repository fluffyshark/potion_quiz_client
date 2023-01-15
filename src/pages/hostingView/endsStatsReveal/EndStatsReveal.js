import React, { useEffect, useState } from 'react'
import "./endStatsReveal.css"
import win_badge01 from "../../../image_assets/general/FabConvert.com_win_badge01.webp"
import win_badge02 from "../../../image_assets/general/FabConvert.com_win_badge02.webp"
import win_badge03 from "../../../image_assets/general/FabConvert.com_win_badge03.webp"
import win_badge04 from "../../../image_assets/general/FabConvert.com_win_badge04.webp"
import win_badge05 from "../../../image_assets/general/FabConvert.com_win_badge05.webp"
import win_badge06 from "../../../image_assets/general/FabConvert.com_win_badge06.webp"
import progressbarbadge01 from "../../../image_assets/general/progressbarbadge01.webp"
import progressbarbadge02 from "../../../image_assets/general/progressbarbadge02.webp"
import progressbarbadge03 from "../../../image_assets/general/progressbarbadge03.webp"
import progressbarbadge04 from "../../../image_assets/general/progressbarbadge04.webp"
import progressbarbadge05 from "../../../image_assets/general/progressbarbadge05.webp"
import progressbarbadge06 from "../../../image_assets/general/progressbarbadge06.webp"



function EndStatsReveal(props) {

    const [endScore, setEndScore] = useState(0)



    // Return the accumulation of all players score   
    function combinePlayersScore() {
        let totalScore = 0

        props.finalScore.map(player => {
            totalScore += player.playerQuizScore.totalQuestions
        })

        return totalScore
    }



    // Displays badge image and text based on player's total score
    function showCorrectWinBadge() {
        
        let img = win_badge01
        let barDotId = "barLevel1"
        let barBadgeId = "barBadge1"
        let comment = "NO COMMENT"

        switch (true) {
            case (endScore >= 300 && endScore < 1000): img = win_badge01; comment = "OK"; break;
            case (endScore >= 1000 && endScore < 1800): img = win_badge02; barDotId = "barLevel2"; barBadgeId = "barBadge2"; comment = "IT'S ACCEPTABLE"; break;
            case (endScore >= 1800 && endScore < 2500): img = win_badge03; barDotId = "barLevel3"; barBadgeId = "barBadge3"; comment = "GREAT AND IMPRESSIVE"; break;
            case (endScore >= 2500 && endScore < 3200): img = win_badge04; barDotId = "barLevel4"; barBadgeId = "barBadge4"; comment = "WOW, EXCELLENT"; break;
            case (endScore >= 3200 && endScore < 4000): img = win_badge05; barDotId = "barLevel5"; barBadgeId = "barBadge5"; comment = "YOUR ARE EXTRODINARY"; break;
            case (endScore >= 4000): img = win_badge06; barBadgeId = "barBadge6"; comment = "OMG, BRILLIANT !"; break;
            default:break;
        }

        document.getElementById(barDotId).style.display = "none"
        document.getElementById(barBadgeId).style.opacity = "1"
        document.getElementById("endScore_comment").innerHTML = comment
        
        return img
    }


    // Animate the total score number to tick upwards
    function pointAnimator() {
        let count = endScore
       
        const counter = () => {
            count++ 
            setEndScore(count)

            if (count === endScore + combinePlayersScore()) {
                clearInterval(counting)
            } 
        }
        
        let counting = setInterval(counter, 15)
    
    }


    // Animate the width of the progress bar fill based on the endscore's % of 4000 (100% = 4000)
    function addPointsToBar() {
        
        let fill = (endScore / 4000)*100
        if (fill >= 100) {fill = 100}

        document.getElementById("win_state_progress_bar").style.width = `${fill}%`
    }


    // Activate the total score ticker at page load
    useEffect(() => {pointAnimator()}, [])

    // Filling the progress bar with player's combined score based on endScore (changes with pointAnimator())
    useEffect(() => {addPointsToBar()}, [endScore])





  return (
    <div className='endstatsReveal'>
        <button onClick={() => pointAnimator()}>Add points</button>
        <div className="endstatsReveal_middle">
            <div className="endstatsReveal_middle_container">

                <div className="endstatsReveal_container_top">
                    {endScore < 300 &&
                        <>
                        <p>TOTAL SCORE</p>
                        <p>ACHIEVEMENTS</p>
                        </>
                    }
                    {endScore >= 300 && <img src={showCorrectWinBadge()} alt="" />}
                </div>
                
                <p>{endScore}</p>
                
                <div className="win_state_progress_bar">
                    <div className="win_state_progress_bar_fill_container">
                        
                        <div id="win_state_progress_bar" className="win_state_progress_bar_fill"></div>
                        
                        <img id="barBadge1" style={{left: "3.5%"}} src={progressbarbadge01} alt="" />
                        <img id="barBadge2" style={{left: "21%"}} src={progressbarbadge02} alt="" />
                        <img id="barBadge3" style={{left: "41%"}} src={progressbarbadge03} alt="" />
                        <img id="barBadge4" style={{left: "58%"}} src={progressbarbadge04} alt="" />
                        <img id="barBadge5" style={{left: "76%"}} src={progressbarbadge05} alt="" />
                        <img id="barBadge6" style={{left: "92.5%"}} src={progressbarbadge06} alt="" />

                        <div id="barLevel1" className='endstatsReveal_barDots'></div>
                        <div id="barLevel2" className='endstatsReveal_barDots'></div>
                        <div id="barLevel3" className='endstatsReveal_barDots'></div>
                        <div id="barLevel4" className='endstatsReveal_barDots'></div>
                        <div id="barLevel5" className='endstatsReveal_barDots'></div>

                    </div>
                </div>
                
                <p id="endScore_comment">NO COMMENT</p>
                

            </div>
        </div>
    </div>
  )
}

export default EndStatsReveal