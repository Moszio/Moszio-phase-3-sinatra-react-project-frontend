import React, {useState} from "react";
import { BsFillChatDotsFill } from 'react-icons/bs';
import MessageBox from "./messagebox/MessageBox";

const Footer = ({logIn, userLogInName}) => {
    const[isChatOpen, setIsChatOpen]=useState(logIn === true ? false : true)

    const openChat = () =>{
        setIsChatOpen(!isChatOpen)
        console.log(userLogInName)
    }
    return (
        <div class="text-center p-4" style={{position:"fixed",width:"100%", bottom: "0"}}>
            {/* Created by:  Andor / Agnes */}
            {isChatOpen ? null : <MessageBox/>}
            
            {logIn ? ( 
                <BsFillChatDotsFill onClick={openChat}  />
            ):(<></>)}
        </div>
    )
}

export default Footer;