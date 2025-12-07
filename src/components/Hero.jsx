import React from 'react';
import { Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <h1>Adalet ve Güven İçin Yanınızdayız</h1>
                <p>Dilek Hukuk ve Danışmanlık olarak, hukuki süreçlerinizde profesyonel ve sonuç odaklı çözümler sunuyoruz.</p>
                <div className="hero-actions">
                    <a href="tel:+905015142534" className="btn btn-primary">
                        <Phone size={20} />
                        Bizi Arayın
                    </a>
                    <a href="https://wa.me/905015142534" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                        <FaWhatsapp size={20} />
                        WhatsApp'tan Yazın
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
