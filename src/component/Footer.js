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
            {/* Created by:  Andor / Agnes */}
            
            {logIn ? ( 
                <BsFillChatDotsFill onClick={openChat} style={{size: '50px'}} />
            ):(<></>)}
        </div>
    )
}

export default Footer;