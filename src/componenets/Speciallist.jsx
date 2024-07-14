import React from 'react';
import './Cm.css';
import icon1 from '../img/service-icon1.png';
import icon2 from '../img/service-icon2.png';
import icon3 from '../img/service-icon3.png';
import icon4 from '../img/service-icon4.png';
import icon5 from '../img/service-icon5.png';
import icon6 from '../img/service-icon6.png';
import icon7 from '../img/service-center.jpg';

function Speciallist() {
  return <div>
    <div className='container mt-3 py-2 '>
        <h6>WE ARE SPECIALISTS IN</h6>
        <h3 className='fw-bold '>WHAT WE DO</h3>
        <div className='row'>
            <div className='col'>
                <div className='row py-1'>
                <div className='col'> <img src={icon1} className='img-fluid' alt="logo"    style={{ height: '60px', width: 'auto' } }/> </div>
                <div className='col ndservice'> <h6>HOME CONSTRUCTION</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Integer adipiscing erat</p>
                </div>
            </div>
            <div className='row py-1'>
                <div className='col'>  <img src={icon2} className='img-fluid' alt="logo"    style={{ height: '60px', width: 'auto' } }/></div>
                <div className='col ndservice'> <h6>BUILDING REMODELS</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Integer adipiscing erat</p>
                </div>
            </div>
            <div className='row py-1'>
                <div className='col'> <img src={icon3} className='img-fluid' alt="logo"    style={{ height: '60px', width: 'auto' } }/> </div>
                <div className='col ndservice'> <h6>INTERIOR DESIGN</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Integer adipiscing erat</p>
                </div>
            </div>


            </div>


            <div className='col'>

            <img src={icon7} className='img-fluid' alt="logo"    style={{ height: '480px', width: 'auto' } }/>
            </div>




            <div className='col'>
            <div className='row py-1'>
                <div className='col'> <img src={icon4} className='img-fluid' alt="logo"    style={{ height: '60px', width: 'auto' } }/> </div>
                <div className='col ndservice'> <h6>EXTERIOR DESIGN</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Integer adipiscing erat</p>
                </div>
            </div>
            <div className='row py-1'>
                <div className='col'> <img src={icon5} className='img-fluid' alt="logo"    style={{ height: '60px', width: 'auto' } }/> </div>
                <div className='col ndservice'> <h6>RENOVATION</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Integer adipiscing erat</p>
                </div>
            </div>
            <div className='row py-1'>
                <div className='col'> <img src={icon6} className='img-fluid' alt="logo"    style={{ height: '60px', width: 'auto' } }/> </div>
                <div className='col ndservice'> <h6>SAFETY MANAGEMENT</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Integer adipiscing erat</p>
                </div>
            </div>


            </div>

        </div>
    </div>
  </div>;
}

export default Speciallist;