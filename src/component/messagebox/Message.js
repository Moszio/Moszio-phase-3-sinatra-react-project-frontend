const Message = (message) => {

    console.log(message)
    return (
        <div>
            <li>{message.message.owner} {message.message.sent_at}</li>
            <li>{message.message.body}</li>
        </div>
        
    )
}

export default Message