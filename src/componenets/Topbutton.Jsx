import React, { useState, useEffect } from 'react';

const Topbutton = () => {
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

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            {showButton && (
                <button
                    onClick={scrollToTop}
                    style={{
                        position: 'fixed',
                        bottom: '50px',
                        right: '50px',
                        padding: '10px 20px',
                        fontSize: '18px',
                        borderRadius: '50%',
                        backgroundColor: '#000',
                        color: '#fff',
                        border: 'none',
                        cursor: 'pointer',
                        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
                    }}
                >
                    ↑
                </button>
            )}
        </>
    );
};

export default Topbutton;
