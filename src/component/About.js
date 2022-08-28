import React from "react";
import Footer from "./Footer";

const About = () => {
  return <div>
    {/*<div className='screen'>
      <video autoPlay muted loop id="myVideo">
      <source src="https://cdn.videvo.net/videvo_files/video/free/2019-02/large_watermarked/190111_09_BangkokPort_Drone_10_preview.mp4" type="video/mp4"/>
      </video>
    </div>*/}
    
    
    <section id="about-us">
        <div class="container">
            <div class="row align-items-center">
                <div class="col">
                    <img style={{width:'120%'}} src='../../Logo.jpg'/>
                </div>
                <div class="col text-col" style={{fontSize:'15px', letterSpacing: ".1rem"}} >
                    <h2>Welcome to FFS Logistics</h2>
                    <br />
                    <p className="about-text-1">Our company for the last few years ensures that all the materials and personnel are in the right place at the right time to help a project or a business objective be accomplished. We specialize in managing a wide range of items.</p>
                    <div>
                    <div className="about-text-2-container"></div>
                    <div className="about-text-2-line"></div>
                    <p className="about-text-2">
                    If you decide to use our service logistics process involves the integration of material handling, information flow, production, packaging, transportation, inventory, warehousing, and security.
                    We have experienced staff who can help you by overseeing: purchasing, shipping and delivery, inventory, and warehousing. We use software systems to plan and monitor the movement of goods.
                    </p>
                    </div>
                </div>
            </div>
        </div>
    </section> 
    <div className="">
        
    </div>
    <Footer />
    </div>

  
    
}

export default About;
