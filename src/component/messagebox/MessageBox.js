import MessageList from "./MessageList"
import Header from "./Header"
import NewMessage from "./NewMessage"
import "./MessageBox.css"
import { useState, useEffect } from "react"


const MessageBox = () => {
    const [messages, setMessages] = useState([])

    useEffect = (() => {
        fetch(url)
        .then(res = res.json())
        .then((data) = setMessages(data))
    }, [])

    return (
        <div className="chatbox-container">
            <Header />
            <MessageList />
            <NewMessage />
        </div>
    )
}

export default MessageBox 