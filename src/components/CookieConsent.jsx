import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import './CookieConsent.css';

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [showPolicy, setShowPolicy] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (consent === null) {
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'true');
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem('cookieConsent', 'false');
        setIsVisible(false);
    };

    const togglePolicy = (e) => {
        if (e) e.preventDefault();
        setShowPolicy(!showPolicy);
    };

    if (!isVisible && !showPolicy) return null;

    return (
        <>
            {/* Cookie Banner */}
            {isVisible && (
                <div className="cookie-consent-banner">
                    <div className="cookie-content">
                        <p>
                            Sizlere daha iyi hizmet sunabilmek için sitemizde çerezler (cookies) kullanılmaktadır.
                            Detaylı bilgi için <a href="#" onClick={togglePolicy}>Çerez Politikamızı</a> inceleyebilirsiniz.
                        </p>
                        <div className="cookie-buttons">
                            <button onClick={handleDecline} className="cookie-btn decline">Reddet</button>
                            <button onClick={handleAccept} className="cookie-btn accept">Kabul Et</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Policy Modal */}
            {showPolicy && (
                <div className="cookie-modal-overlay">
                    <div className="cookie-modal-content">
                        <button className="cookie-modal-close" onClick={togglePolicy}>
                            <X size={24} />
                        </button>
                        <div className="cookie-modal-header">
                            <h3>Çerez (Cookie) Politikası</h3>
                        </div>
                        <div className="cookie-modal-body">
                            <h4>1. Çerez Nedir?</h4>
                            <p>Çerezler, ziyaret ettiğiniz web siteleri tarafından tarayıcınız aracılığıyla cihazınıza veya ağ sunucusuna depolanan küçük metin dosyalarıdır.</p>

                            <h4>2. Çerezleri Neden Kullanıyoruz?</h4>
                            <p>Web sitemizin işlevselliğini ve performansını artırmak, size daha iyi bir kullanıcı deneyimi sunmak ve site güvenliğini sağlamak amacıyla çerezler kullanılmaktadır.</p>

                            <h4>3. Kullanılan Çerez Türleri</h4>
                            <ul>
                                <li><strong>Zorunlu Çerezler:</strong> Sitenin düzgün çalışması için gereklidir.</li>
                                <li><strong>İşlevsel Çerezler:</strong> Tercihlerinizi hatırlamamızı sağlar.</li>
                                <li><strong>Analitik Çerezler:</strong> Ziyaretçi sayısını ve trafiği analiz etmemize yardımcı olur.</li>
                            </ul>

                            <h4>4. Çerez Tercihlerinizi Nasıl Yönetebilirsiniz?</h4>
                            <p>Tarayıcınızın ayarlarını değiştirerek çerezlere ilişkin tercihlerinizi kişiselleştirme imkanına sahipsiniz.</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default CookieConsent;
