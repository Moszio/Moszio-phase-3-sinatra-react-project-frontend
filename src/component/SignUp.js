import React, { useState, useEffect } from "react";


const SignUp = () => {
    const[newName, setNewName]=useState('')
    const handleNewName = (e) =>{
        setNewName(e.target.value)
    }
    const[newLastName, setNewLastName]=useState('')
    const handleNewLastName = (e) =>{
        setNewLastName(e.target.value)
    }    

    const[newEmail, setNewEmail]=useState('')
    const handleNewEmail = (e) =>{
        setNewEmail(e.target.value)
    }

    const[newUserName, setNewUserName]=useState('')
    const handleNewUserName =(e)=>{
        setNewUserName(e.target.value)
    }

    const[password1, setPassword1]=useState('')
    const handlePassword1 = (e)=>{
        setPassword1(e.target.value)
    }

    const[password2, setPassword2]=useState('')
    const handlePassword2 = (e)=>{
        setPassword2(e.target.value)
    }
    console.log(newName, newLastName, newEmail, newUserName, password1, password2)

    const handleNewUser = (e) =>{
        e.preventDefault()
        // FINISHED HERE handle submiting form
    }



    // t.string "name"
    // t.string "lastName"
    // t.string "contact"
    // t.string "login"
    // t.string "password"

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
                    <h3 className="login-heading mb-4">Welcome back!</h3>
                    <form onSubmit={handleNewUser}>
                        <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder="User Name" value={newName} onChange={handleNewName}/>
                        <label for="floatingInput">Name</label>
                        </div>

                        <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder="User Name" value={newLastName} onChange={handleNewLastName}/>
                        <label for="floatingInput">Last Name</label>
                        </div>

                        <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" value={newEmail} onChange={handleNewEmail}/>
                        <label for="floatingInput">Email address</label>
                        </div>

                        <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder="User Name" value={newUserName} onChange={handleNewUserName}/>
                        <label for="floatingInput">User Name</label>
                        </div>     

                        <div className="form-floating mb-3">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={password1} onChange={handlePassword1}/>
                        <label for="floatingPassword">Password</label>
                        </div>

                        <div className="form-floating mb-3">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={password2} onChange={handlePassword2}/>
                        <label for="floatingPassword">Confirm Password</label>
                        </div>

                        <div className="form-check mb-3">
                        <input className="form-check-input" type="checkbox" value="" id="rememberPasswordCheck"/>
                        <label className="form-check-label" for="rememberPasswordCheck">
                            Remember password
                        </label>
                        </div>

                        <div className="d-grid">
                        <button className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2" type="submit">Sign in</button>
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

export default SignUp