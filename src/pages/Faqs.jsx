import React from 'react';
import Construction from '../componenets/Construction';
import Safety1 from '../componenets/Safety1';
import BackToTopButton from '../componenets/BackToTopButton';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import new1 from '../img/news1.jpg';
import new2 from '../img/news2.jpg';
import new3 from '../img/news3.jpg';
import Footer from '../componenets/Footer'

function Faqs() {
  return <div>
      <div className='container-fluid main-page'>
        <div>
          <h2 className='text-center fw-bold display-2 text-light'>FAQ</h2>
        </div>
        <Breadcrumb className='text-light fw-bold'>
        <Breadcrumb.Item active className='text-light'>Home</Breadcrumb.Item>
          <Breadcrumb.Item active className='text-light'>Company</Breadcrumb.Item>
          <Breadcrumb.Item active className='text-light'>FAQ</Breadcrumb.Item>
        </Breadcrumb>
     
      </div>
    <div className='container mt-4 p-4 my-4'>
      <div className='row'>
        <div className='col-7'>
          <h3 className='ndservice'>CONSTRUCTION GENERAL</h3>
          <Construction/>
          <div className='mt-2 my-2'>
          <Construction/>
          </div>
          
          <h3 className='ndservice'>SAFETY</h3>
          <Safety1/>
          <div className='mt-2 my-2'>
          <Safety1/>
          </div>
          


        </div>
        <div className='col-5'>
          <h6 className=' text-dark ndservice border-start border-3 p-2  border-warning'>RECENT POSTS</h6>
          <div className='row'>
            <div className='col'>   <img src={new1} className="img-fluid" alt="project1" width={150} height={150} /></div>
            <div className='col'>
            <p className ='ndservice' > WE JUST COMPLETES $17.6 MILLION MEDICAL CLINIC IN MID-MISSOURI </p>
             
            </div>
             </div>
             <hr/>
             <div className='row'>
            <div className='col'>   <img src={new2} className="img-fluid" alt="project1" width={150} height={150} /></div>
            <div className='col'>
            <p className ='ndservice' > 
            THANDLER AIRPORT WATER RECLAMATION FACILITY EXPANSION PROJECT NAMED </p>
             
            </div>
             </div>
             <hr/>
             <div className='row'>
            <div className='col'>   <img src={new3} className="img-fluid" alt="project1" width={150} height={150} /></div>
            <div className='col'>
            <p className ='ndservice ' > 
            SILICON BENCH AND CORNIKE BEGIN CONSTRUCTION SOLAR FACILITIES </p>
             
            </div>
             </div>
             <hr/>



         </div>  

      </div>

    </div>
    <BackToTopButton/>
    <Footer/>
  </div>;
}

export default Faqs;
