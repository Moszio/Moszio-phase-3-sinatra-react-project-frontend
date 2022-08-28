import React from "react";
import UncontrolledExample from "./Carousel";
import BasicExample from "./Cards";
import Footer from "./Footer";


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
                <div className="col">
                    <img style={{width:'120%'}} src='../../Logo.jpg'/>
                </div>
                <div className="col text-col" style={{fontSize:'20px', fontWeight: "bold" ,fontFamily: 'Merriweather', letterSpacing: ".1rem"}} >
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
    <Footer />
    </div>
  )
}

export default Home;