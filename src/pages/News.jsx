import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import new1 from '../img/news1.jpg';
import new2 from '../img/news2.jpg';
import new3 from '../img/news3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserShield, faFileAlt, faCommentDots } from '@fortawesome/free-solid-svg-icons';
import BackToTopButton from '../componenets/BackToTopButton';
import Footer from '../componenets/Footer'

function News() {
  return <div>
     <div className='container-fluid main-page'>
        <div>
          <h2 className='text-center fw-bold display-2 text-light'>New</h2>
        </div>
        <Breadcrumb className='text-light fw-bold'>
          
        <Breadcrumb.Item active className='text-light'>Company</Breadcrumb.Item>
          <Breadcrumb.Item active className='text-light'>News</Breadcrumb.Item>
        </Breadcrumb>
     
      </div>
      <div className="container ">
        <div className="row  ">
         
          <div className='col-4 mt-4'>
          <h6 className=' text-dark ndservice border-start border-3 p-3  border-warning'>RECENT POSTS</h6>
          <div className='row mt-4'>
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
            <div className='mt-4'>
            <h6 className=' text-dark ndservice border-start border-3 p-3  border-warning'>CATEGORIES</h6>
            <h6 className='ndservice'>Contruction</h6>
            <hr/>
            <h6 className='ndservice'>Buildling</h6>
            <hr/>
            <h6 className='ndservice'> Safety </h6>
            <hr/>
            <h6 className='ndservice'>Structure</h6>
            <hr/>
           

            </div>
            <h6 className=' text-dark ndservice border-start border-3 p-3  border-warning'>TAGS</h6>
            <div className='mt-4 my-2 row'>
              <div className='col-4'> 
                 <p className=' text-light bg-warning p-2'> Contruction </p>
               
             </div>
             <div className='col-4'> 
             <p className='text-light bg-warning p-2'> Design </p>
              </div>

              <div className='col-4'> 
             <p className='text-light bg-warning p-2'> Project </p>
              </div>

              <div className='col-4'> 
             <p className='text-light bg-warning p-2'> Safety </p>
              </div>

              <div className='col-4'> 
             <p className='text-light bg-warning p-2'> Building </p>
              </div>
              <div className='col-4'> 
             <p className='text-light bg-warning p-2'> Planing </p>
              </div>
            </div>

            <div className='mt-4'>
            <h6 className=' text-dark ndservice border-start border-3 p-3  border-warning'>ARCHIVES</h6>
            <h6 className='ndservice'>Feburay 2016</h6>
            <hr/>
            <h6 className='ndservice'>January 2016</h6>
            <hr/>
            <h6 className='ndservice'> December 2015</h6>
            <hr/>
            <h6 className='ndservice'>November 2015</h6>
            <hr/>
           

            </div>




          </div>
          </div>
          <div className='col-7 mt-5 py-2'>
            <div className='mt-5'>
          <img src={new2} className="img-fluid" alt="project1" width={800} height={1050} />
          <div className='row mt-2'>
            <div className='col-2 p-1 border-start border-1'> <FontAwesomeIcon icon={faUserShield} size="1x" className=" ml-3 text-warning" /> <small> Admin</small> </div>
            <div className='col-2 p-1 border-start border-1'><FontAwesomeIcon icon={faFileAlt} size="1x" className="ml-3  text-warning" /> <small>News</small></div>
            <div className='col-2 p-1 border-start border-1'> <FontAwesomeIcon icon={faCommentDots} size="1x" className="ml-3 text-warning" /><small>June-14,2016</small></div>
            

          </div>
            <h4 className='ndservice p-3 fw-bold '>We Just Completes $17.6 Million Medical Clinic In Mid-Missouri</h4>
            <p className='ndservice p-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur ...</p>
            <button className='btn btn-warning text-light'>Continous Reading</button>
         </div>
         <hr/>

         <div className='mt-5'>
          <img src={new3} className="img-fluid" alt="project1" width={800} height={1050} />
          <div className='row mt-2'>
          <div className='col-2 p-1 border-start border-1'> <FontAwesomeIcon icon={faUserShield} size="1x" className=" ml-3 text-warning" /> <small> Admin</small> </div>
            <div className='col-2 p-1 border-start border-1'><FontAwesomeIcon icon={faFileAlt} size="1x" className="ml-3  text-warning" /> <small>News</small></div>
            <div className='col-2 p-1 border-start border-1'> <FontAwesomeIcon icon={faCommentDots} size="1x" className="ml-3 text-warning" /><small>June-14,2016</small></div>
          </div>
            <h4 className='ndservice p-3 fw-bold'>Thandler Airport Water Reclamation Facility Expansion Project Named</h4>
            <p className='ndservice p-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur ...</p>
            <button className='btn btn-warning text-light'>Continous Reading</button>
         </div>
        




        </div>


        </div>

      </div>
      <BackToTopButton/>
     
    <Footer/>
  </div>
}

export default News;
