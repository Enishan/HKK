import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import { Calendar, ArrowRight, User } from 'lucide-react';

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const { data, error } = await supabase
                    .from('posts')
                    .select('*')
                    .eq('published', true)
                    .order('created_at', { ascending: false });

                if (error) throw error;
                setPosts(data);
            } catch (error) {
                console.error('Error fetching posts:', error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div className="bg-gray-50 min-h-screen py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 mb-4">
                        Blog & Hukuki Makaleler
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Hukuki gelişmeler, emsal kararlar ve bilgilendirici yazılarımız. Müvekkillerimizi en güncel bilgilerle destekliyoruz.
                    </p>
                </div>

                {loading ? (
                    <div className="flex items-center justify-center min-h-[400px]">
                        <div className="text-center">
                            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-navy-900 mb-4"></div>
                            <p className="text-gray-600 font-medium">Yazılar yükleniyor...</p>
                        </div>
                    </div>
                ) : (
                    <>
                        {/* Blog Grid */}
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {posts.map((post) => (
                                <article
                                    key={post.id}
                                    className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100"
                                >
                                    {/* Image */}
                                    <div className="relative h-56 overflow-hidden">
                                        <img
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            src="/blog-default.jpg"
                                            alt={post.title}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        {/* Meta Info */}
                                        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                                            <div className="flex items-center">
                                                <Calendar size={14} className="mr-1.5 text-gold-500" />
                                                <time dateTime={post.created_at}>
                                                    {new Date(post.created_at).toLocaleDateString('tr-TR', {
                                                        day: 'numeric',
                                                        month: 'short',
                                                        year: 'numeric'
                                                    })}
                                                </time>
                                            </div>
                                            <div className="flex items-center">
                                                <User size={14} className="mr-1.5 text-gold-500" />
                                                <span>Dilek Hukuk</span>
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <Link to={`/blog/${post.slug}`}>
                                            <h2 className="text-xl font-serif font-bold text-navy-900 mb-3 group-hover:text-gold-600 transition-colors line-clamp-2">
                                                {post.title}
                                            </h2>
                                        </Link>

                                        {/* Excerpt */}
                                        <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                                            {post.content}
                                        </p>

                                        {/* Read More Link */}
                                        <Link
                                            to={`/blog/${post.slug}`}
                                            className="inline-flex items-center text-navy-900 font-semibold hover:text-gold-600 transition-colors group/link"
                                        >
                                            <span>Devamını Oku</span>
                                            <ArrowRight
                                                size={16}
                                                className="ml-2 group-hover/link:translate-x-1 transition-transform"
                                            />
                                        </Link>
                                    </div>
                                </article>
                            ))}
                        </div>

                        {/* Empty State */}
                        {!loading && posts.length === 0 && (
                            <div className="text-center py-20">
                                <div className="max-w-md mx-auto">
                                    <div className="mb-6">
                                        <div className="inline-block p-4 bg-gray-100 rounded-full">
                                            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Henüz Yazı Yok</h3>
                                    <p className="text-gray-600">
                                        Yayınlanmış bir blog yazısı bulunmamaktadır. Yakında yeni içerikler eklenecektir.
                                    </p>
                                </div>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default Blog;
