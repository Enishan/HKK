import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import CookieConsent from './components/CookieConsent';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import CezaHukuku from './pages/practices/CezaHukuku';
import AileHukuku from './pages/practices/AileHukuku';
import MirasHukuku from './pages/practices/MirasHukuku';

import MobileStickyCTA from './components/MobileStickyCTA';

function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/calisma-alanlarimiz/ceza-hukuku" element={<CezaHukuku />} />
          <Route path="/calisma-alanlarimiz/aile-hukuku" element={<AileHukuku />} />
          <Route path="/calisma-alanlarimiz/miras-hukuku" element={<MirasHukuku />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileStickyCTA />
      <CookieConsent />
    </div>
  );
}

export default App;
