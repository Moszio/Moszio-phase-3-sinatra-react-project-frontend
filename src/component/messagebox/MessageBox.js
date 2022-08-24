import MessageList from "./MessageList"
import Header from "./Header"
import NewMessage from "./NewMessage"
import "./MessageBox.css"
import { useState, useEffect, useRef } from "react"


const MessageBox = ({userLogInName}) => {
    const [messages, setMessages] = useState([])
    const dummy = useRef()

    useEffect(() => {
        fetch('http://localhost:9292/messages')
        .then(req => req.json())
        .then((res) => setMessages(res))
    }, [])



    const handleNewMessages = (newMessage) => {
    setMessages([...messages, newMessage]);
    }

    const handleDeleteMessage = (id) => {
    const updatedMessages = messages.filter((message) => message.id !== id);
    setMessages(updatedMessages);
    }

    return (
        <div className="container d-flex justify-content-center">
            <div /*className="card mt-5"*/>
                <Header />
                <MessageList 
                    messages={messages} 
                    userLogInName={userLogInName}
                    handleDeleteMessage={handleDeleteMessage}
                    dummy={dummy}
                    setMessages={setMessages}
                    />
                <NewMessage 
                    handleNewMessages={handleNewMessages}
                    userLogInName={userLogInName}
                    dummy={dummy}
                    />
                
            </div>
        </div>
    )
}

export default MessageBox 