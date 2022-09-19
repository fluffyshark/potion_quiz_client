import React, { useEffect, useState } from 'react'
import exitBtn from "../../image_assets/general/exit_btn.png"
import "./powers.css"
import { useSelector, useDispatch } from "react-redux"
import { dectivate_power } from "../../redux/PowerReducer"


function JukeBox(all_props) {
    let level = 1
    let socket = all_props.socket
    let hostID = all_props.hostID

    const dispatch = useDispatch()
    const powersList = useSelector((state) => state.powers.value)
    const potionsList = useSelector((state) => state.potions.value)

    function initiateJukebox() {
        
        if (potionsList[10].level === 1) {level = 1}
        if (potionsList[10].level === 2) {level = 2; document.getElementById("melody2").classList.remove("belowLevel"); document.getElementById("melody3").classList.remove("belowLevel")}
        if (potionsList[10].level === 3) {level = 3; document.getElementById("melody4").classList.remove("belowLevel"); document.getElementById("melody5").classList.remove("belowLevel")}

    } // End of initiateJukebox()



    function playMelody(melodyNr) {
        let sendingMelody = ""

        switch (melodyNr) {
            case 0: sendingMelody = "jukebox00"; break;
            case 1: sendingMelody = "jukebox01"; break;
            case 2: sendingMelody = "jukebox02"; break;
            case 3: sendingMelody = "jukebox03"; break;
            case 4: sendingMelody = "jukebox04"; break;
            case 5: sendingMelody = "jukebox05"; break;
           
            default:
                break;
        }

        socket.emit("sending_jukebox_to_server", {melody: sendingMelody, hostID: hostID});
    } // End of playMelody()


    function exitTransmuteView() {
        document.getElementById("jukebox").style.display = "none"
        dispatch(dectivate_power({power_name: "JUKEBOX"}))
    }


    useEffect(() => {if (powersList[10].jukebox === "active") {initiateJukebox()}}, [powersList[10].jukebox])


    return (
        <div className="give_gift_container" id="jukebox">
            <div className="give_gift_scroll">
            
                <div className="give_gift_scroll_top"><img onClick={() => {exitTransmuteView()}} src={exitBtn} alt="" /></div>
            
                <div className="give_gift_scroll_text">
                    <p className="give_gift_scroll_text_title">JUKEBOX</p>
                    <p className="give_gift_scroll_text_sender">Pick a melody.</p>
                </div>
                
                <div className="jukebox_scroll_middleContainer">

                    <div className="jukebox_scroll_middleContainer_box">
                        <p>BRONZE</p>
                        <div>
                            <div className="melodybox" onClick={() => {playMelody(0)}}>1</div>
                            <div className="melodybox" onClick={() => {playMelody(1)}}>2</div>
                        </div>
                    </div>
                    <div className="jukebox_scroll_middleContainer_box">
                        <p>SILVER</p>
                        <div>
                            <div id="melody2" className="melodybox belowLevel" onClick={() => {playMelody(2)}}>3</div>
                            <div id="melody3" className="melodybox belowLevel" onClick={() => {playMelody(3)}}>4</div>
                        </div>
                    </div>
                    <div className="jukebox_scroll_middleContainer_box">
                        <p>GOLD</p>
                        <div>
                            <div id="melody4" className="melodybox belowLevel" onClick={() => {playMelody(4)}}>5</div>
                            <div id="melody5" className="melodybox belowLevel" onClick={() => {playMelody(5)}}>6</div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
    }

export default JukeBox



