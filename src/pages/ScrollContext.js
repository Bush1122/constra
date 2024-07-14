import React, { createContext, useState, useEffect } from 'react';

const ScrollContext = createContext();

const ScrollProvider = ({ children }) => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <ScrollContext.Provider value={{ showButton }}>
            {children}
        </ScrollContext.Provider>
    );
};

export { ScrollContext, ScrollProvider };
