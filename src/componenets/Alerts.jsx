import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function Alerts() {
  const [isVisible ,  SetIsVisible]=useState(false)
   
  const toggleVisibility =() =>{
    SetIsVisible(!isVisible)
    
  }

  return <div onClick={toggleVisibility} className={isVisible  ? 'show-hide' : ''}> 
   
    
    <Alert variant="success" className="p-2  mt-2 text-center">
   <div className='row'>
    <div className='col'><p>Holy guacamole! You should check in on some of those fields below</p></div>
    <div className='col text-end '>  <FontAwesomeIcon icon={faTimes}  className='p-2'/></div>
     </div>
</Alert>

  </div>;
}

export default Alerts;