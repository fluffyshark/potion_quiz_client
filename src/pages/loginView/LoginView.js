import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useDispatch } from "react-redux"
import "./loginView.css"
import { useNavigate } from 'react-router-dom'
import { add_all_quizzes } from "../../redux/QuizReducer"
import loginUserIcon from "../../image_assets/general/loginusericon.webp"
import passwordIcon from "../../image_assets/general/passwordicon.webp"



// NEXT - CONVERT AND ADD IMAGES TO QuizSelectVivew
// NEXT - GET QUIZ FROM DATABASE
// NEXT - CREAT REDUSER FOR QUIZ
// NEXT - STORE USER CREDENTALS IN App.js STATE


function LoginView() {

    const [credentials, setCredentials] = useState({
        username:undefined,
        password:undefined
    })

    const [userQuizIDs, setUserQuizIDs] = useState([])
    const [allQuiz, setAllQuiz] = useState([])

    const navigate = useNavigate()
    const dispatch = useDispatch()


    const handleChange = (e) => {
        // Send credentials to use for fetching user from database
        setCredentials(prev => ({...prev, [e.target.id]:e.target.value}))
    }



    const handleClick = async e => {
        e.preventDefault()
        try {
            const userRes = await axios.post("http://localhost:8800/server/auth/login", credentials)
            setUserQuizIDs(userRes.data.quizID);
            console.log(userRes.data)

            const quizRes = await axios.get("http://localhost:8800/server/quiz")
            setAllQuiz(quizRes.data);
            console.log(quizRes.data)

          } catch (err) {
            console.log("Login error", err)
          }
    }


    // When there is a change in allQuiz (quizzes has been fetched from database) then run function to filter only quizzez from logged in user
    useEffect(() => {
        filterUsersQuiz()
    }, [allQuiz])

    
    
    // Filter user quizzes from all quizzes and send to redux
    function filterUsersQuiz() {

        // Only run if data is fetched (not empty)
        if (allQuiz.length > 0) {
            
            let userQuizNested = []
            let userOwnedQuiz = []
            
            // Sort the quizes that the user created into an array (create a nested array)
            userQuizIDs.map((userQuizID) => {
                userQuizNested.push(allQuiz.filter(quiz1 => quiz1._id === userQuizID))
            })
        
            // Remove the array nesting
            for (let i = 0; i < userQuizNested.length; i++) {
                userOwnedQuiz[i] = userQuizNested[i][0]
            }
            // Send all users quiz to redux
            dispatch(add_all_quizzes(userOwnedQuiz))
            
            navigate("/quizselect")
        }
    } // End of filterUsersQuiz()




  return (
    <div className='loginView'>
            <div className="loginView_container">
                
                <div className="loginView_title"><p>Teacher Login</p></div>
                
                <div className="loginView_box">
                    <div className="loginView_box_box">
                        <div className="loginView_box_IconContainer"><img src={loginUserIcon} alt="" /></div>
                        <input id="username" type="text" placeholder='Email...' onChange={handleChange} />
                    </div>
                </div>

                <div className="loginView_box">
                    <div className="loginView_box_box">
                        <div className="loginView_box_IconContainer"><img src={passwordIcon} alt="" /></div>
                        <input id="password" type="password" placeholder='Password...' onChange={handleChange}/>
                    </div>
                </div>

                <div className="loginView_login_box">
                    <div className="loginView_loginBtn" onClick={handleClick}><p>Login</p></div>
                </div>

            </div>
        </div>
  )
}

export default LoginView