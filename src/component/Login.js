import React, { useState, useEffect } from 'react';
import SignUp from "./SignUp"

const Login = ({setLogIn, logIn, userName, setUserName, password, setPassword, newUser, setNewUser}) => {
    const[users, setUsers]=useState({})
    const[signUpMessage, setSignUnMessage] = useState(false)
    useEffect(()=>{
        fetch('http://localhost:9292/users')
        .then(req=> req.json())
        .then(res =>setUsers(res))
    },[])

    const handleUser = (e) =>{
        setUserName(e.target.value)
    }

    const handlePassword =(e) =>{
        setPassword(e.target.value)
    }
    
    const handleLoggIn = (e) =>{
        e.preventDefault()
        console.log("workd")
        setUserName(e.target.value)
        setPassword(e.target.value)
        console.log(userName, password)
        const inputUser = users.find((user) => user.login === userName)
        console.log(inputUser)
        if (inputUser) {
            if (inputUser.password !== password) {
                alert(`invalid password for ${userName}`)
            } else {
                setLogIn(!logIn)
            }
        } else {
            setSignUnMessage(!signUpMessage)
        }
    }


    return (
            <>
                {logIn ? <h1>Hello {userName} vgjfgjfgjgf</h1> : (
                    <>
                    <div className="container-fluid ps-md-0">
                    <div className="row g-0">
                        <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
                        <div className="col-md-8 col-lg-6">
                        <div className="login d-flex align-items-center py-5">
                            <div className="container">
                            <div className="row">
                                <div className="col-md-9 col-lg-8 mx-auto">
                                {signUpMessage ? (
                                    <h3 className="login-heading mb-4">We can't find user name in our base. Please try one more time or sign up. </h3>
                                    ):(
                                    <h3 className="login-heading mb-4">Welcome back!</h3>) }
                                
                                <form onSubmit={handleLoggIn}>
                                    <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingInput" placeholder="User Name" value={userName} onChange={handleUser}/>
                                    <label htmlFor="floatingInput">User Name</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={password} onChange={handlePassword}/>
                                    <label htmlFor="floatingPassword">Password</label>
                                    </div>

                                    <div className="form-check mb-3">
                                    <input className="form-check-input" type="checkbox" value="" id="rememberPasswordCheck"/>
                                    <label className="form-check-label" for="rememberPasswordCheck">
                                        Remember password
                                    </label>
                                    </div>

                                    <div className="d-grid">
                                    <button className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2" type="submit">Sign in</button>
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
                    </div>
                    </>)}
            </>
    )}


export default Login