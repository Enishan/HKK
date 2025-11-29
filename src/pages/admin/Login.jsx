import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Lock, Mail } from 'lucide-react';
import toast from 'react-hot-toast';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const { signIn, user } = useAuth();
    const navigate = useNavigate();

    // Auto-redirect if already logged in
    useEffect(() => {
        if (user) {
            navigate('/portal-yonetim-z4m2/dashboard', { replace: true });
        }
    }, [user, navigate]);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);

        const { error } = await signIn({ email, password });

        if (error) {
            toast.error('Giriş hatası: ' + error.message);
            setLoading(false);
        } else {
            toast.success('Başarıyla giriş yapıldı!');
            navigate('/portal-yonetim-z4m2/dashboard');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-navy-900">
                        Admin Girişi
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        🔒 Yetkili personel erişimi
                    </p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleLogin}>
                    <input type="hidden" name="remember" value="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email-address" className="sr-only">Email adresi</label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-gold-500 focus:border-gold-500 focus:z-10 sm:text-sm"
                                placeholder="Email adresi"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Şifre</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-gold-500 focus:border-gold-500 focus:z-10 sm:text-sm"
                                placeholder="Şifre"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-navy-900 hover:bg-navy-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy-500 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? 'Giriş yapılıyor...' : 'Giriş Yap'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
