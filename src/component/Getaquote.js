import Form from 'react-bootstrap/Form';

function FormDisabledInputExample() {
  return (

    <div className="container-fluid ps-md-0">
        
                    <div className="row g-0">
                       
                        
                        <div className="login d-flex align-items-center py-5">
                            
                        <video autoPlay muted loop id="myVideo">
                        <source src="https://cdn.videvo.net/videvo_files/video/free/2019-02/large_watermarked/190111_09_BangkokPort_Drone_10_preview.mp4" type="video/mp4"/>
                        </video>
    
                            <div className="container">
                                
                            <div className="row">
                                
                                <div className="col-md-9 col-lg-8 mx-auto">
                                {/*signUpMessage ? (
                                    <h3 className="login-heading mb-4">We can't find user name in our base. Please try one more time or sign up. </h3>
                                    ):(
                                    <h3 className="login-heading mb-4">Welcome back!</h3>) */}
                            
                                <form>
                                    <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingInput" placeholder="User email" />
                                    <label htmlFor="floatingInput">Address email</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                    <label htmlFor="floatingPassword">Password</label>
                                    </div>

                                    <div className="form-check mb-3">
                                    <input className="form-check-input" type="checkbox" value="" id="rememberPasswordCheck"/>
                                    <label className="form-check-label" htmlFor="rememberPasswordCheck">
                                        Remember password
                                    </label>
                                    </div>

                                    <div className="d-grid">
                                    <button className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2" type="submit">Log in</button>
                                    <div className="text-center">
                                        <a className="small" href="#">Forgot password?</a>
                                    </div>
                                    </div>

                                </form>
                                </div>
                           
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
  );
}

export default FormDisabledInputExample;