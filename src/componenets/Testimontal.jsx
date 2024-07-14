import React from 'react';
import { Carousel } from 'react-bootstrap';
import testimonials from '../img/testimonial1.png';
import '@fortawesome/fontawesome-free/css/all.min.css';
import testimonials1 from '../img/testimonial3.png';
import './Cm.css';

function Testimontal() {
  return (
    <div>
      <Carousel className="container-fluid custom-carousel mt-2">
        <Carousel.Item  className="" style={{ height: '300px' }}>
          <div className="ndservice p-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod ante auctor enim ultricies, a convallis magna fermentum. Nulla facilisi. Praesent tincidunt mauris eu mi fringilla, at tempor mi gravida.
          </div>
          <div className="row mt-2">
            <div className="col-4">
            <img src={testimonials} className="img-fluid" alt="project1" width={70} height={70} />
            </div>
            <div className="col-4">
              <h6 className="text-warning">Nats Stenmen</h6>
              <p>Chairman OKT</p>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item  className="" style={{ height: '300px' }}>
          <div className="ndservice p-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod ante auctor enim ultricies, a convallis magna fermentum. Nulla facilisi. Praesent tincidunt mauris eu mi fringilla, at tempor mi gravida.
          </div>
          <div className="row mt-2">
            <div className="col-4">
              <img src={testimonials1} className="img-fluid" alt="project1" width={70} height={70} />
            </div>
            <div className="col-4">
              <h6 className="text-warning">Argon</h6>
              <p>Chairman OKT</p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Testimontal;
