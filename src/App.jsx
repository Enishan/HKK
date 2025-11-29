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
import { AuthProvider } from './context/AuthContext';
import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';

import ScrollToHash from './components/ScrollToHash';
import NotFound from './pages/NotFound';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <AuthProvider>
      <div className="App flex flex-col min-h-screen">
        <ScrollToHash />
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/calisma-alanlarimiz/ceza-hukuku" element={<CezaHukuku />} />
            <Route path="/calisma-alanlarimiz/aile-hukuku" element={<AileHukuku />} />
            <Route path="/calisma-alanlarimiz/miras-hukuku" element={<MirasHukuku />} />

            {/* Admin Routes - Obscured for security */}
            <Route path="/portal-giris-x7k9" element={<Login />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/portal-yonetim-z4m2/dashboard" element={<Dashboard />} />
            </Route>

            {/* 404 - Catch all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
        <MobileStickyCTA />
        <CookieConsent />
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#1e3a5f',
              color: '#fff',
              fontFamily: 'Inter, sans-serif',
            },
            success: {
              iconTheme: {
                primary: '#d4af37',
                secondary: '#fff',
              },
            },
          }}
        />
      </div>
    </AuthProvider>
  );
}

export default App;
