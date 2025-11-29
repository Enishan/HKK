import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, ArrowLeft } from 'lucide-react';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
            <div className="max-w-2xl w-full text-center">
                {/* 404 Illustration */}
                <div className="mb-8">
                    <h1 className="text-9xl font-bold text-navy-900 opacity-20">404</h1>
                    <div className="relative -mt-20">
                        <Search className="mx-auto text-gold-500 animate-bounce" size={80} />
                    </div>
                </div>

                {/* Error Message */}
                <div className="mb-8">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mb-4">
                        Sayfa Bulunamadı
                    </h2>
                    <p className="text-lg text-gray-600 mb-2">
                        Aradığınız sayfa mevcut değil veya taşınmış olabilir.
                    </p>
                    <p className="text-sm text-gray-500">
                        Lütfen URL'yi kontrol edin veya ana sayfaya dönün.
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        to="/"
                        className="inline-flex items-center justify-center px-6 py-3 bg-navy-900 text-white rounded-lg hover:bg-navy-800 transition-colors font-medium shadow-md hover:shadow-lg"
                    >
                        <Home size={20} className="mr-2" />
                        Ana Sayfaya Dön
                    </Link>
                    <Link
                        to="/blog"
                        className="inline-flex items-center justify-center px-6 py-3 bg-white text-navy-900 border-2 border-navy-900 rounded-lg hover:bg-gray-50 transition-colors font-medium shadow-md hover:shadow-lg"
                    >
                        <ArrowLeft size={20} className="mr-2" />
                        Blog'a Git
                    </Link>
                </div>

                {/* Popular Links */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                        Popüler Sayfalar
                    </h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link to="/#about" className="text-navy-900 hover:text-gold-600 transition-colors">
                            Hakkımızda
                        </Link>
                        <Link to="/#contact" className="text-navy-900 hover:text-gold-600 transition-colors">
                            İletişim
                        </Link>
                        <Link to="/blog" className="text-navy-900 hover:text-gold-600 transition-colors">
                            Blog
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
