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
                            Dilek Hukuk ve Danışmanlık, <strong>İstanbul Pendik</strong> merkezli ofisinde, hukukun üstünlüğü ilkesiyle yerli ve yabancı müvekkillerine kapsamlı avukatlık ve danışmanlık hizmeti sunmaktadır.
                            <strong>Pendik avukat</strong> arayışınızda, tecrübeli ve dinamik kadromuzla hukuki süreçlerinizin her aşamasında yanınızdayız.
                        </p>
                        <p>
                            <strong>Ceza Avukatı</strong>, <strong>Boşanma Avukatı</strong> ve <strong>Miras Hukuku</strong> alanlarında uzmanlaşmış ekibimiz, her dosyayı titizlikle inceleyerek kişiye özel hukuki stratejiler geliştirmektedir.
                            <strong>İstanbul Hukuk Bürosu</strong> olarak, müvekkillerimizin haklarını en etkin şekilde savunmayı ve hukuki süreçleri şeffaflıkla yürütmeyi taahhüt ediyoruz.
                        </p>
                        <p>
                            İş Hukuku, Gayrimenkul Hukuku ve Ticaret Hukuku gibi alanlarda da faaliyet gösteren büromuz, müvekkil memnuniyetini esas alan, güvenilir ve sonuç odaklı bir yaklaşım sergilemektedir.
                            Hukuki sorunlarınıza profesyonel ve kalıcı çözümler üretmek için çalışıyoruz.
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
