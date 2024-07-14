import React from 'react';
import testimonials1 from '../img/testimonial3.png';
import testimonials2 from '../img/team2.jpg';
import testimonials3 from '../img/testimonial1.png';
import testimonials4 from '../img/team4.jpg';
import './Overlay.css';

function Professional() {
  return (
    <div>
      <div className='container mt-5 mb-4 p-4 text-center'>
        <p>QUALITY SERVICE</p>
        <h2>PROFESSIONAL TEAM</h2>
      </div>

      <div className="container mt-4 mb-5">
        <div className='row'>
          <div className="col-md-3 mb-4">
            <div className='card'>
              <img src={testimonials1} className="card-img-top img-fluid" alt="testimonial1" />
              <div className="card-img-overlay d-flex flex-column justify-content-end overlay">
                <div className="overlay-text">
                  <p className="card-title text-warning">Nats Stenmen</p>
                  <small className="card-text  text-light">Chief Operating Officer</small>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className='card'>
              <img src={testimonials2} className="card-img-top img-fluid" alt="team2" />
              <div className="card-img-overlay d-flex flex-column justify-content-end overlay">
                <div className="overlay-text">
                  <p className="card-title text-warning">Nomanee pal</p>
                  <small className="card-text  text-light">Sale Mnager</small>
              
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className='card'>
              <img src={testimonials3} className="card-img-top img-fluid" alt="testimonial2" />
              <div className="card-img-overlay d-flex flex-column justify-content-end overlay">
                <div className="overlay-text">
                  <p className="card-title text-warning">Angela</p>
                  <small className="card-text text-light">Fiance Officer</small>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className='card'>
              <img src={testimonials4} className="card-img-top img-fluid" alt="team4" />
              <div className="card-img-overlay d-flex flex-column justify-content-end overlay">
                <div className="overlay-text">
                  <p className="card-title text-warning">Rahfoh</p>
                  <small className="card-text text-light">Sale officer</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Professional;
