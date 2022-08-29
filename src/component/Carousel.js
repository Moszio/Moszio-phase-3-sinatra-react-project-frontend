import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <Carousel className='carousel-container'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../../ship.avif"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Logistics Freedom with <br/>continous improvement.</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../../truck.avif"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Everyday we work work hard to satisfy all of our customers.<br /> Wherever they may be.</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../../handshake.avif"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Relationships are at the core of everything we do.</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;