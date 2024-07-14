
import React, { useState } from 'react';
import './pages.css';
import CustomCarousel from './CustomCarousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake, faUsers } from '@fortawesome/free-solid-svg-icons';
import Safety from '../componenets/Safety';
import Customservice from '../componenets/Customservice';
import TotalEm from '../componenets/TotalEm';
import Speciallist from'../componenets/Speciallist';

import Testimontal from '../componenets/Testimontal';
import client1 from '../img/client1.png';
import client2 from '../img/client2.png';
import client3 from '../img/client3.png';
import client4 from '../img/client4.png';
import client5 from '../img/client5.png';
import client6 from '../img/client6.png';
import Footer from '../componenets/Footer'




function Home() {
  

  return (
    <div>
      <div className="container-fluid home-page text-dark">
        <CustomCarousel />
      </div>
      <div className='card bg-warning border mx-auto my-4 main-session-card p-2' style={{ maxWidth: '65rem' }}>
      <div className='card-body'>
        <div className='row'>
          <div className='col-md-6'>
            <h5 className='card-title text-light'>WE UNDERSTAND YOUR NEEDS IN CONSTRUCTION</h5>
          </div>
          <div className='col-md-6 d-flex align-items-center justify-content-md-end justify-content-center mt-3 mt-md-0'>
            <button className="btn btn-dark text-light fw-bold">Contact Us</button>
          </div>
        </div>
      </div>
    </div>


    <div className='container'>
      <div className='row'>
        <div className='col align-items-left ndservice '>
          <h5 className='text-left'>ABOUT US</h5>
          <h3 className='text-left fw-bold '>WE DELIVER LANDMARK PROJECTS</h3>
          <p className=''>We are rethoric question ran over her cheek When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane.</p>
    

       <div className='row mt-2 p-1'>
        <div className='col p-2'>
          <div className='row'>
            <div className='col'> <FontAwesomeIcon icon={faHandshake} size="2x" className="text-warning" /></div>
            <div className='col'> <h6>GUIDED BY COMMITMENT</h6></div>
            <div className='col'><FontAwesomeIcon icon={faUsers} size="2x" className="text-warning" /></div>
            <div className='col'><h6>A TEAM OF PROFESSIONALS</h6></div>

          </div>


        </div>


       </div>
        </div>
        <div className='col ndservice'>
         <div className='OUR VALUES'>
          <h5 className='fw-bold'>OUR VALUES</h5>
          <p>Minim Austin 3 wolf moon scenester aesthetic, umami odio pariatur bitters. Pop-up occaecat taxidermy street art, tattooed beard literally.</p>
          </div>
         <div className='container mt-2'>
         <Safety/>
         </div>
         <div className='container mt-2'><Customservice/></div>
        </div>


      </div>

    </div>

    <div className='container-fluid mt-4 bg-dark py-4 '>
      <TotalEm/>
    </div>
    <div className='container-fluid mt-t py-4'>
      <Speciallist/>

    </div>
    <div className='container-fluid mt-3 my-2 py-2'>
      <div className='row'>
        <div className='col-4 p-3 bg-warning text-light'>
          <h4>CAN WE HELP?</h4>
          <h6>(+9) 847-291-4353</h6>
          </div>
          <div className='col-8 p-3 bg-dark text-light'>
            <h4>NEWSLETTER SIGN-UP</h4>
            <h6>Latest updates and news</h6>
          </div>

      </div>
    </div>

    <div className='container mt-t py-4'>
      <div className='row'>
      <div className='col'>
        <h3 className='fw-bold text-left ndservice'>TESTIMONIALS</h3>
        <Testimontal/>

      </div>
      <div className='col'>
        <h3 className='fw-bold'>
        HAPPY CLIENTS
        </h3>
        <div className='row p-2'> 
          <div className='col mt-2  p-3'> 

          <img src={client1} className='img-fluid' alt="project1" width={90} height={90} />

          </div>
          <div className='col p-3'> 
          <img src={client2} className='img-fluid' alt="project1" width={90} height={90} />

          </div>
          <div className='col p-3'> 
          <img src={client3} className='img-fluid' alt="project1" width={90} height={90} />

          </div>

        </div>


        <div className='row p-2'> 
          <div className='col mt-2  p-3'> 

          <img src={client4} className='img-fluid' alt="project1" width={90} height={90} />

          </div>
          <div className='col p-3'> 
          <img src={client5} className='img-fluid' alt="project1" width={90} height={90} />

          </div>
          <div className='col p-3'> 
          <img src={client6} className='img-fluid' alt="project1" width={90} height={90} />

          </div>

        </div>



       

      </div>

      
      </div>
     

    </div>


    


    <Footer/>

  </div>
  );
}

export default Home;
