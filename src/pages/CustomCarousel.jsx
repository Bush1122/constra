import React from 'react';
import { Carousel } from 'react-bootstrap';
import './pages.css';
import BackToTopButton from '../componenets/BackToTopButton';

const CustomCarousel = () => {
  return (
    <Carousel className=" container-fluid custom-carousel">
      <Carousel.Item style={{ height: '500px' }} className="mt-4 p-4 py-4">
        <div className="container-fluid text-dark">
          <div>
            <h1 className="mt-2 p-2">17 Year Excellent</h1>
          </div>
          <h4 className="mt-2 p-2">Construction Industry</h4>

          <div className="row mt-2 p-2">
            <div className='col-4'></div>
            <div className="col-1">
              <button type="button" className="btn btn-warning btn-lg">Services</button>
              </div>
              <div className='col-2'>
              <button className="btn btn-outline-warning text-light btn-2 ">Contact Us</button>
               </div>
               <div className='col-4'></div>
          </div>
        </div>
        <BackToTopButton/>
      </Carousel.Item>
      
      <Carousel.Item style={{ height: '500px' }} className="mt-4 p-4 py-4 ">
        <div className="container-fluid text-dark text-left d-flex flex-column  ndservice">
          <div className='row'>
            <div className='col-3 '>
              <h5 className='bg-warning text-light p-3 mt-2'>World class Services</h5>
            </div>
          </div>
          <div className='row'>
            <div className='col-4 text-left'>
              <h3 className="mt-2 text-light p-1">When Services matter</h3>
            </div>
          </div>

          <div className='row'>
            <div className='col text-left'>
              <h2 className=" text-light p-2 display-2 fw-bold justify-content-start nd-service">Your Choice is sample</h2>
            </div>
          </div>
          <div className="row mt-2 p-2">
            <div className="col">
              <button type="button" className="btn btn-outline-warning text-light">Services</button>
            </div>
          </div>
        </div>
      </Carousel.Item>
     
    </Carousel>
   
  );
};

export default CustomCarousel;
