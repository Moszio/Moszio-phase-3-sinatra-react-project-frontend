import { useState } from "react"



/* <div>
            <li>{message.message.owner} {message.message.sent_at}</li>
            <li>{message.message.body}</li>
        </div>*/

const Message = ({message, handleDeleteMessage}) => {

const [updateMessage, setUpdateMessage] = useState("");
const [collapse, setCollapse] = useState(true)

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
      .then((updatedMessage) => 
      setUpdateMessage(updatedMessage),
      setCollapse((collapse) => !collapse)
      );
  }


    const handleDeleteClick = () => {
    fetch(`http://localhost:9292/messages/${message.id}`, {
      method: "DELETE",
    });

    handleDeleteMessage(message.id);
    setCollapse((collapse) => !collapse)
  }

    const handleCollapse = () => {
      setCollapse((collapse) => !collapse)
      console.log("clicked", collapse)
    }

    //console.log(message.id)
    return (
        <div className="d-flex flex-row p-3">
        

        {collapse ? <div><img src="https://img.icons8.com/color/48/000000/circled-user-female-skin-type-7.png" alt="person"  width="30" height="30"/><p>{message.owner}</p>
        <div className="chat ml-2 p-3" onClick={handleCollapse}>{message.body}</div></div> : <div>
        <button onClick={handleDeleteClick}>Delete</button>
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