import React from "react";
import UncontrolledExample from "./Carousel";
import BasicExample from "./Cards";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-main">

        <div >
            <div className="carousel-container">
                <UncontrolledExample />
            </div>
        </div>
        <div >
          <div className="card-container">
            <BasicExample/>
            <BasicExample/>
            <BasicExample/>
          </div>
        </div>
        <section id="about-us">
        <div class="container">
            <div class="row align-items-center">
                <div class="col">
                    <img style={{width:'120%'}} src='../../Logo.jpg'/>
                </div>
                <div class="col text-col" style={{fontSize:'15px', fontWeight: "bold" ,fontFamily: 'Merriweather', letterSpacing: ".1rem"}} >
                    <p>Our company for the last few years ensures that all the materials and personnel are in the right place at the right time to help a project or a business objective be accomplished. We specialize in managing a wide range of items.
                    <br/>
                    <br/>
                    If you decide to use our service logistics process involves the integration of material handling, information flow, production, packaging, transportation, inventory, warehousing, and security.
                    We have experienced staff who can help you by overseeing: purchasing, shipping and delivery, inventory, and warehousing. We use software systems to plan and monitor the movement of goods.
                    </p>
                </div>
            </div>
        </div>
    </section>
    <div class="text-center p-4">
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
        
    </div>
  )
}

export default Home;