import React from "react";

import { Link } from 'react-router-dom'



const NavBar = () => {

    return (
        <div class="m-4">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <Link to="/" className="navbar-brand" ><h1 style={{fontWeight: '900'}}>FFS Logistics</h1></Link>
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse nav justify-content-end" id="navbarCollapse">
                        <div className="navbar-nav">
                                <>

                                <Link to="/" className="nav-item nav-link active" id="Home">Home</Link>
                                


                                <Link to="/contact" className="nav-item nav-link" id="Contact">Contact</Link>

                                <Link to="/about" className="nav-item nav-link">About</Link>
                                <Link to="/login" className="nav-item nav-link">Get a Quote</Link>
                                </>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
  );
}

export default NavBar;




