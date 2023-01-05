import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { motion } from "framer-motion";
import levelBtn from "../../image_assets/general/level_btn.png"
import { reduce_coins_amount } from "../../redux/CoinsReducer.js"
import { add_exp_amount } from "../../redux/LevelExpReducer"
import progressbar_fill from "../../image_assets/general/progressbar_fill.png"
// import {playSound} from "../../components/playSound/playSound"

function LevelProgressBar() {

    const dispatch = useDispatch()
    const coinbag = useSelector((state) => state.coins.value)
    const levelExp = useSelector((state) => state.levelExp.value)


    // onClick event when pressing levelBtn
    const buyLevel = () => {
      // Const of increasing one unit on the level bar is 10 gold
      dispatch(reduce_coins_amount(10))
      dispatch(add_exp_amount(1))
  //  playSound("coindrop")   
  }


  // Progress bar controller 
  useEffect(() => {
    var exp = 1
    if (levelExp.currentLevel === 1) {exp = levelExp.totalExp / levelExp.level_2_requirement * 110}
    if (levelExp.currentLevel === 2) {exp = (levelExp.totalExp - 10) / levelExp.level_3_requirement * 196}
    if (levelExp.currentLevel === 3) {exp = (levelExp.totalExp - 20) / levelExp.level_4_requirement * 230}
    if (levelExp.currentLevel === 4) {exp = (levelExp.totalExp - 35) / levelExp.level_5_requirement * 330}
    if (levelExp.currentLevel === 5) {exp = 100; document.getElementById("levelBtn").style.display = "none"}

    document.getElementById("progressBar").style.width = `${exp}%`

  })



  // Enable / disable levelBtn if player has enough coins
  useEffect(() => {
    if (coinbag.total < 10) {document.getElementById("levelBtn").style.opacity = 0.5; document.getElementById("levelBtn").style.pointerEvents = "none"}
    if (coinbag.total > 9) {document.getElementById("levelBtn").style.opacity = 1; document.getElementById("levelBtn").style.pointerEvents = "auto"}
  },[coinbag.total])




  return (
    <div className="potionView_middle_level">
        <p className="potionView_middle_level_title">{levelExp.title}</p>
        <div className="potionView_middle_level_progressbar">
            <div className="potionView_middle_level_progressbar_limiter"><img id="progressBar" src={progressbar_fill} alt="" className="progressbar_fill" /></div>
        </div>
        <motion.img whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}  onClick={() => {buyLevel()}} src={levelBtn} alt="" id="levelBtn" className="potionView_middle_level_btn" />
    </div>
  )
}

export default LevelProgressBar