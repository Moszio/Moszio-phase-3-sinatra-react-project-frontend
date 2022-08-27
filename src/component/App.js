// src/components/App.js
import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import NavBar from "./NavBar";
import Contact from './Contact'
import Getaquote from "./Getaquote";
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css'  
import Footer from "./Footer";





const App = () => {
  const[logIn, setLogIn] = useState(false)
  // use state used in Login Component
  const[userEmail, setUserEmail]=useState('')
  const[password, setPassword]=useState('')
  const[newUser, setNewUser]=useState(false)




  return (
    <>
      <NavBar logIn={logIn} setLogIn={setLogIn} userEmail={userEmail} setUserEmail={setUserEmail}
          password={password} setPassword={setPassword} newUser={newUser}  setNewUser={setNewUser}/>
      <Switch>
        <Route exact path="/about">
          <About />
        </Route>

        <Route exact path="/quote">
          <Getaquote/>
        </Route>
        
        <Route exact path="/contact">
          <Contact />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
