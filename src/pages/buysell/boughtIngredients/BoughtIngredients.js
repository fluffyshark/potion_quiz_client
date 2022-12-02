import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux"
import "./boughtIngredients.css"
import {IngredientData} from "../../../redux/IngredientData"
import {buy_four_ingredients, buy_fourteen_ingredients, buy_fifty_ingredients } from "../../../redux/IngredientReducer.js"
import exitBtn from "../../../image_assets/general/exit_btn.png"


function BoughtIngredients(boughtIngredients) {
    
    const [newIngredients, setNewIngredients] = useState([])

    const dispatch = useDispatch()

    function createIngredients(boughtNr) {
        let array = []

        if (boughtNr === "buy_four") {
            for (let i = 0; i < 4; i++) {array.push(Math.floor(Math.random() * 180))}
            dispatch(buy_four_ingredients(array))  
        }
        if (boughtNr === "buy_fourteen") {
            for (let i = 0; i < 15; i++) {array.push(Math.floor(Math.random() * 180))}  
            dispatch(buy_fourteen_ingredients(array))
        }
        if (boughtNr === "buy_fifty") {
            for (let i = 0; i < 50; i++) {array.push(Math.floor(Math.random() * 180))}  
            dispatch(buy_fifty_ingredients(array))
        }
        console.log("boughtNr", boughtNr)
        setNewIngredients(array)
    }

    useEffect(() => {
        createIngredients(boughtIngredients.boughtNr)
        console.log("boughtIngredients", boughtIngredients)
    }, [])

            
    // Tells BuySell state playerPurchase to close this view
    function exitScrollView() {
        boughtIngredients.exitbtn("none")
    }


    return (
        <div className='boughtIngred'>
            <motion.div initial={{opacity:0, scale:0}} animate={{opacity:1, scale:1}} className="boughtIngred_scroll">
        
                <div className="boughtIngred_scroll_top"><img onClick={() => {exitScrollView()}} src={exitBtn} alt="" /></div>

                <div className="boughtIngred_scroll_text">
                    <p className="boughtIngred_scroll_text_title">YOUR INGREDIENTS</p>
                    <p className="boughtIngred_scroll_text_sender">We don't do refunds.</p>
                </div>

                <div className="boughtIngred_scroll_wrap">
                    {newIngredients.map((ingredient, i) => {
                        return <img key={i} className='boughtIngred_scroll_wrap_herbs' src={IngredientData[ingredient].image_normal} alt="" />
                    })}
                </div>

            </motion.div>
        </div>
  )
}

export default BoughtIngredients