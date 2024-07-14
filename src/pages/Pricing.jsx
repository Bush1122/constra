import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Footer from '../componenets/Footer'

function Pricing() {
  return <div>
       <div className='container-fluid main-page'>
        <div>
          <h2 className='text-center fw-bold display-2 text-light'>Pricing</h2>
        </div>
        <Breadcrumb className='text-light fw-bold'>
        <Breadcrumb.Item active className='text-light'>Home</Breadcrumb.Item>
          <Breadcrumb.Item active className='text-light'>Company</Breadcrumb.Item>
          <Breadcrumb.Item active className='text-light'>Pricing</Breadcrumb.Item>
        </Breadcrumb>
     
      </div>
    <div className='container mt-4 my-4'>
      <h6>GRAB THE PACKAGES</h6>
      <h2>PRICING</h2>
      <div className='row '> 
        <div className='col text-light'> 
        <div className=' p-5  bg-dark' style={{ height: '200px' }}>
      <h3>BUILDING REMODELS</h3>
      <h6>$89.9 /MONTH</h6>
    </div>
          <div className='bg-light p-1 text-dark'>
            <p className='p-2 bg-light'>Project Management for Owners </p>
            <hr/>
            <p className='p-2 bg-light'>Pre-construction feasibility</p>
            <hr/>
            <p className='p-2 bg-light'>On-site representation</p>
            <hr/>
            <p className='p-2 bg-light'>Quality control inspections</p>
            <hr/>
            <p className='p-2 bg-light'>Schedule claim preparation/defense</p>
            <hr/>
            <p className='p-2 bg-light'>Project phasing development</p>
            <hr/>
            <p className='p-2 bg-dark btn btn-dark text-light'>Order Now</p>
            <hr/>

          </div>

        </div>


        <div className='col'> 
        <div className=' p-5  bg-warning text-light' style={{ height: '200px' }}>
      <h3>RENOVATION</h3>
      <h6>$89.9 /MONTH</h6>
    </div>
          <div className='bg-light p-1 text-dark '>
            <p className='p-2 bg-light'>Project Management for Owners </p>
            <hr/>
            <p className='p-2 bg-light'>Pre-construction feasibility</p>
            <hr/>
            <p className='p-2 bg-light'>On-site representation</p>
            <hr/>
            <p className='p-2 bg-light'>Quality control inspections</p>
            <hr/>
            <p className='p-2 bg-light'>Schedule claim preparation/defense</p>
            <hr/>
            <p className='p-2 bg-light'>Project phasing development</p>
            <hr/>
            <p className='p-2 bg-warning btn btn-dark text-light'>Order Now</p>
            <hr/>

          </div>

        </div>
        <div className='col'> 
        <div className=' p-5  bg-dark text-light' style={{ height: '200px' }}>
      <h3>HOME CONSTRUCTION</h3>
      <h6>$89.9 /MONTH</h6>
    </div>
          <div className='bg-light p-1 text-dark '>
            <p className='p-2 bg-light'>Project Management for Owners </p>
            <hr/>
            <p className='p-2 bg-light'>Pre-construction feasibility</p>
            <hr/>
            <p className='p-2 bg-light'>On-site representation</p>
            <hr/>
            <p className='p-2 bg-light'>Quality control inspections</p>
            <hr/>
            <p className='p-2 bg-light'>Schedule claim preparation/defense</p>
            <hr/>
            <p className='p-2 bg-light'>Project phasing development</p>
            <hr/>
            <p className='p-2 bg-dark btn btn-dark text-light'>Order Now</p>
            <hr/>

          </div>

        </div>

      </div>

    </div>
    <Footer/>


  </div>;
}

export default Pricing;
