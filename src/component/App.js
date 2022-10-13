// src/components/App.js

import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import NavBar from './NavBar'
import Contact from './Contact'
import Getaquote from './Getaquote'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <>
      <div className='contact-top-nav bg-light'>
        <div>
          <div>
            <i className='fa-solid fa-phone-flip'></i> 630-586-6332
          </div>
        </div>
        <div>
          <div>
            <i className='fa-solid fa-envelope'></i> nemanja@gmail.com
          </div>
        </div>
      </div>
      <NavBar />
      <Switch>
        <Route exact path='/quote'>
          <Getaquote />
        </Route>

        <Route exact path='/contact'>
          <Contact />
        </Route>

        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </>
  )
}

export default App
