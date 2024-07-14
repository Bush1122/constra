

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

function  Construction() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <div className='card border'>
        <div className='row p-1 align-items-center'>
          <div className='col-8 d-flex justify-content-start'>
            <h6 className='card-text text-left mb-0 p-2'>Does the law require head protection</h6>
          </div>
          <div className='col-4 d-flex justify-content-end'>
            <h1 onClick={toggleVisibility} style={{ cursor: 'pointer' }}>
              <FontAwesomeIcon
                icon={isVisible ? faMinus : faPlus}
                size="1x"
                className="text-warning p-1 mb-0"
              />
            </h1>
          </div>
        </div>
        {isVisible && (
          <div className='col-'>
            <hr />
            <span style={{ marginLeft: '8px' }}>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidata
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Construction;

