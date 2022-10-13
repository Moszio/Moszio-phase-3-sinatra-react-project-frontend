import Carousel from 'react-bootstrap/Carousel'

function UncontrolledExample() {
  return (
    <Carousel className='carousel-container'>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src='../../ship.avif'
          alt='First slide'
        />
        <Carousel.Caption>
          <h3>
            Drayage services of dry and temperature controlled containers from
            ports and rails.
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src='../../truck.avif'
          alt='Second slide'
        />

        <Carousel.Caption>
          <h3>
            Truckload services handled by our own 120 trucks + a netwrk of
            reliable carriers.
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src='../../handshake.avif'
          alt='Third slide'
        />
        <Carousel.Caption>
          <h3>Specialized services like expedited, cross docking, etc.</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default UncontrolledExample
