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
              Want to get in touch? We'd love to hear from you. Here's how you
              can reach us...
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
        <Footer />
      </div>
    </>
  )
}

export default Contact
