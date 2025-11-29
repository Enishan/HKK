import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '../components/Hero';
import About from '../components/About';
import PracticeAreas from '../components/PracticeAreas';
import Contact from '../components/Contact';
import Testimonials from '../components/Testimonials';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Dilek Hukuk Bürosu | Pendik Avukat & Danışmanlık - İstanbul</title>
                <meta name="description" content="İstanbul Pendik'te faaliyet gösteren Dilek Hukuk Bürosu; Ceza, Boşanma, Miras ve İş Hukuku alanlarında uzman avukat kadrosuyla profesyonel hukuki danışmanlık ve avukatlık hizmeti sunmaktadır." />
                <meta name="keywords" content="Pendik Avukat, İstanbul Hukuk Bürosu, Ceza Avukatı Pendik, Boşanma Avukatı İstanbul, Miras Avukatı, İş Hukuku Avukatı, Dilek Hukuk" />
                <script type="application/ld+json">
                    {`
                    {
                        "@context": "https://schema.org",
                        "@type": "LegalService",
                        "name": "Dilek Hukuk ve Danışmanlık",
                        "image": "https://dilekhukuk.com/logo.png",
                        "url": "https://dilekhukuk.com",
                        "telephone": "+905015142534",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Adres Bilgisi Buraya",
                            "addressLocality": "Pendik",
                            "addressRegion": "İstanbul",
                            "postalCode": "34890",
                            "addressCountry": "TR"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": "40.8769",
                            "longitude": "29.2343"
                        },
                        "openingHoursSpecification": {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": [
                                "Monday",
                                "Tuesday",
                                "Wednesday",
                                "Thursday",
                                "Friday"
                            ],
                            "opens": "09:00",
                            "closes": "18:00"
                        },
                        "priceRange": "$$"
                    }
                `}
                </script>
            </Helmet>
            <Hero />
            <About />
            <PracticeAreas />
            <Testimonials />
            <Contact />
        </>
    );
};

export default Home;
