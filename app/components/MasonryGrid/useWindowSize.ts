import { useState, useEffect } from 'react';

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState<number>();

    useEffect(() => {
        const handleResize = () => {
            setWindowSize(window.innerWidth);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        
        // Limpia el event listener cuando el componente se desmonte
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
};

export default useWindowSize;