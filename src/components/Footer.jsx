import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h2>Dilek Hukuk</h2>
                        <p>Adalet ve güven için yanınızdayız.</p>
                    </div>
                    <div className="footer-links">
                        <h3>Hızlı Bağlantılar</h3>
                        <ul>
                            <li><Link to="/">Ana Sayfa</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/#about">Hakkımızda</Link></li>
                            <li><Link to="/#contact">İletişim</Link></li>
                        </ul>
                    </div>
                    <div className="footer-contact">
                        <h3>İletişim</h3>
                        <p>Pendik, İstanbul</p>
                        <p><a href="tel:+905015142534">+90 501 514 25 34</a></p>
                        <p><a href="mailto:info@dilekhukuk.com">info@dilekhukuk.com</a></p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Dilek Hukuk ve Danışmanlık. Tüm hakları saklıdır.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
