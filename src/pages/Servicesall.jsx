import React, { useState } from 'react';
import './pages.css';
import ServiceCarousel from '../componenets/ServiceCarousel';
import testimonials1 from '../img/testimonial3.png';
import BackToTopButton from '../componenets/BackToTopButton';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Footer from '../componenets/Footer'

function ServicesAll() {
    const [activeCategory, setActiveCategory] = useState('homeconstruction');

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
    };

    return (
        <div>
             <div className='container-fluid main-page'>
        <div>
          <h2 className='text-center fw-bold display-2 text-light'>Services All</h2>
        </div>
        <Breadcrumb className='text-light fw-bold'>
        
          <Breadcrumb.Item active className='text-light'>Home</Breadcrumb.Item>
          <Breadcrumb.Item active className='text-light'>Services All</Breadcrumb.Item>
         
        </Breadcrumb>
     
      </div>
            <div className='container mt-4 p-4'>
                <div className='row'>
                    <div className='col-3 ndservice'>
                        <h6 className='border-start border-3 ps-3 ndservice border-warning'>SOLUTIONS</h6>
                        
                        <div className='py-2 my-2 mt-2'>
                            <h6 
                                onClick={() => handleCategoryClick('homeconstruction')} 
                                className={`p-3 text-center ${activeCategory === 'homeconstruction' ? 'Show-all' : ''}`}
                            >
                                Home Construction
                            </h6>
                        </div>

                        <div className='py-2 my-2 mt-2'>
                            <h6 
                                onClick={() => handleCategoryClick('buildingconstruction')} 
                                className={`p-3 text-center ${activeCategory === 'buildingconstruction' ? 'Show-all' : ''}`}
                            >
                                Building Remodels
                            </h6>
                        </div>

                        <div className='py-2 my-2 mt-2'>
                            <h6 
                                onClick={() => handleCategoryClick('Interiordesign')} 
                                className={`p-3 text-center ${activeCategory === 'Interiordesign' ? 'Show-all' : ''}`}
                            >
                                Interior Design
                            </h6>
                        </div>

                        <div className='py-2 my-2 mt-2'>
                            <h6 
                                onClick={() => handleCategoryClick('SafetyManagement')} 
                                className={`p-3 text-center ${activeCategory === 'SafetyManagement' ? 'Show-all' : ''}`}
                            >
                                Safety Management
                            </h6>
                        </div>

                        <div className="card border-warning text-center p-3">
              <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.</p>
              <img src={testimonials1} className="img-fluid mx-auto d-block" alt="project2" width={70} height={70} />
              <h6 className="text-warning">Qamar Naveed</h6>






                        
                        
                        </div>
                    </div>
                    <div className='col'>
                        <div className='container '> 
                            {activeCategory === 'homeconstruction' && (
                                <div>
                                    <h4 className='ndservice'>Home Construction</h4>
                                    <div className='ndservice m-4 '> 
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer adipiscing erat eget risus sollicitudin pellentesque et non erat. Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan ipsum. Pellentesque ultrices ultrices sapien.< br/>

Nam scelerisque tristique dolor vitae tincidunt. Aenean quis massa uada mi elementum elementum. , nec tincidunt nunc posuere ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo iaculis ligula, ac dapibus quam ornare ut. Praesent ac hendrerit sem, et tempus sem</p>
                                    </div>
                                     <div className='container'> <ServiceCarousel/></div>

                                </div>
                                  
                            )}
                        </div>
                        <div className='container mt-4'> 
                            {activeCategory === 'buildingconstruction' && (
                                <div>
                                  <h4 className='ndservice'>Building Construction</h4>
                                    <div className='ndservice m-4 '> 
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer adipiscing erat eget risus sollicitudin pellentesque et non erat. Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan ipsum. Pellentesque ultrices ultrices sapien.< br/>

Nam scelerisque tristique dolor vitae tincidunt. Aenean quis massa uada mi elementum elementum. , nec tincidunt nunc posuere ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo iaculis ligula, ac dapibus quam ornare ut. Praesent ac hendrerit sem, et tempus sem</p>
                                    </div>
                                     <div className='container'> <ServiceCarousel/></div>
                                </div>
                            )}
                        </div>
                        <div className='container mt-4'> 
                            {activeCategory === 'Interiordesign' && (
                                <div>
                                     <h4 className='ndservice'>Interior design</h4>
                                    <div className='ndservice m-4 '> 
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer adipiscing erat eget risus sollicitudin pellentesque et non erat. Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan ipsum. Pellentesque ultrices ultrices sapien.< br/>

Nam scelerisque tristique dolor vitae tincidunt. Aenean quis massa uada mi elementum elementum. , nec tincidunt nunc posuere ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo iaculis ligula, ac dapibus quam ornare ut. Praesent ac hendrerit sem, et tempus sem</p>
                                    </div>
                                     <div className='container'> <ServiceCarousel/></div>
                            
                                </div>
                            )}
                        </div>
                        <div className='container mt-4'> 
                            {activeCategory === 'SafetyManagement' && (
                                <div>
                                 <h4 className='ndservice'>Safety Management</h4>
                                    <div className='ndservice m-4 '> 
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer adipiscing erat eget risus sollicitudin pellentesque et non erat. Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan ipsum. Pellentesque ultrices ultrices sapien.< br/>

Nam scelerisque tristique dolor vitae tincidunt. Aenean quis massa uada mi elementum elementum. , nec tincidunt nunc posuere ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo iaculis ligula, ac dapibus quam ornare ut. Praesent ac hendrerit sem, et tempus sem</p>
                                    </div>
                                     <div className='container'> <ServiceCarousel/></div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <BackToTopButton/>
            <Footer/>
        </div>
    );
}

export default ServicesAll;
