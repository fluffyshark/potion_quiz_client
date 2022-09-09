import React, { useEffect, useState } from 'react'
import "./potionSelectPlayers.css"
import { useSelector, useDispatch } from "react-redux"
import {motion} from "framer-motion"
import activateBtn from "../../image_assets/general/select_player_btn.png"

function PotionSelectPlayers(props) {

    let socket = props.socket.socket

    const [emitData, setEmitData] = useState([])
    const [maxPlayerTargets, setMaxPlayerTargets] = useState(0)

    const gameStats = useSelector((state) => state.GameData.value)
    const playerStats = useSelector((state) => state.playerStats.value)
    const potionsList = useSelector((state) => state.potions.value)

    useEffect(() => {
        if (props.selectPlayer[0] === "blessing") {document.getElementById("angelOrDemon").className = "potionSelectPlayers_centerSection_angel"}
        if (props.selectPlayer[0] === "curse") {document.getElementById("angelOrDemon").className = "potionSelectPlayers_centerSection_demon"}
    }, [props])
    

    // Send data about potion/targets to selected players through server, then return user to PotionView
    function handleActivateBtn() {
        socket.emit("potion_effect", {emitData});
        props.hideSelectPlayers()
    }



    // Limit the number of players the user can select/target based on the potion type
    const playerLimitByPotion = (potionName) => {
        let playerLimit = 1

        switch (potionName) {
            case "GIFT EXP": playerLimit = 2; break;
            case "FREEZE": playerLimit = 1; break;
            case "POINT POISON": playerLimit = 1; break;
            case "GIVE GIFT": playerLimit = 2; break;
            case "CONFUSION": playerLimit = 1; break;
            case "MASS PROTECTION": playerLimit = 3; break;
            case "BLOCKER": playerLimit = 1; break;
            case "MASS FREEZE": playerLimit = 3; break;

            default:
                break;
        }
        return playerLimit
    
    } // End of playerLimitByPotion()



    // Add the specific effects for each potion, identfied by it's name   
    const powerEffect = (potionName) => {
        let effect = 0

        switch (potionName) {
            case "GIFT EXP": effect = potionsList[0].level; break;
            case "BLOCKER": effect = potionsList[14].level; break;
        
            default: break;
        }

        return effect

    } // End of powerEffect()



    // When clicking on player name buttons, then button should turn green. Clicked player are added to useState and if the chosen potion
    // allows more players, then user can select more players before being able to press activate button. 
    function selectChosenPlayers(id, playerName) {

        // Get the name of the used potion from PotionView
        let potionName = props.selectPlayer[1]

        let effect = powerEffect(potionName)

        // Used for declaring if user clicked to select or deselect player
        let clickedToSelect = true        

        // If there is no player already selected then add the clicked player
        if (emitData.length === 0) {
            setEmitData(emitData => [...emitData, {id: id, potionName: potionName, playerName: playerName, effect: effect}]) 
            setMaxPlayerTargets(maxPlayerTargets + 1)
            // Turn clicked button green
            document.getElementById(playerName).className = "potionSelectPlayers_centerSection_collection_playername_selected"    
        } else {
            for (let i = 0; i < emitData.length; i++) {
                // if clicked player is already selected (playername stored in useState), then remove clicked player
                if (emitData[i].playerName === playerName) {
                    setEmitData(emitData.filter(item => item.playerName !== playerName));
                    // Remove one from maxPlayerTargets, thus allowing more players to be selected
                    setMaxPlayerTargets(maxPlayerTargets - 1)
                    // Returns button "selected" green button to blue
                    document.getElementById(emitData[i].playerName).className = "potionSelectPlayers_centerSection_collection_playername";
                    // If playerName is already in the list then player is clicking button to remove player, alas the player sould be prevented from adding at the same time
                    clickedToSelect = false
                }   
            }
                // Limiting how many player the user can target (max is always three)
                if (maxPlayerTargets < playerLimitByPotion(potionName)) {
                    // If this the click is for selecting and not deselecting
                    if (clickedToSelect === true) {
                        setEmitData(emitData => [...emitData, {id: id, potionName: potionName, playerName: playerName, effect: effect}])
                        setMaxPlayerTargets(maxPlayerTargets + 1)
                        // Turn clicked button green
                        document.getElementById(playerName).className = "potionSelectPlayers_centerSection_collection_playername_selected";
                    }
                }

            } 
        
    } // End of selectChosenPlayers()


    
    // NEXT - MOVE playerLimitByPotion and powerEffect TO A NEW FILE
    // NEXT - ADD POWER EFFECT TO FUNCTION


    console.log("emitData", emitData)

    return (
        <div className='potionSelectPlayers'>
            <div id="angelOrDemon" className="potionSelectPlayers_centerSection_angel">
                <p className="potionSelectPlayers_centerSection_potionName">{props.selectPlayer[1]}</p>
                <div className="potionSelectPlayers_centerSection_collection">
                    
                    <div className="potionSelectPlayers_centerSection_collection_scroll">
                        
                        {gameStats.map((player, i) => {
                            if (player.playerName === playerStats.playerName) {} // Removes user himself from list of players
                            else { return (<motion.div key={i} whileHover={{ scale: 0.95 }} whileTap={{ scale: 0.8 }} transition={{ type: "spring", stiffness: 200, damping: 40 }} onClick={() => selectChosenPlayers(player.id, player.playerName)} id={player.playerName} className="potionSelectPlayers_centerSection_collection_playername">{player.playerName}</motion.div>)}
                        })}

                    </div>

                </div>
                <motion.img whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 200, damping: 40 }} src={activateBtn} alt="" onClick={() => handleActivateBtn()} className="potionSelectPlayers_centerSection_activateBtn" />
            </div>

        </div>
    )
}

export default PotionSelectPlayers

