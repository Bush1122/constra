
import React from 'react';
import Testimontal from '../componenets/Testimontal';
import TotalEm from '../componenets/TotalEm';
import Professional from '../componenets/Professional'
import BackToTopButton from '../componenets/BackToTopButton';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Footer from '../componenets/Footer'



function Company() {
 
  return <div>
     <div className='container-fluid main-page'>
        <div>
          <h2 className='text-center fw-bold display-2 text-light'>About us</h2>
        </div>
         <Breadcrumb className='text-light fw-bold'>
          <Breadcrumb.Item active className='text-light'>Home</Breadcrumb.Item>
          <Breadcrumb.Item active className='text-light'>Company</Breadcrumb.Item>
          <Breadcrumb.Item active className='text-light'>About us</Breadcrumb.Item>
        </Breadcrumb>
     
      </div>
    <div className='container mt-4 p-2'>
      <div className='row'>
        <div className='col'>
        <h5 className='text-left ndservice p-2'>WHO WE ARE</h5>
        <div  className='text-left ndservice'><small>when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.</small></div>
      
        <div> <p  className="border-start border-3 ps-3 p-3 border-warning bg-light" style={{ borderColor: 'red' }}>Semporibus autem quibusdam et aut officiis debitis aut rerum est aut optio cumque nihil necessitatibus autemn ec tincidunt nunc posuere ut</p></div>
        <div><small className='text-left ndservice' >He lay on his armour-like back, and if he lifted. ultrices ultrices sapien, nec tincidunt nunc posuere ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing.</small></div>
        </div>
       
          <div className='col'>
          <div className='container'>
          <h3 className='text-center p-2'>Lea<span className='text-warning'>der</span> Ship</h3>
            <Testimontal/>
          </div>
          </div>
        
      </div>
      <BackToTopButton/>
      
    </div>
    <div className='container-fluid'>  
      <div className='conatiner-fluid bg-dark  p-4 my-2 mt-4'>
        <TotalEm/>

      </div>

    </div>
    <div className='container-fluid'>
      <Professional/>
    </div>
    <Footer/>

  </div>;
}

export default Company;
