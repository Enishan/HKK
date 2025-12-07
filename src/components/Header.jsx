import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleDropdown = (e) => {
        e.preventDefault();
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <header className="header">
            <div className="container header-container">
                <div className="logo">
                    <Link to="/">
                        <img src="/logo.png" alt="Dilek Hukuk Logosu" className="logo-image" />
                        <div className="logo-text">
                            <h1>Dilek Hukuk</h1>
                            <span>& Danışmanlık</span>
                        </div>
                    </Link>
                </div>

                <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <ul>
                        <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Ana Sayfa</Link></li>
                        <li><Link to="/blog" onClick={() => setIsMenuOpen(false)}>Blog</Link></li>
                        <li><Link to="/#about" onClick={() => setIsMenuOpen(false)}>Hakkımızda</Link></li>
                        <li><Link to="/#contact" onClick={() => setIsMenuOpen(false)}>İletişim</Link></li>
                    </ul>
                    <div className="mobile-actions">
                        <a href="tel:+905015142534" className="btn btn-primary">
                            <Phone size={18} />
                            Hemen Ara
                        </a>
                    </div>
                </nav>

                <div className="header-actions">
                    <a href="https://wa.me/905015142534" target="_blank" rel="noopener noreferrer" className="btn-icon whatsapp">
                        <FaWhatsapp size={24} />
                    </a>
                    <a href="tel:+905015142534" className="btn btn-primary desktop-only">
                        <Phone size={18} />
                        Hemen Ara
                    </a>
                    <button className="menu-toggle" onClick={toggleMenu}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
