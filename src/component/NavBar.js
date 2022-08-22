import React from "react";
import { NavLink } from "react-router-dom";


const NavBar = ({LogIn}) => {
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
        {LogIn ? <div></div> : 
            <NavLink
                to="/login"
                exact
                className="navbar-btn"
                >
                Login
            </NavLink>}
        </div>
    </div>
  );
}

export default NavBar;