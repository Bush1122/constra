import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUsers, faClock, faGlobe } from '@fortawesome/free-solid-svg-icons';
import TotalProject from './TotalProject'
import Hours from './Hours';
import Staff from './Staff'

function TotalEm() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let timer;
        if (count < 50) {
            timer = setTimeout(() => setCount(count + 1), 100); // Increment every 100ms
        }
        return () => clearTimeout(timer);
    }, [count]);

    return (
        <div className='container-fluid mt-3 my-3 p-4 mt-3 py-2'>
            <div className='row'>
                <TotalProject/>
               
                <Hours/>
                
                <Staff/>

                <div className='col text-center'>
                    <FontAwesomeIcon icon={faGlobe} size="3x" className="text-warning mb-3" />
                    <h2 className="text-light mt-2 p-2">{count}</h2>
                    <h4 className='text-warning mt-2 p-2'>COUNTRIES EXPERIENCE</h4>
                </div>
            </div>
        </div>
    );
}

export default TotalEm;
