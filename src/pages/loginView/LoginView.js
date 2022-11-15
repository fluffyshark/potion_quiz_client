import React, { useState } from 'react'
import axios from "axios"
import "./loginView.css"
import { useNavigate } from 'react-router-dom'
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

    const navigate = useNavigate()

    const handleChange = (e) => {
        // Send credentials to use for fetching user from database
        setCredentials(prev => ({...prev, [e.target.id]:e.target.value}))
    }


    const handleClick = async e => {
        e.preventDefault()
        try {
            const res = await axios.post("http://localhost:8800/server/auth/login", credentials)
            setUserQuizIDs(res.data.quizID);
            console.log(res.data)
            navigate("/quiz")
          } catch (err) {
            console.log("Login error", err)
          }
    }


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