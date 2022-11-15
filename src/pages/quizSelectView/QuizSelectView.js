import React, { useEffect } from 'react'
import "./quizSelectView.css"
import { motion } from "framer-motion";

function QuizSelectView() {


    // Store user created quizes in usersQuiz state
    function filterUsersQuiz() {

        // Only run if data is fetched (not empty)
        if (data.length > 0) {
            
            let userQuizNested = []
            let userOwnedQuiz = []
            
            // Sort the quizes that the user created into an array (create a nested array)
            userQuizID.map((quiz) => {
                userQuizNested.push(data.filter(quiz1 => quiz1._id === quiz))
            })
        
            // Remove the array nesting
            for (let i = 0; i < userQuizNested.length; i++) {
                userOwnedQuiz[i] = userQuizNested[i][0]
            }
            console.log("userOwnedQuiz", userOwnedQuiz)
            // Store user created quiz in state
            setUsersQuiz(userOwnedQuiz)
        }
    } // End of filterUsersQuiz()


    useEffect(() => {
        filterUsersQuiz()
    }, [])



  return (
    <div className='quizView'>

        <div className="quizView_container">
            <div className="quizView_wrapper">
                

                <div className="quizView_title">YOUR QUIZZES</div>
                
                
                
                <Link to="/createquiz/" style={{textDecoration:"none"}}><motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 200, damping: 40 }} className="quizView_createQuizBtn">
                    <div className="quizView_createQuizBtn_iconSection">
                        <img src={newIcon} alt="" />
                    </div>
                    <div className="quizView_createQuizBtn_textSection"><p>Create a new quiz</p></div>
                </motion.div></Link>  
                
                {usersQuiz.includes(undefined) ? ("") : (

                <div className="quizView_quizBtn_container" >
                
                
                    {usersQuiz.map((quiz) => {
                                
                        return (
                                
                            <div key={quiz._id}>
                                <div className="quizView_quizBtn">
                                    <div className="quizView_quizBtn_iconSection">
                                        <motion.img whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.75 }} transition={{ type: "spring", stiffness: 200, damping: 40 }} src={playIcon} alt="" />
                                    </div>
                                    <div className="quizView_quizBtn_textSection"><p>{quiz.quizName}</p></div>
                                </div>
                                    
                                <div id="quizView_quizBtn_reportcard_container" className="quizView_quizBtn_reportcard_container">
                                    <div className="quizView_quizBtn_reportcard"><p>Report</p><p>2022-09-30</p></div>
                                        
                                </div>
                            </div>
                               
                        )
                            
                        })

                    }
           
                </div>

                )}

            </div>
        </div>
        
    </div>
  )
}

export default QuizSelectView