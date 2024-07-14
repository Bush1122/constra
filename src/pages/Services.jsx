import React from 'react';
import { Link } from 'react-router-dom';
import service1 from '../img/service1.jpg';
import service2 from '../img/service2.jpg';
import service3 from '../img/service3.jpg';
import service4 from '../img/service4.jpg';
import service5 from '../img/service5.jpg';
import service6 from '../img/service6.jpg';
import icon1 from '../img/service-icon1.png';
import icon2 from '../img/service-icon2.png';
import icon3 from '../img/service-icon3.png';
import icon4 from '../img/service-icon4.png';
import icon5 from '../img/service-icon5.png';
import icon6 from '../img/service-icon6.png';
import BackToTopButton from '../componenets/BackToTopButton';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Footer from '../componenets/Footer'

function Services() {
  return (
    <div>
      <div className='container-fluid main-page'>
        <div>
          <h2 className='text-center fw-bold display-2 text-light'>Services</h2>
        </div>
        <Breadcrumb className='text-light fw-bold'>
        
          <Breadcrumb.Item active className='text-light'>Home</Breadcrumb.Item>
          <Breadcrumb.Item active className='text-light'>Services</Breadcrumb.Item>
         
        </Breadcrumb>
     
      </div>
      <div className="container mt-4">
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src={service1} alt="Service 1" className="card-img-top" />
            <div className="card-body">
              <div className="d-flex align-items-start">
                <img src={icon1} alt="logo" className="img-fluid mr-3" style={{ height: '30px', width: 'auto' }} />
                <div>
                  <h6>HOME CONSTRUCTION</h6>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Integer adipiscing erat</p>
                  <Link to="/Servicesall" className="text-decoration-none">
                    <h6  className='text-dark'>
                      Read more <FontAwesomeIcon icon={faArrowRight} style={{ color: '#ffc107' }} />
                    </h6>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src={service2} alt="Service 2" className="card-img-top" />
            <div className="card-body">
              <div className="d-flex align-items-start">
                <img src={icon2} alt="logo" className="img-fluid mr-3" style={{ height: '30px', width: 'auto' }} />
                <div>
                  <h6>BUILDING REMODELS</h6>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Integer adipiscing erat</p>
                  <Link to="/Servicesall" className="text-decoration-none">
                    <h6  className='text-dark'>
                      Read more <FontAwesomeIcon icon={faArrowRight} style={{  color: '#ffc107' }} />
                    </h6>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src={service3} alt="Service 3" className="card-img-top" />
            <div className="card-body">
              <div className="d-flex align-items-start">
                <img src={icon3} alt="logo" className="img-fluid mr-3" style={{ height: '30px', width: 'auto' }} />
                <div>
                  <h6 className=''>INTERIOR DESIGN</h6>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Integer adipiscing erat</p>
                  <Link to="/Servicesall" className="text-decoration-none">
                    <h6  className='text-dark'>
                      Read more <FontAwesomeIcon icon={faArrowRight} style={{  color: '#ffc107' }} />
                    </h6>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src={service4} alt="Service 4" className="card-img-top" />
            <div className="card-body">
              <div className="d-flex align-items-start">
                <img src={icon4} alt="logo" className="img-fluid mr-3" style={{ height: '30px', width: 'auto' }} />
                <div>
                  <h6>EXTERIOR DESIGN</h6>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Integer adipiscing erat</p>
                  <Link to="/Servicesall" className="text-decoration-none">
                    <h6  className='text-dark'>
                      Read more <FontAwesomeIcon icon={faArrowRight} style={{ color: '#ffc107' }} />
                    </h6>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src={service5} alt="Service 5" className="card-img-top" />
            <div className="card-body">
              <div className="d-flex align-items-start">
                <img src={icon5} alt="logo" className="img-fluid mr-3" style={{ height: '40px', width: 'auto' }} />
                <div>
                  <h6>SAFETY MANAGEMENT</h6>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Integer adipiscing erat</p>
                  <Link to="/Servicesall" className="text-decoration-none">
                    <h6  className='text-dark'>
                      Read more <FontAwesomeIcon icon={faArrowRight} style={{  color: '#ffc107'}} />
                    </h6>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src={service6} alt="Service 6" className="card-img-top" />
            <div className="card-body">
              <div className="d-flex align-items-start">
                <img src={icon6} alt="logo" className="img-fluid mr-3" style={{ height: '40px', width: 'auto' }} />
                <div>
                  <h6>RENOVATION</h6>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Integer adipiscing erat</p>
                  <Link to="/Servicesall" className="text-decoration-none">
                    <h6 className='text-dark'>
                      Read more <FontAwesomeIcon icon={faArrowRight} style={{  color: '#ffc107' }} />
                    </h6>
                  </Link>
                </div>
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

export default Services;
