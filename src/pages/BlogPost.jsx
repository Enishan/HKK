import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import { ArrowLeft, Calendar, User, Tag, ChevronRight } from 'lucide-react';

const BlogPost = () => {
    const { slug } = useParams();
    const [post, setPost] = useState(null);
    const [recentPosts, setRecentPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);

                // Fetch current post
                const { data: postData, error: postError } = await supabase
                    .from('posts')
                    .select('*')
                    .eq('slug', slug)
                    .single();

                if (postError) throw postError;
                setPost(postData);

                // Fetch recent posts for sidebar
                const { data: recentData, error: recentError } = await supabase
                    .from('posts')
                    .select('title, slug, created_at')
                    .neq('slug', slug) // Exclude current post
                    .eq('published', true)
                    .order('created_at', { ascending: false })
                    .limit(5);

                if (recentError) throw recentError;
                setRecentPosts(recentData);

            } catch (error) {
                console.error('Error fetching data:', error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [slug]);

    // Function to format text into paragraphs
    const formatContent = (content) => {
        if (!content) return null;
        return content.split('\n').map((paragraph, index) => (
            paragraph.trim() ? (
                <p key={index} className="mb-6 text-lg leading-relaxed text-gray-700 font-light">
                    {paragraph}
                </p>
            ) : null
        ));
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-xl text-navy-900 font-serif">Yükleniyor...</div>
            </div>
        );
    }

    if (!post) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
                <h2 className="text-3xl font-serif text-navy-900 mb-4">Yazı bulunamadı</h2>
                <Link to="/blog" className="text-gold-600 hover:text-gold-700 flex items-center font-medium">
                    <ArrowLeft className="mr-2" size={20} />
                    Blog'a Dön
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Breadcrumb */}
                <nav className="flex mb-8 text-sm text-gray-500 uppercase tracking-wider font-medium">
                    <Link to="/" className="hover:text-navy-900 transition-colors">Ana Sayfa</Link>
                    <span className="mx-2">/</span>
                    <Link to="/blog" className="hover:text-navy-900 transition-colors">Blog</Link>
                    <span className="mx-2">/</span>
                    <span className="text-navy-900 truncate max-w-xs">{post.title}</span>
                </nav>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Main Content (8 cols) */}
                    <div className="lg:col-span-8">
                        <article className="bg-white p-8 md:p-12 rounded-lg shadow-sm border border-gray-100">
                            <header className="mb-8">
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy-900 mb-6 leading-tight">
                                    {post.title}
                                </h1>
                                <div className="flex flex-wrap items-center text-gray-500 text-sm font-medium space-x-6">
                                    <div className="flex items-center">
                                        <Calendar size={16} className="mr-2 text-gold-500" />
                                        <time dateTime={post.created_at}>
                                            {new Date(post.created_at).toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' })}
                                        </time>
                                    </div>
                                    <div className="flex items-center">
                                        <User size={16} className="mr-2 text-gold-500" />
                                        <span>Dilek Hukuk</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Tag size={16} className="mr-2 text-gold-500" />
                                        <span>Hukuk Blog</span>
                                    </div>
                                </div>
                            </header>

                            <div className="mb-10 rounded-xl overflow-hidden shadow-xl">
                                <img
                                    src="/blog-default.jpg"
                                    alt={post.title}
                                    className="w-full h-[400px] lg:h-[500px] object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
                                />
                            </div>

                            <div className="prose prose-lg prose-navy max-w-none font-sans">
                                {formatContent(post.content)}
                            </div>

                            {/* Author Box */}
                            <div className="mt-12 p-6 bg-gray-50 rounded-lg border-l-4 border-gold-500">
                                <h3 className="text-lg font-serif font-bold text-navy-900 mb-2">Dilek Hukuk & Danışmanlık</h3>
                                <p className="text-gray-600 text-sm">
                                    Hukuki konularda güncel bilgiler ve uzman görüşleri sunuyoruz. Sorularınız için bizimle iletişime geçebilirsiniz.
                                </p>
                            </div>
                        </article>
                    </div>

                    {/* Sidebar (4 cols) */}
                    <aside className="lg:col-span-4 space-y-8">

                        {/* Search / About Widget */}
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                            <h3 className="text-xl font-serif font-bold text-navy-900 mb-4 pb-2 border-b border-gray-100">
                                Hakkımızda
                            </h3>
                            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                                Dilek Hukuk & Danışmanlık olarak, müvekkillerimize en güncel hukuki gelişmeleri ve emsal kararları blogumuzda sunuyoruz.
                            </p>
                            <Link to="/#contact" className="inline-block w-full text-center bg-navy-900 text-white py-3 rounded hover:bg-navy-800 transition-colors font-medium">
                                İletişime Geçin
                            </Link>
                        </div>

                        {/* Recent Posts Widget */}
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                            <h3 className="text-xl font-serif font-bold text-navy-900 mb-4 pb-2 border-b border-gray-100">
                                Son Yazılar
                            </h3>
                            <ul className="space-y-4">
                                {recentPosts.map((recent) => (
                                    <li key={recent.slug} className="group">
                                        <Link to={`/blog/${recent.slug}`} className="block">
                                            <h4 className="text-navy-900 font-medium group-hover:text-gold-600 transition-colors line-clamp-2">
                                                {recent.title}
                                            </h4>
                                            <span className="text-xs text-gray-400 mt-1 block">
                                                {new Date(recent.created_at).toLocaleDateString('tr-TR')}
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                                {recentPosts.length === 0 && (
                                    <li className="text-gray-500 text-sm">Başka yazı bulunmuyor.</li>
                                )}
                            </ul>
                        </div>



                    </aside>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;
