import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./quizView.css"
import "./responsive/responsive.css"
import "./responsive/tablet.css"
import Navbar from "../../components/navbar/Navbar"
import { useSelector, useDispatch } from "react-redux"
import { add_coins_amount } from "../../redux/CoinsReducer.js"
import { activate_power, power_special } from "../../redux/PowerReducer"
import Protection from "../../components/powers/Protection.js"
import DoublePoints from "../../components/powers/DoublePoints.js"
import {religionQuestions} from "./questions.js"
import {motion} from "framer-motion"
import Icer from "../../components/powers/Icer.js"
import MassFreeze from "../../components/powers/MassFreeze.js"
import SpeedUp from '../../components/powers/SpeedUp'
import TripplePoints from '../../components/powers/TripplePoints'
import GoldenPoints from '../../components/powers/GoldenPoints'
import PointPoision from '../../components/powers/PointPoison'
import Blocker from '../../components/powers/Blocker'
import FiftyFiftyChance from '../../components/powers/FiftyFiftyChance'
import ReceiveGiveGift from '../../components/powers/GiveGift'
import DoubleBatch from '../../components/powers/DoubleBatch'
import PriceRunner from '../../components/powers/PriceRunner'
import StreakBonus from '../../components/powers/StreakBonus'
import Transmutation from '../../components/powers/Transmutation'
import EpicChallenge from '../../components/powers/EpicChallenge'
import JukeBox from '../../components/powers/JukeBox'
//import {playSound} from "../../components/playSound/playSound"
import {CoinGainEffect} from "../../components/coinGainEffect/CoinGainEffect"


var randomQuestionNr = Math.floor(Math.random() * (8 - 0 + 1)) + 0;

function QuizView(all_props) {

  var props = {focus: "quiz"}
  let socket = all_props.socket
  let hostID = all_props.hostID
  
  const [reveal, setReveal] = useState(false)
  const [question, setQuestion] = useState(religionQuestions.questions[randomQuestionNr].question)
  const [answerAlt, setAnswerAlt] = useState(religionQuestions.questions[randomQuestionNr].answerAlt)
  const [answerCount, setAnswerCount] = useState({totalQuestions: 0, correct: 0, wrong:0})
  

  // POTIONS EFFECTS
  const [speed, setSpeed] = useState(4000)
  
  let navigate = useNavigate()
  const dispatch = useDispatch()
  const potionsList = useSelector((state) => state.potions.value)
  const powersList = useSelector((state) => state.powers.value)
  

  function newQuestion() {
    randomQuestionNr = Math.floor(Math.random() * (8 - 0 + 1)) + 0;
    setQuestion(religionQuestions.questions[randomQuestionNr].question)
    let shuffleAnswer = religionQuestions.questions[randomQuestionNr].answerAlt.sort(() => Math.random() - 0.5);
    setAnswerAlt(shuffleAnswer)
    setReveal(!reveal)

    // If dark mode, then restore
    document.getElementById('answerAlt_A').classList.remove('fiftyFifty_darkAnserAlt')
    document.getElementById('answerAlt_B').classList.remove('fiftyFifty_darkAnserAlt')
    document.getElementById('answerAlt_C').classList.remove('fiftyFifty_darkAnserAlt')
    document.getElementById('answerAlt_D').classList.remove('fiftyFifty_darkAnserAlt')

    //Potion power - Fifty Fifty
    if (powersList[5].fiftyfifty === "active") {
      
      // Create and array and fill it with all wrong alternatives
      let fiftyFityArray = []
      if (shuffleAnswer[0] === religionQuestions.questions[randomQuestionNr].correctAnswer) {} else {fiftyFityArray.push(0)} 
      if (shuffleAnswer[1] === religionQuestions.questions[randomQuestionNr].correctAnswer) {} else {fiftyFityArray.push(1)} 
      if (shuffleAnswer[2] === religionQuestions.questions[randomQuestionNr].correctAnswer) {} else {fiftyFityArray.push(2)} 
      if (shuffleAnswer[3] === religionQuestions.questions[randomQuestionNr].correctAnswer) {} else {fiftyFityArray.push(3)} 

      // Shuffle array of wrong alternatives and remove last one, leaving only two randomly wrong alternativs
      fiftyFityArray.sort(() => Math.random() - 0.5); fiftyFityArray.pop()

      // Turn two wrong alternatives dark
      for (let i = 0; i < fiftyFityArray.length; i++) {
        if (fiftyFityArray[i] === 0) {document.getElementById('answerAlt_A').classList.add('fiftyFifty_darkAnserAlt')} 
        if (fiftyFityArray[i] === 1) {document.getElementById('answerAlt_B').classList.add('fiftyFifty_darkAnserAlt')} 
        if (fiftyFityArray[i] === 2) {document.getElementById('answerAlt_C').classList.add('fiftyFifty_darkAnserAlt')} 
        if (fiftyFityArray[i] === 3) {document.getElementById('answerAlt_D').classList.add('fiftyFifty_darkAnserAlt')} 
      }

    } // End of fiftyfifty
    
    // Remove navbar-blocker
    document.getElementById("navbar_blocker").style.display = "none"

  } // End of newQuestion()



  const answerQuestion = (chosenAnswer) => {

    // If correct 
    if (religionQuestions.questions[randomQuestionNr].answerAlt[chosenAnswer] === religionQuestions.questions[randomQuestionNr].correctAnswer) {
      document.getElementById("answerBtn").classList.remove('studentQuiz_answerView_correctAnswerBox2');
      document.getElementById("answerBtn").classList.remove('studentQuiz_answerView_correctAnswerBox1');
      document.getElementById("answerBtn").classList.add('studentQuiz_answerView_correctAnswerBox3');
      
      setAnswerCount({totalQuestions: answerCount.totalQuestions + 1, correct: answerCount.correct + 1, wrong: answerCount.wrong})
      
    //  setTimeout(function() {playSound("coinGain")}, 200);

      if (powersList[1].doublePoints === "active") {CoinGainEffect(20)}
      else if (powersList[9].tripplePoints === "active") {CoinGainEffect(30)}
      else if (powersList[19].tripplePoints === "active") {CoinGainEffect(50)}
      else {CoinGainEffect(10)}

      setTimeout(function() {
        // Effect for potions DOUBLE POINTS, TRIPPLE POINTS, GOLDEN POINTS
        if (powersList[1].doublePoints === "active") {dispatch(add_coins_amount(20)); CoinGainEffect(20)}
        else if (powersList[9].tripplePoints === "active") {dispatch(add_coins_amount(30)); CoinGainEffect(30)}
        else if (powersList[19].goldenPoints === "active") {dispatch(add_coins_amount(50)); CoinGainEffect(50)}
        else {dispatch(add_coins_amount(10))}
      }, 1000);
      
    } else {
      setAnswerCount({totalQuestions: answerCount.totalQuestions + 1, correct: answerCount.correct, wrong: answerCount.wrong + 1})
    }

    // Div blocks navbar to prevent question-tabbing exploit and during power blocker
    document.getElementById("navbar_blocker").style.display = "inherit"


    
   
    setReveal(!reveal)

    /// Changing reveal-answer-text to answer after the question is answered
    document.getElementById("answerBtn").innerHTML = religionQuestions.questions[randomQuestionNr].correctAnswer
    document.getElementById("answerBtn").classList.add('disabledbutton');
    document.getElementById("answerBtn").classList.remove('studentQuiz_answerView_correctAnswerBox2');
    document.getElementById("answerBtn").classList.add('studentQuiz_answerView_correctAnswerBox1');
    dispatch(power_special())

    setTimeout(function() {
      document.getElementById("answerBtn").innerHTML = "Continue"
      document.getElementById("answerBtn").classList.remove('studentQuiz_answerView_correctAnswerBox1');
      document.getElementById("answerBtn").classList.remove('studentQuiz_answerView_correctAnswerBox3');
      document.getElementById("answerBtn").classList.add('studentQuiz_answerView_correctAnswerBox2');
      document.getElementById("answerBtn").classList.remove('disabledbutton');
    }, speed);
  
  } // End of answerQuestion


  // Potion Effect - SPEED UP
    useEffect(() => {
      if (powersList[2].speedUp === "active") {
        if (potionsList[2].level === 1) {setSpeed(powersList[2].speed_1)}
        if (potionsList[2].level === 2) {setSpeed(powersList[2].speed_2)}
        if (potionsList[2].level === 3) {setSpeed(powersList[2].speed_3)}
      }
    }, [powersList[2].speedUp])





  return (
    <div className='studentQuiz'>
      
      {powersList[4].freeze === "active" && powersList[3].protection !== "active" && <Icer />}
      {powersList[18].mass_freeze === "active" && powersList[3].protection !== "active" && <MassFreeze />}
      {powersList[7].gift === "active" && <ReceiveGiveGift />}
      {powersList[8].transmute === "active" && <Transmutation />}
      {powersList[10].jukebox === "active" && <JukeBox socket={socket} hostID={hostID} />}

      <div className="studentQuiz_powerContainer">
        {powersList[3].protection === "active" && <Protection />}
        {powersList[5].fiftyfifty === "active" && <FiftyFiftyChance />}
        {powersList[1].doublePoints === "active" && <DoublePoints />}
        {powersList[9].tripplePoints === "active" && <TripplePoints />}
        {powersList[19].goldenPoints === "active" && <GoldenPoints />}
        {powersList[2].speedUp === "active" && <SpeedUp />}
        {powersList[6].poison === "active" && powersList[3].protection !== "active" && <PointPoision />}
        {powersList[14].blocker === "active" && powersList[3].protection !== "active" && <Blocker />}
        {powersList[15].batch === "active" && <DoubleBatch />}
        {powersList[11].price === "active" && <PriceRunner />}
        {powersList[17].streak === "active" && <StreakBonus answerCount={answerCount} />}
        {powersList[16].epic === "active" && <EpicChallenge answerCount={answerCount} />}
        
      </div>
      

      <Navbar focus={props} />
  
    {/* 

      <button onClick={() => dispatch(activate_power({power_name: "SPEED UP"}))}>SPEED UP</button>
      <button onClick={() => dispatch(activate_power({power_name: "DOUBLE POINTS"}))}>DOUBLE POTIONS</button>
      <button onClick={() => dispatch(activate_power({power_name: "TRIPPLE POINTS"}))}>TRIPPLE POTIONS</button>
      <button onClick={() => dispatch(activate_power({power_name: "GOLDEN POINTS"}))}>GOLDEN POTIONS</button>
      <button onClick={() => dispatch(activate_power({power_name: "FREEZE"}))}>FREEZE</button>
      <button onClick={() => dispatch(activate_power({power_name: "PROTECTION"}))}>PROTECTION</button>
      <button onClick={() => dispatch(activate_power({power_name: "POINT POISON"}))}>POINT POISON</button>
      <button onClick={() => dispatch(activate_power({power_name: "BLOCKER"}))}>BLOCKER</button>
      <button onClick={() => dispatch(activate_power({power_name: "FIFTY FIFTY"}))}>FIFTY FIFTY</button>
      <button onClick={() => dispatch(activate_power({power_name: "GIVE GIFT"}))}>GIVE GIFT</button>
      <button onClick={() => dispatch(activate_power({power_name: "PRICE RUNNER"}))}>PRICE RUNNER</button>
      <button onClick={() => dispatch(activate_power({power_name: "STREAK BONUS"}))}>STREAK BONUS</button>
      <button onClick={() => dispatch(activate_power({power_name: "TRANSMUTATION"}))}>TRANSMUTATION</button>
      <button onClick={() => dispatch(activate_power({power_name: "EPIC CHALLENGE"}))}>EPIC CHALLENGE</button>
      <button onClick={() => dispatch(activate_power({power_name: "JUKEBOX"}))}>JUKEBOX</button>

*/}

      

      
      <div id="navbar_blocker" className="studentQuiz_navbar_blocker"></div>
      <div id="power_blocker" className="studentQuiz_navbar_blocker"></div>
      <div className='studentQuiz_questionView'>
        <p>{question}</p>
      </div>
      <div className='studentQuiz_answerView'>
        <div className='studentQuiz_answerView_correctAnswerBox1' id="answerBtn" onClick={() => newQuestion()}><p>Oh... You were hoping for me not thinking of this :P</p></div> 
        <motion.div animate={{y: reveal ? 500 : 0}} transition={{duration:0.5}} className='studentQuiz_anwserBox anwserBox_A' id="answerAlt_A" onClick={() => answerQuestion(0)}><p>{answerAlt[0]}</p></motion.div>
        <motion.div animate={{y: reveal ? 500 : 0}} transition={{duration:0.5}} className='studentQuiz_anwserBox anwserBox_B' id="answerAlt_B" onClick={() => answerQuestion(1)}><p>{answerAlt[1]}</p></motion.div>
        <motion.div animate={{y: reveal ? 500 : 0}} transition={{duration:0.5}} className='studentQuiz_anwserBox anwserBox_C' id="answerAlt_C" onClick={() => answerQuestion(2)}><p>{answerAlt[2]}</p></motion.div>
        <motion.div animate={{y: reveal ? 500 : 0}} transition={{duration:0.5}} className='studentQuiz_anwserBox anwserBox_D' id="answerAlt_D" onClick={() => answerQuestion(3)}><p>{answerAlt[3]}</p></motion.div>
      </div>
    </div>
  )
}

export default QuizView