import React from "react";
import UncontrolledExample from "./Carousel";
import BasicExample from "./Cards";
import Footer from "./Footer";
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
          <div>
            <BasicExample/>
          </div>
        </div>
        <div className="section-off"></div>
        <section id="about-us">
        <div className="container">
          
            <div className="row align-items-center">
                <div></div>
                <div className="col">
                 <img style={{width:'120%'}} src='../../Logo.jpg' alt="company-logo"/>
                </div>
                <div className="col text-col" style={{fontSize:'20px', letterSpacing: ".1rem"}} >
                    <h2>Welcome to FFS Logistics</h2>
                    <br />
                    <p className="about-text-1">Why bother with those one-time headaches? Let White Star Logistics smooth your day, by de-stressing your workplace. That way you can focus on other areas to enhance your business.</p>
                    <div>
                    <div className="about-text-2-container"></div>
                    <div className="about-text-2-line"></div>
                    <p className="about-text-2">
                    We offer logistics and transportation services to companies with varied needs—anything from dedicated services to last minute shipments. Our customer base encompasses industries such as food, beverage, produce, manufacturing, retail, recycling, and much more.
                    </p>
                    <button className="about-us-btn"><Link to="/about" className="nav-item nav-link">About</Link></button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer />
    </div>
  )
}

export default Home;