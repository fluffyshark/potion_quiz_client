import React, {useState, useRef, useEffect} from 'react'
import "./timer.css"
import "./responsive/tablet.css"
import {EndGame} from "../../components/endGame/EndGame"



function Timer(dataFromHost) {

    const  intervalRef = useRef(null)
    const [timer, setTimer] = useState("00:00:00")
    const [userInput, setUserInput] = useState(0)
    const [timerActive, setTimerActive] = useState(false)
    
    let socket = dataFromHost.socket
    let gameCode = dataFromHost.gameCode
    
    function getTimeRemaining(endtime) {
        const total = Date.parse(endtime) - Date.parse(new Date())
        const seconds = Math.floor( (total/1000) % 60 )
        const minutes = Math.floor( (total/1000/60) % 60 )
        const hours = Math.floor( (total/1000*60*60) % 24 )
        const days = Math.floor( total/ (1000*60*60*24))
        return {
            total, days, hours, minutes, seconds
        }
    }
    function startTimer(deadline) {
        
        let { total, hours, minutes, seconds} = getTimeRemaining(deadline)
        if (total >= 0) {
            setTimer(
                (hours > 9 ? hours : '0'+hours) + ':' +
                (minutes > 9 ? minutes : '0'+minutes) + ':' +
                (seconds > 9 ? seconds : '0'+seconds)
                
            )
        } else {
            clearInterval(intervalRef.current)
            console.log("TIMER ENDED")
            timerEndGame()
        }
        
    }

    function timerEndGame() {
        // Host leave socket room and delete server-side game data
        socket.emit("host_end_game", gameCode);
        // Deletes game data from localStorage and sends to all players to leave socket room and delete their localStorage
        EndGame(socket, gameCode)
      }


    function clearTimer(endtime) {
        setTimer("00:00:00")
        if (intervalRef.current) clearInterval(intervalRef.current)
        const id = setInterval(() => {
            startTimer(endtime)
        }, 1000)
        intervalRef.current = id
    }  
    function getDeadlineTime() {
        let deadline = new Date()
        deadline.setSeconds(deadline.getSeconds()+userInput*60)
        return deadline
    }
    
    // HostView sends "dataFromHost" every second
    useEffect(() => {
        if (dataFromHost.startTimer === true && timerActive === false)  {
            setTimerActive(true)
            onClickResetBtn()
            document.getElementById("timer_container").style.display = "none"
            if (userInput !== 0) {
                document.getElementById("actual_timer").style.display = "inherit"
            } 
        }
    }, [dataFromHost])


    
    function onClickResetBtn() {
        if (userInput !== 0) {
            if (intervalRef.current) clearInterval(intervalRef.current)
            clearTimer(getDeadlineTime())
            console.log("TIMER RESETED")
        }
        
    }


/// IF SET TO TRUE => REMOVE INPUT & DISPLAY TIMER

  return ( <>
    <div id='timer_container'>
        <p className='timer_text'>END QUIZ IN</p>
        <input type="text" placeholder='0' onChange={(e) => setUserInput(e.target.value)}/>
        <p className='timer_text'>MINUTES</p>
    </div>
    <div id="actual_timer">
        {timer}
    </div>
  </>
    
  )
}

export default Timer