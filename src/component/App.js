// src/components/App.js

import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import NavBar from "./NavBar";
import Contact from './Contact'
import Getaquote from "./Getaquote";
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css'  





const App = () => {

  return (
    <>
      <div className="contact-top-nav bg-light">
        <div>
          <p><i className="fa-solid fa-phone-flip"></i> +8801683615582</p>
        </div>
        <div>
          <p><i className="fa-solid fa-envelope"></i> nemanja@gmail.com</p>
        </div>
      </div>
      <NavBar/>
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
