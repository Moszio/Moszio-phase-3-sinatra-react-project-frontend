import React from "react";

const Ship = () => {
  return (
<>
        <div className="container-fluid ps-md-0">
        <div className="row g-0">
            <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
            <div className="col-md-8 col-lg-6">
            <div className="login d-flex align-items-center py-5">
                <div className="container">
                <div className="row">
                    <div className="col-md-9 col-lg-8 mx-auto">
                    {/* <img src='../../Logo.jpg'/> */}
                    <h3 className="login-heading mb-4">Ship a package</h3>
                    <form >
                        <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder="User Name" />
                        <label htmlFor="floatingInput">Name</label>
                        </div>

                        <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder="User Name" />
                        <label htmlFor="floatingInput">Last Name</label>
                        </div>

                        <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email address</label>
                        </div>

                        <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder="User Name" />
                        <label htmlFor="floatingInput">User Name</label>
                        </div>     

                        <div className="form-floating mb-3">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                        </div>

                        <div className="form-floating mb-3">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Confirm Password</label>
                        </div>

                        <div className="form-check mb-3">
                        <input className="form-check-input" type="checkbox" value="" id="rememberPasswordCheck"/>
                        <label className="form-check-label" htmlFor="rememberPasswordCheck">
                            Remember password
                        </label>
                        </div>

                        <div className="d-grid">
                        <button className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2" type="submit">Sign up</button>
                        </div>
                        
                    </form>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        </>
  )
}

export default Ship;