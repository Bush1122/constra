import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import logo from '../img/logo.png';

function FixNav() {
  return (
    <div>
    <div className='container-fluid bg-light'> 
       <div className='container bg-light'>
          <div className='row mb-4 p-2'>
            <div className='col-7 d-flex align-items-center'>
              <FontAwesomeIcon icon={faMapMarkerAlt}  className='text-dark'/>
              <span className="ml-4 text-warning">9051 Constra Incorporate, USA</span>
            </div>
            <div className='col-4 justify-content-end'>
                <div className='row'>
                    <div className='col mt-2'> <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} className='text-dark' />
                    </a></div>
                    <div className='col mt-2'>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} className='text-dark' />
                </a>
                    </div>
                    <div className='col mt-2'>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTwitter} className='text-dark' />
                </a>
                    </div>
                    <div className='col mt-2'>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} className='text-dark' />
                </a>
                    </div>
                </div>
             
            </div>
          </div>
          </div>
          </div>
          <div className='container'>
            <div className='row'>
                <div className='col'>
                <img src={logo} className='img-fluid' alt="logo"    style={{ height: '33px', width: 'auto' } }/>

                </div>
                <div className='col mt-1 border-start border-3s'>
                  <h6>Call Us</h6>
                  <small>(+9) 847-291-4353</small>
                </div>

                <div className='col mt-1 border-start border-3s'>
                  <h6>Email Us</h6>
                  <small>office@Constra.com </small>
                </div>

                <div className='col mt-1 border-start border-3s'>
                  <h6>Global Certificate</h6>
                  <small>ISO 9001:2017</small>
                </div>
                <div className='col border-start border-3s'>
                 <button className='btn btn-warning'>Get a Quote</button>
                </div>


            </div>

          </div>
        </div>
       
  );
}

export default FixNav;
