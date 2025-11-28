import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '../components/Hero';
import About from '../components/About';
import PracticeAreas from '../components/PracticeAreas';
import Contact from '../components/Contact';
import FAQ from '../components/FAQ';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Dilek Hukuk ve Danışmanlık | Pendik Avukat</title>
                <meta name="description" content="Pendik Ceza Avukatı, Boşanma Avukatı, Miras Avukatı ve daha fazlası. Dilek Hukuk ve Danışmanlık olarak profesyonel hukuki destek sunuyoruz. +90 501 514 25 34" />
                <meta name="keywords" content="Pendik Avukat, Ceza Avukatı, Boşanma Avukatı, Miras Avukatı, İcra Avukatı, İş Avukatı, Hukuk Bürosu, İstanbul Avukat, Dilek Hukuk" />
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
            <FAQ />
            <Contact />
        </>
    );
};

export default Home;
