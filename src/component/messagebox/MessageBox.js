import MessageList from "./MessageList"
import Header from "./Header"
import NewMessage from "./NewMessage"
import "./MessageBox.css"
import { useState, useEffect } from "react"


const MessageBox = () => {
    const [messages, setMessages] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/messages')
        .then(req => req.json())
        .then((res) => setMessages(res))
    }, [])

    return (
        <div className="chatbox-container">
            <Header />
            <MessageList messages={messages}/>
            <NewMessage />
        </div>
    )
}

export default MessageBox 