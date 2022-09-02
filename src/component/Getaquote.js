import React, { useRef } from 'react';
import emailjs from 'emailjs-com';


function Getaquote() {


const form = useRef();

const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
};


  return (

    <div className="container-fluid ps-md-0">
        
                        <div className="login d-flex align-items-center py-5">
                            
                        <video autoPlay muted loop id="myVideo">
                        <source src="../../get_quote.mp4" type="video/mp4"/>
                        </video>
    
                            <div className="container">
                                
                            <div className="row">
                                
                                <div className="col-md-9 col-lg-8 mx-auto">
                            
                                <form ref={form} onSubmit={sendEmail}>
                                    <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingInput" placeholder="Your Name*" />
                                    <label htmlFor="floatingInput">Your Name*</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                    <input type="password" className="form-control" id="floatingPassword" placeholder="Your email*" />
                                    <label htmlFor="floatingPassword">Your email*</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                    <textarea className="form-control" id="floatingInput" placeholder="Message*" />
                                    <label htmlFor="floatingInput">Message*</label>
                                    </div>
                                    <div className="d-grid">
                                    <button className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2" type="submit">Request a Quote</button>
                                    
                                    </div>

                                </form>
                                </div>
                           
                            </div>
                        </div>
                        </div>
                    </div>
                   
  );
}

export default Getaquote;