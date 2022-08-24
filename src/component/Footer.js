import React, {useState} from "react";
import { BsFillChatDotsFill } from 'react-icons/bs';


const Footer = ({logIn, userLogInName}) => {
    const[isChatOpen, setIsChatOpen]=useState(false)
    const openChat = () =>{
        setIsChatOpen(!isChatOpen)
        console.log(userLogInName)
    }
    return (
        <div class="text-center p-4" style={{position:"fixed",width:"100%", bottom: "0"}}>
            
            {logIn ? ( 
                <BsFillChatDotsFill onClick={openChat} style={{float:"right"}}  />
            ):(<></>)}
        </div>
    )
}

export default Footer;