import React, { useEffect, useState } from 'react'
import "./quizView.css"
import Navbar from "../../components/navbar/Navbar"
import {useSelector, useDispatch} from "react-redux"
import {increment} from "../../redux/reducers/playerGold"
import {religionQuestions} from "./questions.js"
import {motion} from "framer-motion"
import click from "../../sound_assets/click.mp3"
import coindrop from "../../sound_assets/coindrop.mp3"


var randomQuestionNr = Math.floor(Math.random() * (3 - 0 + 1)) + 0;

function QuizView() {

  const dispatch = useDispatch()
  const [reveal, setReveal] = useState(false)

  const [question, setQuestion] = useState(religionQuestions.questions[randomQuestionNr].question)
  const [answerAlt, setAnswerAlt] = useState(religionQuestions.questions[randomQuestionNr].answerAlt)
  const [points, setPoints] = useState(0)

  function playSound(sound) {
    if (sound === "click") {new Audio(click).play()}
    if (sound === "coin") {new Audio(coindrop).play()}
    
  }

  function newQuestion() {
    randomQuestionNr = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
    setQuestion(religionQuestions.questions[randomQuestionNr].question)
    setAnswerAlt(religionQuestions.questions[randomQuestionNr].answerAlt)
    setReveal(!reveal)
    
    
  }

  const answerQuestion = (chosenAnswer) => {

    playSound("click")

    if (religionQuestions.questions[randomQuestionNr].answerAlt[chosenAnswer] === religionQuestions.questions[randomQuestionNr].correctAnswer) {
      document.getElementById("answerBtn").classList.remove('studentQuiz_answerView_correctAnswerBox2');
      document.getElementById("answerBtn").classList.remove('studentQuiz_answerView_correctAnswerBox1');
      document.getElementById("answerBtn").classList.add('studentQuiz_answerView_correctAnswerBox3');
      
      setTimeout(function() {playSound("coin")}, 1);
      dispatch(increment())
      
    }
   
    setReveal(!reveal)

    /// Changing reveal-answer-text to answer after the question is answered
    document.getElementById("answerBtn").innerHTML = religionQuestions.questions[randomQuestionNr].answerAlt[chosenAnswer]
    document.getElementById("answerBtn").classList.add('disabledbutton');
    document.getElementById("answerBtn").classList.remove('studentQuiz_answerView_correctAnswerBox2');
    document.getElementById("answerBtn").classList.add('studentQuiz_answerView_correctAnswerBox1');

    setTimeout(function() {
      document.getElementById("answerBtn").innerHTML = "Continue"
      document.getElementById("answerBtn").classList.remove('studentQuiz_answerView_correctAnswerBox1');
      document.getElementById("answerBtn").classList.remove('studentQuiz_answerView_correctAnswerBox3');
      document.getElementById("answerBtn").classList.add('studentQuiz_answerView_correctAnswerBox2');
      document.getElementById("answerBtn").classList.remove('disabledbutton');
    }, 4000);
  }

  var props = {
    focus: "quiz",
  }


  return (
    <div className='studentQuiz'>
      <Navbar focus={props} />
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