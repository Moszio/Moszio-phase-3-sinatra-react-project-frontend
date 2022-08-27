
import { Link } from "react-router-dom";
import {FaFacebookSquare} from 'react-icons/fa'
import {FaTwitterSquare} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'


const Footer = () => {
  
    return (
        
            <div className="footer">
              
            <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
       
            <div className="footer-top">
            <a href="" class="me-4 text-reset">
            <FaInstagram/>
            </a>
            <a href="" class="me-4 text-reset">
            <FaTwitterSquare/>
            </a>
            <a href="" class="me-4 text-reset">
            <FaFacebookSquare/>
            </a>
            </div>
            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

          <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i class="fas fa-home me-3"></i> New York, NY 10012, US</p>
          <p>
            <i class="fas fa-envelope me-3"></i>
            info@example.com
          </p>
          <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
          <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
        </div>
            </section>
                <div >
                    <div class="text-center p-4">
                    <p>© 2022 FFS Logistics Inc. All Rights Reserved <a href="#">Privacy Policy</a></p>
                    </div>
                    <div className="footer-links">
                    <Link to="/" className="nav-item nav-link active" id="Home">Home</Link>
                    <Link to="/contact" className="nav-item nav-link" id="Contact">Contact</Link>
                    <Link to="/about" className="nav-item nav-link">About</Link>
                    <Link to="/quote" className="nav-item nav-link">Get a Quote</Link>
                    </div>
                </div>
            </div>
        
    )
}




export default Footer;