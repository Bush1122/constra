import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import testimonials1 from '../img/testimonial3.png';
import testimonials2 from '../img/team2.jpg';
import testimonials3 from '../img/testimonial1.png';
import './pages.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Footer from '../componenets/Footer'
import BackToTopButton from '../componenets/BackToTopButton';

function OverPeople() {
  return (
    <div>
       <div className='container-fluid main-page'>
        <div>
          <h2 className='text-center fw-bold display-2 text-light'>Over Peoples</h2>
        </div>
        <Breadcrumb className='text-light fw-bold'>
        <Breadcrumb.Item active className='text-light'>Home</Breadcrumb.Item>
          <Breadcrumb.Item active className='text-light'>Company</Breadcrumb.Item>
          <Breadcrumb.Item active className='text-light'>Over Peoples</Breadcrumb.Item>
        </Breadcrumb>
     
      </div>
      <div className="container my-5 py-4 mt-4">
        <div className="row mt-5 py-4">
          <div className="col d-flex flex-column justify-content-center align-items-center h-100">
            <h2 className="fs-5 fw-bold text-dark text-center border-start border-3 ps-3  border-warning  ">OUR LEADERSHIPS</h2>
           
          </div>
        </div>
        <div className="row mt-5 py-4">
          <div className="col-md-6 col-lg-4 py-2 mb-4 wow fadeIn" data-wow-delay="0.1s">
            <div className="feature-item d-flex flex-column">
              <div className="mb-2">
                <img src={testimonials1} className="img-fluid" alt="Daniel Graham" />
              </div>
              <div className="p-2 flex-grow-1">
                
                <span className="mt-2 fw-bold">Master Chef</span>
                <h5 className="mb-2">Daniel Graham</h5>
                <p className="mb-0 mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia animi ipsam obcaecati.</p>
              </div>
              <div className="row justify-content-center p-3">
                <div className="col-1 text-center">
                  <FontAwesomeIcon icon={faFacebook} size="lg" color="black" className="FontAwesomeIcon-chef" />
                </div>
                <div className="col-1 text-center">
                  <FontAwesomeIcon icon={faLinkedin} size="lg" color="black" className="FontAwesomeIcon-chef" />
                </div>
                <div className="col-1 text-center">
                  <FontAwesomeIcon icon={faTwitter} size="lg" color="black" className="FontAwesomeIcon-chef" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 py-2 mb-4 wow fadeIn" data-wow-delay="0.3s">
            <div className="feature-item d-flex flex-column">
              <div className="mb-2">
                <img src={testimonials2} className="img-fluid" alt="Nick Browning" />
              </div>
              <div className="p-2 flex-grow-1">
             
                <span className="mt-2 fw-bold">Master Chef</span>
                <h5 className="mb-2">Nick Browning</h5>
                <p className="mb-0 mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia animi ipsam obcaecati.</p>
              </div>
              <div className="row justify-content-center p-3">
                <div className="col-1 text-center">
                  <FontAwesomeIcon icon={faFacebook} size="lg" color="black" className="FontAwesomeIcon-chef" />
                </div>
                <div className="col-1 text-center">
                  <FontAwesomeIcon icon={faLinkedin} size="lg" color="black" className="FontAwesomeIcon-chef" />
                </div>
                <div className="col-1 text-center">
                  <FontAwesomeIcon icon={faTwitter} size="lg" color="black" className="FontAwesomeIcon-chef" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 py-2 mb-4 wow fadeIn" data-wow-delay="0.5s">
            <div className="feature-item d-flex flex-column">
              <div className="mb-2">
                <img src={testimonials3} className="img-fluid" alt="Willium Jack" />
              </div>
              <div className="p-2 flex-grow-1">
               
                <span className="mt-2 fw-bold">Master Chef</span>
                <h5 className="mb-2">Willium Jack</h5>
                <p className="mb-0 mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia animi ipsam obcaecati.</p>
              </div>
              <div className="row justify-content-center p-3">
                <div className="col-1 text-center">
                  <FontAwesomeIcon icon={faFacebook} size="lg" color="black" className="FontAwesomeIcon-chef" />
                </div>
                <div className="col-1 text-center">
                  <FontAwesomeIcon icon={faLinkedin} size="lg" color="black" className="FontAwesomeIcon-chef" />
                </div>
                <div className="col-1 text-center">
                  <FontAwesomeIcon icon={faTwitter} size="lg" color="black" className="FontAwesomeIcon-chef" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BackToTopButton/>
    <Footer/>
    </div>
  );
}

export default OverPeople;
