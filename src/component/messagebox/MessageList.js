import Message from "./Message"


const MessageList = ({messages}) => {
    return (
        <div className="message-list">
            <ul>
                {messages.map((message) => {
                   return <Message key={message.id} message={message}/>
                })}
            </ul>
        </div>
    )
}


export default MessageList