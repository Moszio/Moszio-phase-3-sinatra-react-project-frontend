const Message = (message) => {

    console.log(message)
    return (
        <li>{message.message.body}</li>
    )
}

export default Message