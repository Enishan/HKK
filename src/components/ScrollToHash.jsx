import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToHash = () => {
    const { pathname, hash, key } = useLocation();

    useEffect(() => {
        // If there is a hash, scroll to it
        if (hash) {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100); // Small delay to ensure DOM is ready
            }
        } else {
            // If no hash, scroll to top (standard router behavior)
            window.scrollTo(0, 0);
        }
    }, [pathname, hash, key]);

    return null;
};

export default ScrollToHash;
