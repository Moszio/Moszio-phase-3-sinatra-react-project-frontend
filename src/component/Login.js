import React, { useState, useEffect } from 'react';


const Login = ({setLogIn}) => {
    const[users, setUsers]=useState({})
    const[userName, setUserName]=useState('')
    const[password, setPassword]=useState('')

    useEffect(()=>{
        fetch('http://localhost:9292/users')
        .then(req=> req.json())
        .then(res =>setUsers(res))
    },[])
    console.log(userName)
    const handleUser = (e) =>{
        setUserName(e.target.value)
    }
    const handlePassword =(e) =>{
        setPassword(e.target.value)
    }
    

    const handleLoggIn = (e) =>{
        e.preventDefault()
        setUserName(e.target.username.value)
        setPassword(e.target.password.value)
        console.log(userName, password)
        const inputUser = users.find((user) => user.login === userName)
        console.log(inputUser)
        if (inputUser) {
            if(inputUser.password !== password){
                alert(`invalid password for ${userName}`)
            } else{
                setLogIn(true)
            }
            
        }else {
            alert(`invalid username`)
        }

        
     
   
    }


    return (
        <div>
            <form onSubmit={handleLoggIn}>
                <div>
                <input type="text" name="username" placeholder="Username" onChange={handleUser} />
                </div>
                <div>
                <input type="password" name="password" placeholder="Password" onChange={handlePassword}/>
                </div>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}


export default Login