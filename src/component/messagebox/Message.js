import { useState,useEffect } from "react"



/* <div>
            <li>{message.message.owner} {message.message.sent_at}</li>
            <li>{message.message.body}</li>
        </div>*/

const Message = ({message, handleDeleteMessage, setMessages, userLogInName}) => {

const [updateMessage, setUpdateMessage] = useState();
const [collapse, setCollapse] = useState(true)





  useEffect(() => {
        fetch('http://localhost:9292/messages')
        .then(req => req.json())
        .then((res) => setMessages(res))
    }, [updateMessage, collapse])




  function handleFormSubmit(e) {
    e.preventDefault(); 

    fetch(`http://localhost:9292/messages/${message.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        body: updateMessage
      }),
    })
      .then(req => req.json())
      .then((data) => setUpdateMessage(data),
      handleCollapse(),
      );
    
  }


    const handleDeleteClick = () => {
    fetch(`http://localhost:9292/messages/${message.id}`, {
      method: "DELETE"
    });

    handleDeleteMessage(message.id)
    console.log("clicked", collapse)
  }

    const handleCollapse = () => {
      setCollapse((collapse) => !collapse)
      //console.log("clicked", collapse)
    }
    //"bg-white mr-2 p-3"
    //console.log(message.id)
    return (
        <div className="d-flex flex-row p-3">
        

        {collapse ? <div><p>{message.owner}</p>
        <div className={message.owner === userLogInName ? "chat ml-2 p-3" : "bg-white mr-2 p-3"} onClick={handleCollapse}>{message.body}</div></div> : <div>
        <button onClick={handleDeleteClick} className="delete-btn">Delete</button>
        <form className="edit-message" onSubmit={handleFormSubmit}>
            <input
            type="text"
            name="body"
            autoComplete="off"
            value={updateMessage}
            onChange={(e) => setUpdateMessage(e.target.value)}
            />
            <input type="submit" value="Update" />
        </form>
        </div>}
      </div>
    )
}

export default Message