import { useState } from "react"

/* <div className="new-message">
        <form action="" onSubmit={postUrl}>
            <input type="text" placeholder="message"  onChange={(e) => setMessageData(e.target.value)}/>
            <button>Send</button>
        </form>
        </div>*/

const NewMessage = ({ handleNewMessages }) => {

    const[messageData, setMessageData] = useState("")

    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    const postUrl = (e) => {
        e.preventDefault()
        fetch('http://localhost:9292/messages',{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                body: messageData,
                owner: "Andor",
                sent_at: time
            })
        })
        .then(req =>req.json())
        .then(data => 
            handleNewMessages(data),
            setMessageData("")
        )
    }


    return (

        <div className="form-group px-3">
            <form action="" onSubmit={postUrl}>
            <input type="text" placeholder="message"  onChange={(e) => setMessageData(e.target.value)}/>
            <button>Send</button>
            </form>
        </div>
    )
}

export default NewMessage