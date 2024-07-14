import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUsers, faClock, faGlobe } from '@fortawesome/free-solid-svg-icons';

function Hours() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let timer;
        if (count < 30) {
            timer = setTimeout(() => setCount(count + 1), 100); 
        }
        return () => clearTimeout(timer);
    }, [count]);

    return (
               
                <div className='col text-center'>
                  <FontAwesomeIcon icon={faUsers} size="3x" className="text-warning mb-3" />
                    <h2 className="text-light mt-2 p-2">{count}</h2>
                    <h4 className='text-warning mt-2 p-2'>STAFF MEMBERS</h4>
                </div>
            
                
    );
}

export default Hours;