import React from "react";
import MessageBox from "./messagebox/MessageBox";
import UncontrolledExample from "./Carousel";
import BasicExample from "./Cards";


const Home = () => {
  return (
    <>
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
    <div className="home-main">
        {<div className="home-page-section-2">
            <div className="home-page-section-2-container">
                <div className="home-page-section-1-hmp-message">
                </div>
                <div className="home-page-section-1-hmp-image">
                    <img src="https://images.unsplash.com/photo-1592963219751-3800a144a41e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80" alt="" />
                </div>
            </div>
        </div>}
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
    </div>






  </>

  )
}

export default Home;