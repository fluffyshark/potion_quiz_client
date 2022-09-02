import React, { useEffect, useState } from 'react'
import "./quizView.css"
import Navbar from "../../components/navbar/Navbar"
import { useSelector, useDispatch } from "react-redux"
import { add_coins, add_coins_amount } from "../../redux/CoinsReducer.js"
import { activate_power } from "../../redux/PowerReducer"
import Protection from "../../components/powers/Protection.js"
import DoublePoints from "../../components/powers/DoublePoints.js"
import {religionQuestions} from "./questions.js"
import {motion} from "framer-motion"
import coinGain from "../../sound_assets/CoinGain.wav"
import Icer from "../../components/powers/Icer.js"
import SpeedUp from '../../components/powers/SpeedUp'
import TripplePoints from '../../components/powers/TripplePoints'
import GoldenPoints from '../../components/powers/GoldenPoints'
import PointPoision from '../../components/powers/PointPoison'
import Blocker from '../../components/powers/Blocker'



var randomQuestionNr = Math.floor(Math.random() * (3 - 0 + 1)) + 0;

function QuizView() {

  var props = {focus: "quiz"}

  const [reveal, setReveal] = useState(false)
  const [question, setQuestion] = useState(religionQuestions.questions[randomQuestionNr].question)
  const [answerAlt, setAnswerAlt] = useState(religionQuestions.questions[randomQuestionNr].answerAlt)
  
  // POTIONS EFFECTS
  const [speed, setSpeed] = useState(5000)
  
  const dispatch = useDispatch()
  const potionsList = useSelector((state) => state.potions.value)
  const powersList = useSelector((state) => state.powers.value)

  function playSound(sound) {
    if (sound === "coin") {new Audio(coinGain).play()}
  }

  function newQuestion() {
    randomQuestionNr = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
    setQuestion(religionQuestions.questions[randomQuestionNr].question)
    let shuffleAnswer = religionQuestions.questions[randomQuestionNr].answerAlt.sort(() => Math.random() - 0.5);
    setAnswerAlt(shuffleAnswer)
    setReveal(!reveal)

    // Remove navbar-blocker
    document.getElementById("navbar_blocker").style.display = "none"
  }



  const answerQuestion = (chosenAnswer) => {

    playSound("click")

    if (religionQuestions.questions[randomQuestionNr].answerAlt[chosenAnswer] === religionQuestions.questions[randomQuestionNr].correctAnswer) {
      document.getElementById("answerBtn").classList.remove('studentQuiz_answerView_correctAnswerBox2');
      document.getElementById("answerBtn").classList.remove('studentQuiz_answerView_correctAnswerBox1');
      document.getElementById("answerBtn").classList.add('studentQuiz_answerView_correctAnswerBox3');
      
      setTimeout(function() {
        playSound("coin")
        // Effect for potions DOUBLE POINTS, TRIPPLE POINTS, GOLDEN POINTS
        if (powersList[1].doublePoints === "active") {dispatch(add_coins_amount(20))}
        else if (powersList[9].tripplePoints === "active") {dispatch(add_coins_amount(30))}
        else if (powersList[19].goldenPoints === "active") {dispatch(add_coins_amount(50))}
        else {dispatch(add_coins())}
        
      }, 1000);
      
    }

    // Div blocks navbar to prevent question-tabbing exploit and during power blocker
    document.getElementById("navbar_blocker").style.display = "inherit"
    
   
    setReveal(!reveal)

    /// Changing reveal-answer-text to answer after the question is answered
    document.getElementById("answerBtn").innerHTML = religionQuestions.questions[randomQuestionNr].correctAnswer
    document.getElementById("answerBtn").classList.add('disabledbutton');
    document.getElementById("answerBtn").classList.remove('studentQuiz_answerView_correctAnswerBox2');
    document.getElementById("answerBtn").classList.add('studentQuiz_answerView_correctAnswerBox1');

    setTimeout(function() {
      document.getElementById("answerBtn").innerHTML = "Continue"
      document.getElementById("answerBtn").classList.remove('studentQuiz_answerView_correctAnswerBox1');
      document.getElementById("answerBtn").classList.remove('studentQuiz_answerView_correctAnswerBox3');
      document.getElementById("answerBtn").classList.add('studentQuiz_answerView_correctAnswerBox2');
      document.getElementById("answerBtn").classList.remove('disabledbutton');
    }, speed);
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

      <div className="studentQuiz_powerContainer">
        {powersList[3].protection === "active" && <Protection />}
        {powersList[1].doublePoints === "active" && <DoublePoints />}
        {powersList[9].tripplePoints === "active" && <TripplePoints />}
        {powersList[19].goldenPoints === "active" && <GoldenPoints />}
        {powersList[2].speedUp === "active" && <SpeedUp />}
        {powersList[6].poison === "active" && powersList[3].protection !== "active" && <PointPoision />}
        {powersList[14].blocker === "active" && powersList[3].protection !== "active" && <Blocker />}
      </div>
      

      <Navbar focus={props} />

      <button onClick={() => dispatch(activate_power({power_name: "SPEED UP"}))}>SPEED UP</button>
      <button onClick={() => dispatch(activate_power({power_name: "DOUBLE POINTS"}))}>DOUBLE POTIONS</button>
      <button onClick={() => dispatch(activate_power({power_name: "TRIPPLE POINTS"}))}>TRIPPLE POTIONS</button>
      <button onClick={() => dispatch(activate_power({power_name: "GOLDEN POINTS"}))}>GOLDEN POTIONS</button>
      <button onClick={() => dispatch(activate_power({power_name: "FREEZE"}))}>FREEZE</button>
      <button onClick={() => dispatch(activate_power({power_name: "PROTECTION"}))}>PROTECTION</button>
      <button onClick={() => dispatch(activate_power({power_name: "POINT POISON"}))}>POINT POISON</button>
      <button onClick={() => dispatch(activate_power({power_name: "BLOCKER"}))}>BLOCKER</button>

      
      <div id="navbar_blocker" className="studentQuiz_navbar_blocker"></div>
      <div id="power_blocker" className="studentQuiz_navbar_blocker"></div>
      <div className='studentQuiz_questionView'>
        <p>{question}</p>
      </div>
      <div className='studentQuiz_answerView'>
        <div className='studentQuiz_answerView_correctAnswerBox1' id="answerBtn" onClick={() => newQuestion()}><p>Oh... You were hoping for me not thinking of this :P</p></div> 
        <motion.div animate={{y: reveal ? 500 : 0}} transition={{duration:0.5}} className='studentQuiz_anwserBox' id="answerAlt_A" onClick={() => answerQuestion(0)}><p>{answerAlt[0]}</p></motion.div>
        <motion.div animate={{y: reveal ? 500 : 0}} transition={{duration:0.5}} className='studentQuiz_anwserBox' id="answerAlt_B" onClick={() => answerQuestion(1)}><p>{answerAlt[1]}</p></motion.div>
        <motion.div animate={{y: reveal ? 500 : 0}} transition={{duration:0.5}} className='studentQuiz_anwserBox' id="answerAlt_C" onClick={() => answerQuestion(2)}><p>{answerAlt[2]}</p></motion.div>
        <motion.div animate={{y: reveal ? 500 : 0}} transition={{duration:0.5}} className='studentQuiz_anwserBox' id="answerAlt_D" onClick={() => answerQuestion(3)}><p>{answerAlt[3]}</p></motion.div>
      </div>
    </div>
  )
}

export default QuizView