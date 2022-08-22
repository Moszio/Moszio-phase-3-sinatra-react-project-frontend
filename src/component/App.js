// src/components/App.js
import React, { useState, useEffect } from 'react';
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import NavBar from "./NavBar";
import "./App.css"




const App = () => {
  const[LogIn, setLogIn] = useState(false)
  return (
    <div id="navbar-main-div">
      <NavBar LogIn={LogIn}/>
      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/login">
          <Login setLogIn={setLogIn} />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
