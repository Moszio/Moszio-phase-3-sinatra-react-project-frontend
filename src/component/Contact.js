import React from 'react'
import Footer from './Footer'

function Contact() {
  return (
    <>
      <div>
        <section id='contact-page'>
          <div className='container'>
            <h3 className='text-center text-uppercase'>contact us</h3>
            <p className='text-center w-75 m-auto'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              interdum purus at sem ornare sodales. Morbi leo nulla, pharetra
              vel felis nec, ullamcorper condimentum quam.
            </p>
            <div className='row'>
              <div className='col-sm-12 col-md-6 col-lg-4 my-5'>
                <div className='card border-0'>
                  <div className='card-body text-center'>
                    <i
                      className='fa fa-mobile-screen-button fa-5x mb-3'
                      aria-hidden='true'
                    ></i>
                    <h4 className='text-uppercase mb-5'>call us</h4>
                    <p>
                      Phone: 630-586-6332 <br /> Fax: 630-552-4962
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-sm-12 col-md-6 col-lg-4 my-5'>
                <div className='card border-0'>
                  <div className='card-body text-center'>
                    <i
                      className='fa fa-map-marker fa-5x mb-3'
                      aria-hidden='true'
                    ></i>
                    <h4 className='text-uppercase mb-5'>office loaction</h4>
                    <address>
                      13769 Main Street, <br /> Suite 107, <br /> Lemont, IL
                      60439{' '}
                    </address>
                  </div>
                </div>
              </div>
              <div className='col-sm-12 col-md-6 col-lg-4 my-5'>
                <div className='card border-0'>
                  <div className='card-body text-center'>
                    <i
                      className='fa fa-envelopes-bulk fa-5x mb-3'
                      aria-hidden='true'
                    ></i>
                    <h4 className='text-uppercase mb-5'>email</h4>
                    <p>nemanja@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94264.96076118188!2d19.219130241016845!3d42.41112902570051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134de8079606867d%3A0x6bf78a76ea588ae9!2sPodgorica%2C%20Montenegro!5e0!3m2!1sen!2sus!4v1661688204326!5m2!1sen!2sus'
            frameBorder='0'
            className='map-location'
            referrerPolicy='no-referrer-when-downgrade'
            title='GoogleMaps'
          ></iframe>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Contact
