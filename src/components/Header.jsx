import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Menu, X, MessageCircle, ChevronDown } from 'lucide-react';
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
                        <h1>Dilek Hukuk</h1>
                        <span>& Danışmanlık</span>
                    </Link>
                </div>

                <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <ul>
                        <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Ana Sayfa</Link></li>
                        <li className="dropdown">
                            <a href="#" onClick={toggleDropdown} className="dropdown-toggle">
                                Çalışma Alanları <ChevronDown size={16} />
                            </a>
                            <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
                                <li><Link to="/calisma-alanlarimiz/ceza-hukuku" onClick={() => setIsMenuOpen(false)}>Ceza Hukuku</Link></li>
                                <li><Link to="/calisma-alanlarimiz/aile-hukuku" onClick={() => setIsMenuOpen(false)}>Aile Hukuku</Link></li>
                                <li><Link to="/calisma-alanlarimiz/miras-hukuku" onClick={() => setIsMenuOpen(false)}>Miras Hukuku</Link></li>
                            </ul>
                        </li>
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
                        <MessageCircle size={24} />
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
