import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';


function Safety() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div>
         <div className='card border'>
        <div className='row p-1 '>
        <div className='col d-flex justify-content-between align-items-center '>
          <h6 className='card-body'>SAFETY</h6>
          <h1 onClick={toggleVisibility} style={{ cursor: 'pointer' }}>
            <FontAwesomeIcon  icon={isVisible ? faMinus : faPlus}  size="1x" className="text-warning p-1 mb-0" />
          </h1>
        </div>
        {isVisible && (
          <div className='col-12'>
            <hr />
            <span style={{ marginLeft: '8px' }}>
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidata
            </span>
          </div>
        )}
      </div>
    </div>



    </div>



)
}

export default Safety