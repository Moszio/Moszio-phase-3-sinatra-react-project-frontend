import React from "react";
import { NavLink } from "react-router-dom";


const NavBar = ({logIn, setLogIn, setUserName, setPassword}) => {

    const logOut = () =>{
            console.log("logout")
            setUserName("")
            setPassword("")
            setLogIn(!logIn)
    }
  return (
    
    <div className="navbar">
        <div className="navbar-company-name">
            <p>FFS Logistic</p>
        </div>
        <div>
            <img src="./Logo.jpg" alt="compnay-logo" className="navbar-company-logo"/>
        </div>
        <div className="navbar-btn-container">
        <NavLink
            to="/"
            exact
            className="navbar-btn"
        >
            Home
        </NavLink>
        <NavLink
            to="/about"
            exact
            className="navbar-btn"
        >
            About
        </NavLink>

        </div>
    </div>
  );
}

export default NavBar;