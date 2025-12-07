import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/905015142534"
            className="whatsapp-float"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp ile iletişime geçin"
        >
            <FaWhatsapp size={32} />
            <span className="whatsapp-tooltip">WhatsApp'tan Yazın</span>
        </a>
    );
};

export default WhatsAppButton;
