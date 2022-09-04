import React from 'react'
import "./potionSelectPlayers.css"
import {motion} from "framer-motion"
import activateBtn from "../../image_assets/general/select_player_btn.png"

function PotionSelectPlayers(props_socket) {

    let socket = props_socket.socket

    return (
        <div className='potionSelectPlayers'>
            <div className="potionSelectPlayers_centerSection">
                <p className="potionSelectPlayers_centerSection_potionName">GIFT EXP</p>
                <div className="potionSelectPlayers_centerSection_collection">
                    
                    <div className="potionSelectPlayers_centerSection_collection_scroll">
                        <motion.div whileHover={{ scale: 0.95 }} whileTap={{ scale: 0.8 }} transition={{ type: "spring", stiffness: 200, damping: 40 }} className="potionSelectPlayers_centerSection_collection_playername">ROBIN</motion.div>
                        <motion.div whileHover={{ scale: 0.95 }} whileTap={{ scale: 0.8 }} transition={{ type: "spring", stiffness: 200, damping: 40 }} className="potionSelectPlayers_centerSection_collection_playername">SIMON</motion.div>
                        <motion.div whileHover={{ scale: 0.95 }} whileTap={{ scale: 0.8 }} transition={{ type: "spring", stiffness: 200, damping: 40 }} className="potionSelectPlayers_centerSection_collection_playername">SARA</motion.div>
                        <motion.div whileHover={{ scale: 0.95 }} whileTap={{ scale: 0.8 }} transition={{ type: "spring", stiffness: 200, damping: 40 }} className="potionSelectPlayers_centerSection_collection_playername">TIMMY</motion.div>
                        <motion.div whileHover={{ scale: 0.95 }} whileTap={{ scale: 0.8 }} transition={{ type: "spring", stiffness: 200, damping: 40 }} className="potionSelectPlayers_centerSection_collection_playername">ANNA</motion.div>
                        <motion.div whileHover={{ scale: 0.95 }} whileTap={{ scale: 0.8 }} transition={{ type: "spring", stiffness: 200, damping: 40 }} className="potionSelectPlayers_centerSection_collection_playername">NIKLAS</motion.div>
                        <motion.div whileHover={{ scale: 0.95 }} whileTap={{ scale: 0.8 }} transition={{ type: "spring", stiffness: 200, damping: 40 }} className="potionSelectPlayers_centerSection_collection_playername">JOHANNA</motion.div>
                    </div>

                </div>
                <motion.img whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 200, damping: 40 }} src={activateBtn} alt="" className="potionSelectPlayers_centerSection_activateBtn" />
            </div>

        </div>
    )
}

export default PotionSelectPlayers

