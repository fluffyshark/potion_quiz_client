import React, { useEffect, useState } from 'react'
import io from "socket.io-client"

const socket = io.connect("https://potion-quiz-server.herokuapp.com/")

function TestSocket() {
    const [room, setRoom] = useState("");
    const [message, setMessage] = useState("")
    const [messageReveiced, setMessageReveiced] = useState("")

    const joinRoom = () => {
        if (room !== "") {
          socket.emit("join_room", room);
        }
      };

      const sendMessage = () => {
        socket.emit("send_message", { message, room });
      };

    useEffect(() => {
        socket.on("receive_message", (data) => {
            setMessageReveiced(data.message)
        })
    }, [socket])

  return (
    <div>
        <input
        placeholder="Room Number..."
        onChange={(event) => {
          setRoom(event.target.value);
        }}
      />
      <button onClick={joinRoom}> Join Room</button>
        <input type="text" placeholder='Message...' onChange={(event) => {setMessage(event.target.value)}}/>
        <button onClick={sendMessage}>Send Message</button>
        <h1>MESSAGE</h1>
        {messageReveiced}
    </div>
  )
}

export default TestSocket