import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

import project1 from '../img/project1.jpg';
import project2 from '../img/project2.jpg';
import project3 from '../img/project3.jpg';
import project4 from '../img/project4.jpg';
import project5 from '../img/project5.jpg';
import project6 from '../img/project6.jpg';
import './Cm.css';

function ServiceCarousel() {
  return (
    <div>
      <Carousel className="container-fluid custom-carousel mt-2">
        <Carousel.Item style={{ height: '400px' }}>
          <img
            className="d-block w-100"
            src={project1}
            alt="First slide"
            style={{ height: '100%', objectFit: 'cover' }}
          />
         
        </Carousel.Item>

        <Carousel.Item style={{ height: '400px' }}>
          <img
            className="d-block w-100"
            src={project2}
            alt="Second slide"
            style={{ height: '100%', objectFit: 'cover' }}
          />
         
        </Carousel.Item>

        <Carousel.Item style={{ height: '400px' }}>
          <img
            className="d-block w-100"
            src={project3}
            alt="Third slide"
            style={{ height: '100%', objectFit: 'cover' }}
          />
          
        </Carousel.Item>

        <Carousel.Item style={{ height: '400px' }}>
          <img
            className="d-block w-100"
            src={project4}
            alt="Fourth slide"
            style={{ height: '100%', objectFit: 'cover' }}
          />
          
        </Carousel.Item>

        <Carousel.Item style={{ height: '400px' }}>
          <img
            className="d-block w-100"
            src={project5}
            alt="Fifth slide"
            style={{ height: '100%', objectFit: 'cover' }}
          />
         
        </Carousel.Item>

        <Carousel.Item style={{ height: '400px' }}>
          <img
            className="d-block w-100"
            src={project6}
            alt="Sixth slide"
            style={{ height: '100%', objectFit: 'cover' }}
          />
          
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ServiceCarousel;
