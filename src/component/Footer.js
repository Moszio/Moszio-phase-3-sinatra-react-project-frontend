import React, {useState} from "react";
import { Link } from "react-router-dom";

const Footer = ({logIn, userLogInName,openChat,isChatOpen}) => {
  
    return (
        <div class="text-center p-4" >
             <div className="footer">
            <div className="footer-top">

            </div>
            <div className="footer-bottom">
                                <>
                                <Link to="/" className="nav-item nav-link active" id="Home">Home</Link>
                                <Link to="/contact" className="nav-item nav-link" id="Contact">Contact</Link>
                                <Link to="/about" className="nav-item nav-link">About</Link>
                                <Link to="/login" className="nav-item nav-link">Log in</Link>
                                </>
            </div>
            </div>
        </div>
    )
}




export default Footer;