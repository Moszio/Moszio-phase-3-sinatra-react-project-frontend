import React from "react";
import { useHistory } from "react-router-dom";


const NavBar = ({logIn, setLogIn, setUserEmail, setPassword, setUserLogInName}) => {
    const history = useHistory()

    const clickToGoToHomepage = () => {
         history.push("/")
    }

    const logOut = () =>{
            console.log("logout")
            setUserEmail("")
            setPassword("")
            setLogIn(!logIn)
                
    }
    return (
        <div class="m-4">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a href="/" className="navbar-brand" >FFS Transportation</a>
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav">
                            <a href="/" className="nav-item nav-link active">Home</a>
                            <a href="/about" className="nav-item nav-link">About</a>
                            {logIn ?  
                                <>
                                    <a href="#" className="nav-item nav-link" >Ship a package</a>
                                    <a href="/" className="nav-item nav-link" onClick={logOut}>Log out</a>
                                </> 
                                : 
                                <>
                                <a href="/signup" className="nav-item nav-link">Sign up</a>
                                <a href="/login" className="nav-item nav-link">Log in</a>
                                </>}  
                        </div>
                    </div>
                </div>
            </nav>
        </div>
  );
}

export default NavBar;




