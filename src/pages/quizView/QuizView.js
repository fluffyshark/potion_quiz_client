import React, { useState } from 'react'
import "./quizView.css"
import Navbar from "../../components/navbar/Navbar"
import {religionQuestions} from "./questions.js"


var randomQuestionNr = Math.floor(Math.random() * (3 - 0 + 1)) + 0;

function QuizView() {

const [question, setQuestion] = useState(religionQuestions.questions[randomQuestionNr].question)
const [answerAlt, setAnswerAlt] = useState(religionQuestions.questions[randomQuestionNr].answerAlt)
const [points, setPoints] = useState(0)

const answerQuestion = (chosenAnswer) => {

  if (religionQuestions.questions[randomQuestionNr].answerAlt[chosenAnswer] === religionQuestions.questions[randomQuestionNr].correctAnswer) {
    setPoints(points + 1)
  }

  randomQuestionNr = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
  setQuestion(religionQuestions.questions[randomQuestionNr].question)
  setAnswerAlt(religionQuestions.questions[randomQuestionNr].answerAlt)

}





  return (
    <div className='studentQuiz'>
      <Navbar />
      <div className='studentQuiz_questionView'>
        <p>{question}</p>
      </div>
      <div className='studentQuiz_answerView'>
        <div className='studentQuiz_anwserBox' id="answerAlt_A" onClick={() => answerQuestion(0)}><p>{answerAlt[0]}</p></div>
        <div className='studentQuiz_anwserBox' id="answerAlt_B" onClick={() => answerQuestion(1)}><p>{answerAlt[1]}</p></div>
        <div className='studentQuiz_anwserBox' id="answerAlt_C" onClick={() => answerQuestion(2)}><p>{answerAlt[2]}</p></div>
        <div className='studentQuiz_anwserBox' id="answerAlt_D" onClick={() => answerQuestion(3)}><p>{answerAlt[3]}</p></div>
      </div>
    </div>
  )
}

export default QuizView