import { Link } from 'react-router-dom'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaTwitterSquare } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer-basic bg-light'>
      <footer>
        <div className='social'>
          <a href='https://www.facebook.com/'>
            <FaFacebookSquare />
          </a>
          <a href='https://www.linkedin.com/'>
            <FaTwitterSquare />
          </a>
          <a href='https://www.instagram.com/'>
            <FaInstagram />
          </a>
        </div>
        <ul className='list-inline'>
          <li className='list-inline-item'>
            <Link to='/' className='nav-item nav-link active' id='Home'>
              Home
            </Link>
          </li>
          <li className='list-inline-item'>
            <Link to='/contact' className='nav-item nav-link' id='Contact'>
              Contact
            </Link>
          </li>

          <li className='list-inline-item'>
            <Link to='/quote' className='nav-item nav-link'>
              Get a Quote
            </Link>
          </li>
        </ul>
        <p className='copyright'>FFS Logistics © 2022</p>
      </footer>
    </div>
  )
}

export default Footer
