import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
    {
        id: 1,
        name: "Senem Yurtseven",
        date: "2 hafta önce",
        rating: 5,
        text: "Sadece bir soru sormak için rastgele internetten bulup aradığım bir avukatlık danışmanlık hizmeti hattıydı ve sorularıma ; beni güzelce dinleyerek kısa öz ve net yanıtlar verdiler . Bunun için çok teşekkür ediyorum ve bende tecrübemi buraya yazarak bildirmek istedim."
    },
    {
        id: 2,
        name: "Enishan Uzakgören",
        date: "9 ay önce",
        rating: 5,
        text: "Yasin Beye çok teşekkür ederim. Danıştığım konularda bana çok açıklayıcı bir şekilde yardımcı oldu."
    },
    {
        id: 3,
        name: "Furkan Koç",
        date: "1 ay önce",
        rating: 5,
        text: "5 yıllık çalıştığım firmadan tazminatımı alamıyordum bu hukuk bürosuna ulaştıktan sonra beni gayet iyi bir şekilde yönlendirdiler davamızda da kendi lehime sonuç kazandık avukat Muhammet Yasin beye ve ekibine teşekkür ederim herhangi bir davam da yine kendilerini tercih edeceğim"
    },
    {
        id: 4,
        name: "Onur Demir",
        date: "2 ay önce",
        rating: 5,
        text: "İlgi ve alakaları, paylaştığımız krtitik durumlarımızı içtenlik ve mesleklerine yakışır bir şekilde ifade ettikleri, yönlendirmeleri, destek oldukları, kendi yakınları gibi görüp herşey için koşturdukları ve güzel kahveler için teşekkür ederim."
    },
    {
        id: 5,
        name: "Ahmet Şeker",
        date: "4 hafta önce",
        rating: 5,
        text: "Öncelikle “Davamız süresince gösterdikleri ilgi, şeffaflık ve profesyonellik için teşekkür ederim Sonuçtan son derece memnun kaldık güvenilir bir hukuk bürosu arayan herkese tavsiye ederim."
    },
    {
        id: 6,
        name: "Yusuf Çiftçi",
        date: "3 ay önce",
        rating: 5,
        text: "Herhangi bir davanız varsa Türkiye’nin değil dünyanın neresinde olursanız olun gönül rahatlığıyla vekâlet ve davalarınızı verebilirsiniz. O kadar çok güvenilir o kadar çok net insan ki ömrü hayatımda böyle sağlam bir hukuk insanı görmedim kendisine ve emeklerine çok teşekkür ediyorum."
    },
    {
        id: 7,
        name: "Ümral Bayrak",
        date: "3 ay önce",
        rating: 5,
        text: "Yenı aldığım arabamda cıkan sorunlar nedenıyle bı davam olmustu kendısıyle o konuda çalıştım ve sonucunda zararlarımın hepsını karşılasılar bu süreçte yanımızda oldugu ıcın cok teşekkür ederiz gonul rahatlıgıyla kendısıyle calısabılırsınız"
    },
    {
        id: 8,
        name: "Recep Aydın",
        date: "2 ay önce",
        rating: 5,
        text: "Kendisine çok çok teşekkür ediyorum işinde gerçekten çok titiz ve aydınlatıcı herkese tavsiye ederim Pendik'te en iyi hukuk bürosundan biridir.işimi en kısa sürede çözüme kavuşturdu kendisine hayatta başarılar diliyorum.herkese tavsiye ederim 🙏👏"
    },
    {
        id: 9,
        name: "Fatih Dilek",
        date: "1 hafta önce",
        rating: 5,
        text: "Yasin bey gerçekten güler yüzlü işinin ehli titiz bir avukat herkese tavsiye ederim."
    },
    {
        id: 10,
        name: "Onur Kaya",
        date: "5 ay önce",
        rating: 5,
        text: "Yasin bey alanında son derece bilgili güvenilir bir avukat Her aşamada bizi detaylı olarak bilgilendirdi. Hukuki desteğe ihtiyaç duyduğumuz her anda yanımızdaydı Gönül rahatlığıyla tavsiye ederim."
    }
];

const Testimonials = () => {
    return (
        <section className="py-20 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-4 mb-12">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mb-4">
                        Müvekkil Yorumları
                    </h2>
                    <div className="flex items-center justify-center space-x-2 mb-4">
                        <span className="text-2xl font-bold text-navy-900">4.9</span>
                        <div className="flex text-gold-500">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={24} fill="currentColor" />
                            ))}
                        </div>
                        <span className="text-gray-500 text-sm">(Google Yorumları)</span>
                    </div>
                </div>
            </div>

            {/* Marquee Container */}
            <div className="relative w-full">
                <div className="flex animate-scroll hover:pause space-x-6 w-max">
                    {/* Original Set */}
                    {reviews.map((review) => (
                        <ReviewCard key={review.id} review={review} />
                    ))}
                    {/* Duplicate Set for Seamless Loop */}
                    {reviews.map((review) => (
                        <ReviewCard key={`dup-${review.id}`} review={review} />
                    ))}
                </div>
            </div>


        </section>
    );
};

const ReviewCard = ({ review }) => (
    <a
        href="https://share.google/l6IkGMTKzlNFVFIZG"
        target="_blank"
        rel="noopener noreferrer"
        className="w-[300px] md:w-[350px] bg-white p-6 rounded-xl shadow-md border border-gray-100 flex-shrink-0 block hover:shadow-lg transition-shadow duration-300 cursor-pointer"
    >
        <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
                <div className="w-10 h-10 bg-navy-900 rounded-full flex items-center justify-center text-white font-bold text-lg mr-3">
                    {review.name.charAt(0)}
                </div>
                <div>
                    <h4 className="font-bold text-gray-900 text-sm">{review.name}</h4>
                    <p className="text-xs text-gray-500">{review.date}</p>
                </div>
            </div>
            <svg viewBox="0 0 24 24" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
                <path fill="#4285F4" d="M23.745 12.27c0-.79-.07-1.54-.19-2.27h-11.3v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z" />
                <path fill="#34A853" d="M12.255 24c3.24 0 5.95-1.08 7.96-2.91l-3.86-3c-1.08.72-2.45 1.16-4.1 1.16-3.13 0-5.78-2.11-6.73-4.96h-3.98v3.09C3.515 21.3 7.565 24 12.255 24z" />
                <path fill="#FBBC05" d="M5.525 14.29c-.25-.72-.38-1.5-.38-2.29s.14-1.57.38-2.29V6.62h-3.98a11.86 11.86 0 000 10.76l3.98-3.09z" />
                <path fill="#EA4335" d="M12.255 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C18.205 1.19 15.495 0 12.255 0 7.565 0 3.515 2.7 1.545 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96z" />
            </svg>
        </div>
        <div className="flex text-gold-500 mb-3">
            {[...Array(review.rating)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
            ))}
        </div>
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">
            "{review.text}"
        </p>
    </a>
);

export default Testimonials;
