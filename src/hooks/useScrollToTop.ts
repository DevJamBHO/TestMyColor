import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollToTop = () => {
    const location = useLocation();

    useEffect(() => {
        // Scroll vers le haut de la page avec animation smooth
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [location.pathname]); // Se déclenche à chaque changement de route
};

export default useScrollToTop;
