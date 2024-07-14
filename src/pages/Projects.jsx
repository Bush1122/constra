import React, { useState } from 'react';
import './pages.css';
import Commerical from '../componenets/Commerical'
import Education from '../componenets/Education';


import project2 from '../img/project2.jpg';
import project3 from '../img/project3.jpg';
import project1 from '../img/project1.jpg';
import project4 from '../img/project4.jpg';
import project5 from '../img/project5.jpg';
import project6 from '../img/project6.jpg';
import Footer from '../componenets/Footer'

function Projects() {
  const [activeCategory , setActiveCategory] = useState ('Project')

  const [isVisible, setIsVisible] = useState(false);

  const [clickedImages, setClickedImages] = useState(false);
  const [clickedImages1, setClickedImages1] = useState(false);
  const [clickedImages2, setClickedImages2] = useState(false);
  const [clickedImages3, setClickedImages3] = useState(false);
  const [clickedImages4, setClickedImages4] = useState(false);
  const [clickedImages5, setClickedImages5] = useState(false);

  const [showCommercial, setShowCommercial] = useState(false);
  const [showEducation, setShowEducation] = useState(false);


  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleClick = () => {
    setClickedImages(!clickedImages);
  };

  const handleClick1 = () => {
    setClickedImages1(!clickedImages1);
  };

  const handleClick2 = () => {
    setClickedImages2(!clickedImages2);
  };

  const handleClick3 = () => {
    setClickedImages3(!clickedImages3);
  };

  const handleClick4 = () => {
    setClickedImages4(!clickedImages4);
  };

  const handleClick5 = () => {
    setClickedImages5(!clickedImages5);
  };


  const handleCommercialClick = () => {
    setShowCommercial(!showCommercial);
    
  };

  const handleEducationClick = () => {
    setShowEducation(!showEducation);
  };
  
     const handleCategoryClick2 =(category) =>{
      setActiveCategory(category);
      
     }




  const handleCategoryClick = (category) => {
    if (category === 'COMMERCIAL') {
      setShowCommercial(true);
      setShowEducation(false);
      setIsVisible(false)

    } else if (category === 'EDUCATION') {
      setShowEducation(true);
      setShowCommercial(false);
      

    }else if (category === 'Project') {
      setShowEducation(false);
      setShowCommercial(false);
      setIsVisible(true)
    }
    
    else {
      setShowCommercial(false);
      setShowEducation(false);
      setIsVisible(true)
    }
  };






  return (
    <div>
      <div className='container mt-4'>
        <div className='row'>
          <div className='col'>
            <h6 onClick={() => handleCategoryClick2('Project')} className={activeCategory==='Project' ? 'Show-all' : ''}>SHOW ALL</h6>
          </div>
          <div className='col'> <h6 onClick={() => handleCategoryClick2('Project2')} className = {activeCategory==='Project2' ? `Show-all` : ''}> COMMERCIAL</h6>   </div>

          <div className='col'> <h6 onClick={() => handleCategoryClick2('Project3')} className={activeCategory==='Project3' ? `Show-all` : ''} >EDUCATION</h6></div>
          <div className='col'><h6>GOVERNMENT</h6></div>
          <div className='col'><h6>INFRASTRUCTURE</h6></div>
          <div className='col'><h6>RESIDENTIAL</h6></div>
        </div>
        <hr className='colored-hr mb-0 ' />
      </div>
      { activeCategory ==='Project' && (
        <div className='container no-gap bg-light'>
          <div className='row'>
            <div className='col' onMouseEnter={handleClick}>
              <div className={`img-container ${clickedImages ? 'Projectdata' : ''}`}>
                {clickedImages && (
                  <div className="container overlay-text0">
                    <div className='row py-4'>
                      <div className='col'>
                        <h5 className='text-warning mt-2 p-4'>Capital Beltway Building</h5>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col'>
                        <button className='btn btn-warning text-light'>COMMERCIAL, INTERIORS</button>
                      </div>
                    </div>
                  </div>
                )}
                <img src={project1} className='img-fluid' alt="project1" width={400} height={400} />
              </div>
            </div>

            <div className='col' onMouseEnter={handleClick1}>
              <div className={`img-container ${clickedImages1 ? 'Projectdata1' : ''}`}>
                {clickedImages1 && (
                  <div className="container overlay-text1">
                    <div className='row py-4'>
                      <div className='col'>
                        <h5 className='text-warning mt-2 p-4'>Ghum Touch Hospital</h5>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col'>
                        <button className='btn btn-warning text-light'>HEALTHCARE</button>
                      </div>
                    </div>
                  </div>
                )}
                <img src={project2} className='img-fluid' alt="project2" />
              </div>
            </div>

            <div className='col' onMouseEnter={handleClick2}>
              <div className={`img-container ${clickedImages2 ? 'Projectdata2' : ''}`}>
                {clickedImages2 && (
                  <div className="container overlay-text2">
                    <div className='row py-4'>
                      <div className='col'>
                        <h5 className='text-warning mt-2 p-4'>TNT East Facility</h5>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col'>
                        <button className='btn btn-warning text-light'>GOVERNMENT</button>
                      </div>
                    </div>
                  </div>
                )}
                <img src={project3} className='img-fluid' alt="project3" />
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col' onMouseEnter={handleClick3}>
              <div className={`img-container ${clickedImages3 ? 'Projectdata3' : ''}`}>
                {clickedImages3 && (
                  <div className="container overlay-text3">
                    <div className='row py-4'>
                      <div className='col'>
                        <h5 className='text-warning mt-2 p-4'>Narriott Beltway Building</h5>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col'>
                        <button className='btn btn-warning text-light'>COMMERCIAL, INTERIORS</button>
                      </div>
                    </div>
                  </div>
                )}
                <img src={project4} className='img-fluid' alt="project4" width={400} height={400} />
              </div>
            </div>

            <div className='col' onMouseEnter={handleClick4}>
              <div className={`img-container ${clickedImages4 ? 'Projectdata4' : ''}`}>
                {clickedImages4 && (
                  <div className="container overlay-text4">
                    <div className='row py-4'>
                      <div className='col'>
                        <h5 className='text-warning mt-2 p-4'>Kalas Material</h5>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col'>
                        <button className='btn btn-warning text-light'>COMMERCIAL, INTERIORS</button>
                      </div>
                    </div>
                  </div>
                )}
                <img src={project5} className='img-fluid' alt="project5" width={400} height={400} />
              </div>
            </div>

            <div className='col' onMouseEnter={handleClick5}>
              <div className={`img-container ${clickedImages5 ? 'Projectdata5' : ''}`}>
                {clickedImages5 && (
                  <div className="container overlay-text5">
                    <div className='row py-4'>
                      <div className='col'>
                        <h5 className='text-warning mt-2 p-4'>Ancreaft Building</h5>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col'>
                        <button className='btn btn-warning text-light'>COMMERCIAL, INTERIORS</button>
                      </div>
                    </div>
                  </div>
                )}
                <img src={project6} className='img-fluid' alt="project6" width={400} height={400} />
              </div>
            </div>
          </div>
        </div>
      )}
      <div className='container'>
      {activeCategory==='Project2' && ( <Commerical/> )}

      </div>

      <div className='container'>
      {activeCategory==='Project3' && ( <Education/> )}

      </div>



           <div className='container mt-4 my-3'>
           <button className='btn btn-warning text-light'> View all Projects</button>

           </div>
           <Footer/>
     
    </div>
  );
}

export default Projects;
