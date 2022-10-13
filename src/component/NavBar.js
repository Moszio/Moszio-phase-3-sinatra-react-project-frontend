import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  /*const history = useHistory()

    const clickToGoToHomepage = () => {
        history.push("/")
    }*/

  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container-fluid'>
          <Link to='/'>
            <img
              src='../../Logo.jpg'
              alt='company-logo'
              style={{ width: '100px' }}
            />
          </Link>
          <Link to='/' className='navbar-brand'>
            <h1 style={{ fontWeight: '900' }}>FFS Logistics</h1>
          </Link>
          <button
            type='button'
            className='navbar-toggler'
            data-bs-toggle='collapse'
            data-bs-target='#navbarCollapse'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div
            className='collapse navbar-collapse nav justify-content-end'
            id='navbarCollapse'
          >
            <div className='navbar-nav'>
              <>
                <Link to='/' className='nav-item nav-link active' id='Home'>
                  Home
                </Link>
                <Link to='/contact' className='nav-item nav-link' id='Contact'>
                  Contact
                </Link>
                <Link to='/about' className='nav-item nav-link'>
                  About
                </Link>
                <Link to='/quote' className='nav-item nav-link'>
                  Get a Quote
                </Link>
              </>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
