import React, { useContext } from 'react';
import { ScrollContext } from '../pages/ScrollContext';

const BackToTopButton = () => {
    const { showButton } = useContext(ScrollContext);

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
                        backgroundColor: ' #ffc107',
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

export default BackToTopButton;
