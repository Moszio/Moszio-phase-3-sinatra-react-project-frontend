import React from "react";
import Footer from "./Footer";

const About = () => {
  return <div className="about-page-main">

    
    <section id="about-us">
        <div className="container">
        </div>
    </section> 
    <div className="">
        <div className="container-fluid ps-md-0">
            <div className="row g-0">
            <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image-2"></div>
                <div className="col-md-8 col-lg-6">
                <div className="login d-flex align-items-center py-5">
                <div className="container">
                <div className="row">
                    <div className="col-md-9 col-lg-8 mx-auto">   
                        
                    <div className="col text-col" style={{fontSize:'15px', letterSpacing: ".1rem"}} >
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
                </div>
            </div>
            </div>
            </div>
        </div>
    </div>
    <Footer />
</div>
    

  
    
}

export default About;
