import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./quizView.css"
import "./responsive/responsive.css"
import "./responsive/tablet.css"
import Navbar from "../../components/navbar/Navbar"
import { useSelector, useDispatch } from "react-redux"
import { add_coins, add_coins_amount } from "../../redux/CoinsReducer.js"
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
import {playSound} from "../../components/playSound/playSound"
import {CoinGainEffect} from "../../components/coinGainEffect/CoinGainEffect"
import { PlayerData } from '../../redux/PlayerSocketReducer'


var randomQuestionNr = Math.floor(Math.random() * (3 - 0 + 1)) + 0;

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
    randomQuestionNr = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
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
  //   playSound("page")
    setTimeout(function() {
      clickMe()
    }, 10);

    // If correct 
    if (religionQuestions.questions[randomQuestionNr].answerAlt[chosenAnswer] === religionQuestions.questions[randomQuestionNr].correctAnswer) {
      document.getElementById("answerBtn").classList.remove('studentQuiz_answerView_correctAnswerBox2');
      document.getElementById("answerBtn").classList.remove('studentQuiz_answerView_correctAnswerBox1');
      document.getElementById("answerBtn").classList.add('studentQuiz_answerView_correctAnswerBox3');
      
      setAnswerCount({totalQuestions: answerCount.totalQuestions + 1, correct: answerCount.correct + 1, wrong: answerCount.wrong})

      if (powersList[1].doublePoints === "active") {CoinGainEffect(20)}
      else if (powersList[9].tripplePoints === "active") {CoinGainEffect(30)}
      else {CoinGainEffect(10)}

      setTimeout(function() {
    //    playSound("coinGain")
        // Effect for potions DOUBLE POINTS, TRIPPLE POINTS, GOLDEN POINTS
        if (powersList[1].doublePoints === "active") {dispatch(add_coins_amount(20)); CoinGainEffect(20)}
        else if (powersList[9].tripplePoints === "active") {dispatch(add_coins_amount(30)); CoinGainEffect(30)}
        else if (powersList[19].goldenPoints === "active") {dispatch(add_coins_amount(50)); CoinGainEffect(50)}
        else {dispatch(add_coins())}
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


  function clickMe() {
    const soundEffect = new Audio();
  soundEffect.autoplay = true;
  
  // onClick of first interaction on page before I need the sounds
  soundEffect.src = "data:audio/mpeg;base64, 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qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4x//skZHyP8E4AqBABEAgJwBUCACIBAEgCAA0AACAJAEABoAAEMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4x//skRJqP8AAAaQAAAAgAAAAAAAABAAABpAAAACAAADSAAAAEMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4x//skZMSP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4x//skZNWP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4x//skZNWP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4x//skZNWP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEMDCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//skZNWP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//skZNWP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//skZNWP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//skZNWP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//skZNWP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq";
  }
  

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