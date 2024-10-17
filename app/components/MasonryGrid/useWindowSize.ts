import { useState, useEffect } from 'react';

const useWindowSize = (init_value: number) => {
    const [windowSize, setWindowSize] = useState<number>(init_value);

    useEffect(() => {
        const handleResize = () => {
            setWindowSize(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        // Limpia el event listener cuando el componente se desmonte
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
};

export default useWindowSize;