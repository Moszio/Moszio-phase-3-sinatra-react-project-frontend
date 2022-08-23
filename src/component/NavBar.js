import React from "react";
import { NavLink } from "react-router-dom";


const NavBar = ({logIn, setLogIn, setUserEmail, setPassword}) => {

    const logOut = () =>{
            console.log("logout")
            setUserEmail("")
            setPassword("")
            setLogIn(!logIn)
            // USER CAN LOGG IN ANDOR return to home page
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

        {logIn ?  
            <>
            <button className="navbar-btn" onClick={logOut}>Log out</button>
            </> 
            : 
            <>
            <NavLink
                to="/signUp"
                exact
                className="navbar-btn"
                >
                Sign Up
            </NavLink>
            <NavLink
                to="/login"
                exact
                className="navbar-btn"
                >
                Login
            </NavLink>
            </>}
        </div>
    </div>
  );
}

export default NavBar;