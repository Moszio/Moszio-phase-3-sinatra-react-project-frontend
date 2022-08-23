import React from "react";
import { NavLink } from "react-router-dom";


const NavBar = ({logIn, setLogIn, setUserEmail, setPassword, setUserLogInName}) => {

    const logOut = () =>{
            console.log("logout")
            setUserEmail("")
            setPassword("")
            setLogIn(!logIn)
            // USER CAN LOG IN ANDOR return to home page
    }
  return (

<nav className="navbar navbar-expand-lg navbar-light bg-light" style={{position:"fixed",width:"100%", top:"0"}}>

  <div className="container-fluid">

    <button
      className="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars"></i>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">

      <a className="navbar-brand mt-2 mt-lg-0" href="#">
        <img
          src="./home/agnesk/Development/phase-3/Project-phase-3/Moszio-phase-3-sinatra-react-project-frontend/public/Logo.jpg"
          height="15"
          alt=""
          loading="lazy"
        />
      </a>

      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">About</a>
        </li>
        
        {logIn ?  
            <>
            <li className="nav-item">
                <a className="nav-link" href="/login" onClick={logOut}>Log out</a>
            </li>
            </> 
            : 
            <>
            <li className="nav-item">
                <a className="nav-link" href="/signup">Sign up</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/login">Log in</a>
            </li>
            </>}
      </ul>

    </div>
  </div>

</nav>
  
  );
}

export default NavBar;




