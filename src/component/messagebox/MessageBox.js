import MessageList from "./MessageList"
import Header from "./Header"
import NewMessage from "./NewMessage"
import "./MessageBox.css"
import { useState } from "react"


const MessageBox = () => {

    return (
        <div className="chatbox-container">
            <Header />
            <MessageList />
            <NewMessage />
        </div>
    )
}

export default MessageBox 