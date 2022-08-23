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



    const handleNewMessages = (newMessage) => {
    setMessages([...messages, newMessage]);
    }

    const handleDeleteMessage = (id) => {
    const updatedMessages = messages.filter((message) => message.message.id !== id);
    setMessages(updatedMessages);
    }

    return (
        <div className="container d-flex justify-content-center">
            <div className="card mt-5">
                <Header />
                <MessageList 
                    messages={messages} 
                    
                    handleDeleteMessage={handleDeleteMessage}
                    />
                <NewMessage 
                    handleNewMessages={handleNewMessages}
                    />
            </div>
        </div>
    )
}

export default MessageBox 