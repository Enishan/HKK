import React from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        phone: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [submitStatus, setSubmitStatus] = React.useState(null); // 'success', 'error', or null

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus('success');
            setFormData({ name: '', phone: '', message: '' });

            // Reset status after 5 seconds
            setTimeout(() => {
                setSubmitStatus(null);
            }, 5000);
        }, 1500);
    };

    return (
        <section className="section contact" id="contact">
            <div className="container">
                <div className="section-title">
                    <h2>İletişim</h2>
                    <p>Hukuki sorunlarınız için bizimle iletişime geçin. Size en kısa sürede dönüş yapacağız.</p>
                </div>

                <div className="contact-content">
                    <div className="contact-info">
                        <div className="info-item">
                            <Phone className="icon" size={24} />
                            <div>
                                <h3>Telefon</h3>
                                <p><a href="tel:+905015142534">+90 501 514 25 34</a></p>
                            </div>
                        </div>

                        <div className="info-item">
                            <MessageCircle className="icon" size={24} />
                            <div>
                                <h3>WhatsApp</h3>
                                <p><a href="https://wa.me/905015142534" target="_blank" rel="noopener noreferrer">WhatsApp'tan Yazın</a></p>
                            </div>
                        </div>

                        <div className="info-item">
                            <Mail className="icon" size={24} />
                            <div>
                                <h3>E-posta</h3>
                                <p><a href="mailto:info@dilekhukuk.com">info@dilekhukuk.com</a></p>
                            </div>
                        </div>

                        <div className="info-item">
                            <MapPin className="icon" size={24} />
                            <div>
                                <h3>Adres</h3>
                                <p>Batı, Gazi Paşa Cd. Halıcıoğlu İş Merkezi No: 54 Kat: 4 Daire: 5, 34903 Pendik/İstanbul</p>
                            </div>
                        </div>
                    </div>

                    <div className="map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3012.910472993286!2d29.23172557672224!3d40.87733812739551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cadd941102c0dd%3A0x4dcd09a8c52a6095!2sPendik%20Dilek%20Hukuk%20ve%20Dan%C4%B1%C5%9Fmanl%C4%B1k-Pendik%20Avukat-Pendik%20Bo%C5%9Fanma%20Avukat%C4%B1-%20Pendik%20Ceza%20Avukat%C4%B1-Miras-%C4%B0%C5%9F%20Hukuku-%20De%C4%9Fer%20Kayb%C4%B1!5e0!3m2!1str!2str!4v1764005481232!5m2!1str!2str"
                            width="100%"
                            height="350"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Dilek Hukuk Bürosu Konum"
                        ></iframe>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        {submitStatus === 'success' && (
                            <div className="alert success" style={{
                                backgroundColor: '#d4edda',
                                color: '#155724',
                                padding: '15px',
                                borderRadius: '5px',
                                marginBottom: '20px',
                                border: '1px solid #c3e6cb'
                            }}>
                                Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.
                            </div>
                        )}

                        <div className="form-group">
                            <label htmlFor="name">Ad Soyad</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Adınız Soyadınız"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Telefon</label>
                            <input
                                type="tel"
                                id="phone"
                                placeholder="Telefon Numaranız"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Mesajınız</label>
                            <textarea
                                id="message"
                                rows="5"
                                placeholder="Hukuki sorununuzu kısaca anlatın..."
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                            {isSubmitting ? 'Gönderiliyor...' : 'Gönder'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
