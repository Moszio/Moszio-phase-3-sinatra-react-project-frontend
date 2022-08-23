import Message from "./Message"


const MessageList = ({messages, handleDeleteMessage}) => {
    return (
        <div>
            <div>
                {messages.map((message) => {
                   return <Message 
                   key={message.id} 
                   message={message} 
                   handleDeleteMessage={handleDeleteMessage} 
                   /*handleUpdateMessage={handleUpdateMessage}*/
                   />
                })}
            </div>
        </div>
    )
}


export default MessageList