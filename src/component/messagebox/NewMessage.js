import { useState } from "react"

const NewMessage = ({ handleNewMessages }) => {

    const[body, setMessageData] = useState("")

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
                body: body,
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
        <div className="new-message">
        <form action="" onSubmit={postUrl}>
            <input type="text" placeholder="message"  onChange={(e) => setMessageData(e.target.value)}/>
            <button>Send</button>
        </form>
        </div>
    )
}

export default NewMessage