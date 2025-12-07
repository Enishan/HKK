import React from 'react';
import { Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import './MobileStickyCTA.css';

const MobileStickyCTA = () => {
    return (
        <div className="mobile-sticky-cta">
            <a href="https://wa.me/905015142534" target="_blank" rel="noopener noreferrer" className="cta-btn whatsapp">
                <FaWhatsapp size={20} />
                WhatsApp
            </a>
            <a href="tel:+905015142534" className="cta-btn call">
                <Phone size={20} />
                Hemen Ara
            </a>
        </div>
    );
};

export default MobileStickyCTA;
