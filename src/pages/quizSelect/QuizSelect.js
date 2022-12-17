import React from 'react'
import "./quizSelect.css"
import { useSelector, useDispatch } from "react-redux"
import {motion} from "framer-motion"
import { select_one_quiz } from '../../redux/QuizReducer'
import { useNavigate } from 'react-router-dom'

// NEXT - SEND QUIZ TO SERVER AND SOCKET IT OUT TO ALL PLAYERS WHEN THEY JOIN GAME

function QuizSelect() {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const quizList = useSelector((state) => state.quiz.value)


  function chooseQuiz(index) {

    console.log("click")
    dispatch(select_one_quiz([quizList[index]]))
    navigate("/host")
  }


  return (
    <div className='quizSelect'>
        <p>SELECT QUIZ</p>
        <div className="quizSelect_container">
          
        {quizList.map((quiz, i) => {
          return (
            <motion.div whileHover={{ scale: 0.99 }} whileTap={{ scale: 0.96 }} transition={{ type: "spring", stiffness: 400, damping: 17 }} key={i} className="quizSelect_quizBoxBtn">
              <div className="quizSelect_quizBoxBtn_title" onClick={() => {chooseQuiz(i)}}>{quiz.quizName}</div>
            </motion.div>
          )
        })}
          

        </div>
    </div>
  )
}

export default QuizSelect