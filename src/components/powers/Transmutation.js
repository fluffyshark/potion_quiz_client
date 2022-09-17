import React, { useEffect, useState } from 'react'
import exitBtn from "../../image_assets/general/exit_btn.png"
import "./powers.css"
import { useSelector, useDispatch } from "react-redux"
import { dectivate_power } from "../../redux/PowerReducer"
import { transmute_ingredients } from "../../redux/IngredientReducer"
import blueBtn from "../../image_assets/general/blueBtn.png"

let requirements = 0

function Transmutation() {

    const [chosenID, setChosenID] = useState(200)
    const [discardingIDs, setDiscardingIDs] = useState([])
    const [phase, setPhase] = useState("chooseID")

    const dispatch = useDispatch()
    const powersList = useSelector((state) => state.powers.value)
    const potionsList = useSelector((state) => state.potions.value)
    const ingredientsList = useSelector((state) => state.ingredients.value)


    function startTransmutation() {
        

        if (potionsList[8].level === 1) {requirements = powersList[8].amount_level_1}
        if (potionsList[8].level === 2) {requirements = powersList[8].amount_level_2}
        if (potionsList[8].level === 3) {requirements = powersList[8].amount_level_3}

        console.log("requirements", requirements)

    } // End of startTransmutation()


    // User choose ingredient that will be stored
    function choosingIngredient(id) {setChosenID(id)}



    function selectingToDiscard(IDs) {

        if (discardingIDs.includes(IDs)) {
            // If clicked on one of the preciously selected ingredients, then remove that from array (discardingIDs)
            setDiscardingIDs(discardingIDs.reduce((r, v) => v !== IDs ? r.concat(v): r, [])) 
        
        } else if (discardingIDs.length < requirements) {
            // if array is less that 5 then add clicked ingredient to array
            setDiscardingIDs(discardingIDs => [...discardingIDs, IDs]); 
        } 
    }


    function nextBtn() {
        
        if (phase === "discardIngredients" && discardingIDs.length === requirements) {
            
            dispatch(transmute_ingredients({chosenID, discardingIDs}))

            document.getElementById("transmute_title").innerHTML = "COMPLETE"
            document.getElementById("transmute_nextBtn").style.display = "none"
            document.getElementById("transmute_ingredients").style.display = "none"
            document.getElementById("transmute_text").style.display = "none"

            setTimeout(function() {
                exitTransmuteView()
            }, 2000);
        
            
        } else if (phase === "chooseID") {
            if (chosenID === 200) {} else {
                setPhase("discardIngredients")
                document.getElementById("transmute_text").innerHTML = `Select ${requirements} ingredients you want to discard.`
            }
            
        }
    }


    function exitTransmuteView() {
        document.getElementById("transmute").style.display = "none"
        dispatch(dectivate_power({power_name: "TRANSMUTATION"}))
    }


    useEffect(() => {if (powersList[8].transmute === "active") {startTransmutation()}}, [powersList[8].transmute])



    // All ingredients are mapped out, if one is pressed, its ID will be stored in chosenID and the image gets a golden frame
    const chooseIngredient = () => {
        return (<>{
                ingredientsList.map((ingredient, i) => {
                    return (
                        <div key={i}> {ingredient.id === chosenID ? (<img className='transmute_scroll_wrap_herbs' src={ingredient.image_golden} alt="" onClick={() => {choosingIngredient(i)}} /> ) : ( <img className='transmute_scroll_wrap_herbs' src={ingredient.image_normal} alt="" onClick={() => {choosingIngredient(i)}} /> )}</div>
                    )
                })
        }</>)
    }


    const userOwnedIngredients = () => {
        return (<>{
                ingredientsList.map((ingredient, i) => {
                    if (ingredient.amount > 0) {
                        return (
                            <div className='transmute_imageHolder' key={i}> 
                                {discardingIDs.includes(ingredient.id) ? (
                                    <> <img className='transmute_scroll_wrap_herbs' src={ingredient.image_golden} alt="" onClick={() => {selectingToDiscard(i)}} /><p>{ingredient.amount}</p> </>
                                    ) : (
                                    <> <img className='transmute_scroll_wrap_herbs' src={ingredient.image_normal} alt="" onClick={() => {selectingToDiscard(i)}} /><p>{ingredient.amount}</p> </>
                                    )
                                }
                            </div>
                        )
                    }
                    
                })
        }</>)
    }



    return (
        <div className="give_gift_container" id="transmute">
        <div className="give_gift_scroll">
            
            <div className="give_gift_scroll_top"><img onClick={() => {exitTransmuteView()}} src={exitBtn} alt="" /></div>
           
            <div className="give_gift_scroll_text">
                <p id="transmute_title" className="give_gift_scroll_text_title">TRANSMUTATION</p>
                <p id="transmute_text" className="give_gift_scroll_text_sender">Choose the ingredient you want.</p>
            </div>
            
            <div id="transmute_ingredients" className="transmute_scroll_wrap">

                {phase === "chooseID" ? (<> {chooseIngredient()} </> ) : (<> {userOwnedIngredients()} </>)}

            </div>

            <div id="transmute_nextBtn" className="transmute_nextBtn" onClick={(() => {nextBtn()})}>
                <img src={blueBtn} alt="" />
                <p>NEXT</p>
            </div>

        </div>


        </div>
    )
    }

export default Transmutation



