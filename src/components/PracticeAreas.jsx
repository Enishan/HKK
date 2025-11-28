import React, { useState } from 'react';
import { Scale, Shield, Users, FileText, Home, Car, Gavel, Briefcase, X } from 'lucide-react';
import './PracticeAreas.css';

const practices = [
    {
        name: 'Ceza Davası Savunma',
        icon: <Shield size={32} />,
        description: 'Soruşturma ve kovuşturma aşamalarında şüpheli veya sanık müdafiliği, tutuklamaya itiraz, adli kontrol süreçleri ve ceza davalarında etkin savunma hizmeti sunuyoruz.'
    },
    {
        name: 'Ağır Ceza Savunma',
        icon: <Gavel size={32} />,
        description: 'Kasten öldürme, yağma, irtikap, resmi belgede sahtecilik, nitelikli dolandırıcılık gibi ağır ceza mahkemesinin görev alanına giren suçlarda profesyonel hukuki destek sağlıyoruz.'
    },
    {
        name: 'Uyuşturucu Ticareti Suçları',
        icon: <Shield size={32} />,
        description: 'TCK 188 ve devamı maddelerinde düzenlenen uyuşturucu veya uyarıcı madde imal ve ticareti suçlarında, soruşturma ve kovuşturma aşamalarında titiz bir savunma yürütüyoruz.'
    },
    {
        name: 'Cinsel Suçlar',
        icon: <Shield size={32} />,
        description: 'Cinsel saldırı, cinsel istismar ve taciz suçlamalarında, mağdur veya sanık vekilliği yaparak sürecin hukuka uygun ve adil bir şekilde yürütülmesini sağlıyoruz.'
    },
    {
        name: 'Boşanma ve Aile Hukuku',
        icon: <Users size={32} />,
        description: 'Anlaşmalı ve çekişmeli boşanma davaları, nafaka, velayet, mal rejimi tasfiyesi ve tazminat talepleri konularında müvekkillerimizin haklarını koruyoruz.'
    },
    {
        name: 'Miras Hukuku',
        icon: <FileText size={32} />,
        description: 'Vasiyetname hazırlama, mirasçılık belgesi alma, tenkis davaları, muris muvazaası ve mirasın reddi gibi miras hukukundan kaynaklanan uyuşmazlıklarda danışmanlık veriyoruz.'
    },
    {
        name: 'Gayrimenkul İhtilaf',
        icon: <Home size={32} />,
        description: 'Tapu iptal ve tescil davaları, kamulaştırma, el atmanın önlenmesi ve ecrimisil davaları gibi gayrimenkul hukukuna ilişkin her türlü ihtilafta hizmet sunuyoruz.'
    },
    {
        name: 'Ev Sahibi ve Kiracı',
        icon: <Home size={32} />,
        description: 'Kira tespiti, tahliye davaları, kira sözleşmesi hazırlama ve inceleme konularında hem kiracı hem de mülk sahiplerine hukuki destek sağlıyoruz.'
    },
    {
        name: 'Mülk Hissesi Davaları',
        icon: <Home size={32} />,
        description: 'Ortaklığın giderilmesi (izale-i şüyu) davaları ve paylı mülkiyetten kaynaklanan uyuşmazlıkların çözümünde uzman kadromuzla yanınızdayız.'
    },
    {
        name: 'İcra Hukuku',
        icon: <FileText size={32} />,
        description: 'Alacak tahsili, icra takibi başlatma, itirazın iptali davaları ve menfi tespit davaları ile alacaklarınızın en hızlı şekilde tahsil edilmesini sağlıyoruz.'
    },
    {
        name: 'İş Hukuku',
        icon: <Briefcase size={32} />,
        description: 'İşe iade davaları, kıdem ve ihbar tazminatı, fazla mesai alacakları ve iş kazası tazminatları konularında işçi ve işverenlere hukuki danışmanlık veriyoruz.'
    },
    {
        name: 'Sigorta Davaları',
        icon: <FileText size={32} />,
        description: 'Trafik kazası, yangın, hırsızlık gibi sigorta poliçelerinden kaynaklanan tazminat taleplerinin takibi ve sigorta tahkim komisyonu başvurularını yönetiyoruz.'
    },
    {
        name: 'Maddi Hasar Davaları',
        icon: <Scale size={32} />,
        description: 'Haksız fiil veya sözleşmeye aykırılık nedeniyle uğranılan maddi zararların tazmini için açılacak davalarda hukuki sürecin takibini yapıyoruz.'
    },
    {
        name: 'Kusurlu Otomobil Davaları',
        icon: <Car size={32} />,
        description: 'Ayıplı araç satışı, değer kaybı tazminatı ve araçtaki gizli ayıplardan kaynaklanan uyuşmazlıklarda tüketici haklarını savunuyoruz.'
    },
    {
        name: 'Vekaletname İşlemleri',
        icon: <FileText size={32} />,
        description: 'Vekaletname düzenlenmesi, kapsamı ve sona ermesi konularında hukuki bilgilendirme yapıyor, gerekli durumlarda noter işlemlerine eşlik ediyoruz.'
    },
    {
        name: 'Vesayet Davaları',
        icon: <Users size={32} />,
        description: 'Vasi atanması, kayyım tayini ve vesayet makamının izin vermesi gereken işlemler konularında hukuki destek sağlıyoruz.'
    },
    {
        name: 'Hukuk Danışmanlığı',
        icon: <Scale size={32} />,
        description: 'Şirketler ve bireyler için önleyici hukuk hizmeti sunarak, hukuki sorunlar doğmadan önce risk analizi yapıyor ve çözüm önerileri geliştiriyoruz.'
    },
];

const PracticeAreas = () => {
    const [selectedPractice, setSelectedPractice] = useState(null);

    const openModal = (practice) => {
        setSelectedPractice(practice);
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    };

    const closeModal = () => {
        setSelectedPractice(null);
        document.body.style.overflow = 'auto'; // Restore scrolling
    };

    return (
        <section className="section practice-areas" id="practice-areas">
            <div className="container">
                <div className="section-title">
                    <h2>Çalışma Alanlarımız</h2>
                    <p>Uzman kadromuzla geniş bir yelpazede hukuki hizmetler sunuyoruz. Detaylı bilgi için alanlara tıklayınız.</p>
                </div>
                <div className="practices-grid">
                    {practices.map((practice, index) => (
                        <div
                            key={index}
                            className="practice-card"
                            onClick={() => openModal(practice)}
                        >
                            <div className="icon-wrapper">{practice.icon}</div>
                            <h3>{practice.name}</h3>
                        </div>
                    ))}
                </div>
            </div>

            {selectedPractice && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>
                            <X size={24} />
                        </button>
                        <div className="modal-header">
                            <div className="modal-icon">{selectedPractice.icon}</div>
                            <h3>{selectedPractice.name}</h3>
                        </div>
                        <div className="modal-body">
                            <p>{selectedPractice.description}</p>
                            <a href="#contact" className="btn btn-primary btn-sm" onClick={closeModal}>
                                Danışmanlık Al
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default PracticeAreas;
