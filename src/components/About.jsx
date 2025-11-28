import React from 'react';
import { Scale, Award, Users, BookOpen } from 'lucide-react';
import './About.css';

const About = () => {
    return (
        <section className="section about" id="about">
            <div className="container">
                <div className="about-content">
                    <div className="about-text">
                        <div className="section-title left-align">
                            <h2>Hakkımızda</h2>
                            <p className="subtitle">Adalet, Güven ve Profesyonellik</p>
                        </div>
                        <p>
                            Dilek Hukuk ve Danışmanlık olarak, müvekkillerimize en yüksek standartlarda hukuki hizmet sunmayı ilke edindik.
                            Yılların getirdiği tecrübe ve dinamik ekibimizle, karmaşık hukuki süreçlerde yanınızdayız.
                        </p>
                        <p>
                            Hukukun üstünlüğüne olan inancımızla, her bir davayı titizlikle ele alıyor ve müvekkillerimizin haklarını
                            en etkin şekilde savunuyoruz. Şeffaflık, dürüstlük ve sonuç odaklı yaklaşımımızla Pendik ve İstanbul genelinde
                            güvenilir bir hukuk partneri olmaktan gurur duyuyoruz.
                        </p>

                        <div className="features-grid">
                            <div className="feature-item">
                                <Scale className="feature-icon" size={24} />
                                <div>
                                    <h4>Uzman Kadro</h4>
                                    <p>Alanında deneyimli avukatlar</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <Award className="feature-icon" size={24} />
                                <div>
                                    <h4>Yüksek Başarı</h4>
                                    <p>Sonuç odaklı stratejiler</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <Users className="feature-icon" size={24} />
                                <div>
                                    <h4>Kişiye Özel</h4>
                                    <p>Her müvekkile özel ilgi</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <BookOpen className="feature-icon" size={24} />
                                <div>
                                    <h4>Güncel Bilgi</h4>
                                    <p>Sürekli takip edilen mevzuat</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about-image">
                        <img
                            src="https://images.unsplash.com/photo-1589216532372-1c2a367900d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="Adalet Terazisi"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
