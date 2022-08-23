// src/components/App.js
import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import NavBar from "./NavBar";

import "./App.css"
import SignUp from "./SignUp"
import 'bootstrap/dist/css/bootstrap.min.css'  




const App = () => {
  const[logIn, setLogIn] = useState(false)
  // use state used in Login Component
  const[userName, setUserName]=useState('')
  const[password, setPassword]=useState('')
  const[newUser, setNewUser]=useState(false)

  return (
    <>
      <NavBar logIn={logIn} setLogIn={setLogIn} userName={userName} setUserName={setUserName}
          password={password} setPassword={setPassword} newUser={newUser} setNewUser={setNewUser}/>
      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/login">
          <Login setLogIn={setLogIn} logIn={logIn} userName={userName} setUserName={setUserName}
          password={password} setPassword={setPassword} newUser={newUser} setNewUser={setNewUser}/>
        </Route>
        <Route exact path="/signUp">
          <SignUp />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      
    </>
  );
}

export default App;
