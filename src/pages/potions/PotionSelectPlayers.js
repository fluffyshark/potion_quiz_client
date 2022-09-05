import React, { useEffect, useState } from 'react'
import "./potionSelectPlayers.css"
import { useSelector, useDispatch } from "react-redux"
import {motion} from "framer-motion"
import activateBtn from "../../image_assets/general/select_player_btn.png"

function PotionSelectPlayers(props) {

    let socket = props.socket.socket

    const [chosenPlayers, setChosenPlayers] = useState([])
    const gameStats = useSelector((state) => state.GameData.value)
    const playerStats = useSelector((state) => state.playerStats.value)
    const potionsList = useSelector((state) => state.potions.value)

    useEffect(() => {
        if (props.selectPlayer[0] === "blessing") {document.getElementById("angelOrDemon").className = "potionSelectPlayers_centerSection_angel"}
        if (props.selectPlayer[0] === "curse") {document.getElementById("angelOrDemon").className = "potionSelectPlayers_centerSection_demon"}
    }, [props])
    

    function handleActivateBtn() {
       props.hideSelectPlayers()
    }


    function selectChosenPlayers(id, playerName) {
        let effect = 0
        let potionName = props.selectPlayer[1]
        if (potionName === "GIFT EXP") {effect = potionsList[0].level}
        
        socket.emit("potion_effect", { id: id, potionName: potionName, playerName: playerName, effect: effect});
    }

    /// NEXT - REMOVE USER FROM PLAYERLIST
    /// NEXT - SELECT ONE PLAYER AND SEND SOCKET EMIT TO HIM

    return (
        <div className='potionSelectPlayers'>
            <div id="angelOrDemon" className="potionSelectPlayers_centerSection_angel">
                <p className="potionSelectPlayers_centerSection_potionName">{props.selectPlayer[1]}</p>
                <div className="potionSelectPlayers_centerSection_collection">
                    
                    <div className="potionSelectPlayers_centerSection_collection_scroll">
                        
                        {gameStats.map((player, i) => {
                            if (player.playerName === playerStats.playerName) {} 
                            else { return (<motion.div key={i} whileHover={{ scale: 0.95 }} whileTap={{ scale: 0.8 }} transition={{ type: "spring", stiffness: 200, damping: 40 }} onClick={() => selectChosenPlayers(player.id, player.playerName)} className="potionSelectPlayers_centerSection_collection_playername">{player.playerName}</motion.div>)}
                        })}

                    </div>

                </div>
                <motion.img whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 200, damping: 40 }} src={activateBtn} alt="" onClick={() => handleActivateBtn()} className="potionSelectPlayers_centerSection_activateBtn" />
            </div>

        </div>
    )
}

export default PotionSelectPlayers

