import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';


function Getaquote() {
const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [message, setMessage] = useState("")

const form = useRef();

const handleResetMessage = () => {
    setMessage("")
    setEmail("")
    setName("")
}

const sendEmail = (e) => {
   e.preventDefault()

    emailjs.sendForm('service_jwq4k7s', 'template_wpe213i', form.current, 'csaTrSX49Eo0hAQao')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });

    alert('Email sent!')
    handleResetMessage()
    
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
                                    <input type="text" name='from_name' className="form-control" id="floatingInput" placeholder="Your Name*" value={name} onChange={(e) => setName(e.target.value)}/>
                                    <label htmlFor="floatingInput">Your Name*</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                    <input type="email" name='reply_to' className="form-control" id="floatingInput" placeholder="Your Email*" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                    <label htmlFor="floatingInput">Your email*</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                    <textarea className="form-control" name='message' id="floatingInput" placeholder="Message*" 
                                    value={message} onChange={(e) => setMessage(e.target.value)}
                                    />
                                    <label htmlFor="floatingInput">Message*</label>
                                    </div>
                                    <div className="d-grid">
                                    {
                                        name === "" || email ==="" || message === "" ? 
                                    
                                    <button disabled={!message} className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2" type="submit">Request a Quote</button> :
                                    <button className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2" type="submit">Request a Quote</button>
}
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