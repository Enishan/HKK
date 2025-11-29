import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabaseClient';
import { useAuth } from '../../context/AuthContext';
import { LogOut, Plus, Edit2, Trash2, Save, X, FileText, Eye, EyeOff } from 'lucide-react';
import toast from 'react-hot-toast';

const Dashboard = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editingPost, setEditingPost] = useState(null);
    const [formData, setFormData] = useState({ title: '', slug: '', content: '', published: false });
    const [isFormOpen, setIsFormOpen] = useState(false);
    const { signOut } = useAuth();

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            setLoading(true);
            const { data, error } = await supabase
                .from('posts')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) throw error;
            setPosts(data);
        } catch (error) {
            console.error('Error fetching posts:', error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData(prev => {
            const newData = { ...prev, [name]: type === 'checkbox' ? checked : value };

            // Auto-generate slug if title changes
            if (name === 'title') {
                newData.slug = value
                    .toLowerCase()
                    .replace(/ğ/g, 'g')
                    .replace(/ü/g, 'u')
                    .replace(/ş/g, 's')
                    .replace(/ı/g, 'i')
                    .replace(/ö/g, 'o')
                    .replace(/ç/g, 'c')
                    .replace(/[^a-z0-9\\s-]/g, '')
                    .replace(/\\s+/g, '-')
                    .replace(/^-+|-+$/g, '');
            }

            return newData;
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const postData = { ...formData };

            if (editingPost) {
                const { error } = await supabase
                    .from('posts')
                    .update(postData)
                    .eq('id', editingPost.id);
                if (error) throw error;
            } else {
                const { error } = await supabase
                    .from('posts')
                    .insert([postData]);
                if (error) throw error;
            }

            setFormData({ title: '', slug: '', content: '', published: false });
            setEditingPost(null);
            setIsFormOpen(false);
            fetchPosts();
            toast.success(editingPost ? 'Yazı başarıyla güncellendi!' : 'Yeni yazı başarıyla oluşturuldu!');
        } catch (error) {
            toast.error('Hata: ' + error.message);
        }
    };

    const handleEdit = (post) => {
        setEditingPost(post);
        setFormData({
            title: post.title,
            slug: post.slug,
            content: post.content,
            published: post.published
        });
        setIsFormOpen(true);
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Bu yazıyı silmek istediğinize emin misiniz?')) return;

        try {
            const { error } = await supabase
                .from('posts')
                .delete()
                .eq('id', id);

            if (error) throw error;
            fetchPosts();
            toast.success('Yazı başarıyla silindi!');
        } catch (error) {
            toast.error('Silme hatası: ' + error.message);
        }
    };

    const handleCancel = () => {
        setEditingPost(null);
        setFormData({ title: '', slug: '', content: '', published: false });
        setIsFormOpen(false);
    };

    const handleLogout = async () => {
        await signOut();
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-2xl md:text-3xl font-serif font-bold text-navy-900">Admin Paneli</h1>
                            <p className="text-sm text-gray-500 mt-1">Blog yazılarınızı yönetin</p>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
                        >
                            <LogOut size={18} className="mr-2" />
                            Çıkış Yap
                        </button>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

                {/* New Post Button */}
                {!isFormOpen && (
                    <div className="mb-6">
                        <button
                            onClick={() => setIsFormOpen(true)}
                            className="flex items-center px-6 py-3 bg-navy-900 text-white rounded-lg hover:bg-navy-800 transition-all shadow-md hover:shadow-lg font-medium"
                        >
                            <Plus size={20} className="mr-2" />
                            Yeni Yazı Ekle
                        </button>
                    </div>
                )}

                {/* Form Section */}
                {isFormOpen && (
                    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 md:p-8 mb-8">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-serif font-bold text-navy-900">
                                {editingPost ? 'Yazıyı Düzenle' : 'Yeni Yazı Ekle'}
                            </h2>
                            <button onClick={handleCancel} className="text-gray-400 hover:text-gray-600">
                                <X size={24} />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Başlık <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="Yazı başlığını girin"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Slug (URL) <span className="text-gray-400 text-xs">(Otomatik)</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="slug"
                                        value={formData.slug}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="url-dostu-baslik"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-all"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    İçerik <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    name="content"
                                    value={formData.content}
                                    onChange={handleInputChange}
                                    required
                                    rows="12"
                                    placeholder="Yazı içeriğini buraya girin..."
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-all resize-y"
                                ></textarea>
                            </div>

                            <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                                <input
                                    type="checkbox"
                                    name="published"
                                    checked={formData.published}
                                    onChange={handleInputChange}
                                    className="h-5 w-5 text-navy-600 focus:ring-navy-500 border-gray-300 rounded cursor-pointer"
                                    id="published"
                                />
                                <label htmlFor="published" className="ml-3 flex items-center cursor-pointer">
                                    {formData.published ? (
                                        <Eye size={18} className="text-green-600 mr-2" />
                                    ) : (
                                        <EyeOff size={18} className="text-gray-400 mr-2" />
                                    )}
                                    <span className="text-sm font-medium text-gray-900">
                                        {formData.published ? 'Yayınlandı' : 'Taslak olarak kaydet'}
                                    </span>
                                </label>
                            </div>

                            <div className="flex space-x-3">
                                <button
                                    type="submit"
                                    className="flex-1 flex items-center justify-center px-6 py-3 bg-navy-900 text-white rounded-lg hover:bg-navy-800 transition-colors font-medium shadow-md"
                                >
                                    <Save size={18} className="mr-2" />
                                    {editingPost ? 'Değişiklikleri Kaydet' : 'Yazıyı Oluştur'}
                                </button>
                                <button
                                    type="button"
                                    onClick={handleCancel}
                                    className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium"
                                >
                                    İptal
                                </button>
                            </div>
                        </form>
                    </div>
                )}

                {/* Posts List */}
                <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
                        <div className="flex items-center">
                            <FileText size={20} className="text-navy-900 mr-2" />
                            <h2 className="text-lg font-semibold text-navy-900">Tüm Yazılar ({posts.length})</h2>
                        </div>
                    </div>

                    {loading ? (
                        <div className="p-12 text-center">
                            <div className="inline-block animate-spin rounded-full h-10 w-10 border-b-2 border-navy-900 mb-4"></div>
                            <p className="text-gray-600">Yükleniyor...</p>
                        </div>
                    ) : posts.length === 0 ? (
                        <div className="p-12 text-center">
                            <p className="text-gray-500">Henüz yazı eklenmemiş. Yeni bir yazı eklemek için yukarıdaki butona tıklayın.</p>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Başlık</th>
                                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Durum</th>
                                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Tarih</th>
                                        <th className="px-6 py-3 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">İşlemler</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {posts.map((post) => (
                                        <tr key={post.id} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4">
                                                <div className="text-sm font-medium text-gray-900 line-clamp-2">{post.title}</div>
                                                <div className="text-xs text-gray-500 mt-1">/{post.slug}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${post.published
                                                    ? 'bg-green-100 text-green-800'
                                                    : 'bg-yellow-100 text-yellow-800'
                                                    }`}>
                                                    {post.published ? (
                                                        <>
                                                            <Eye size={12} className="mr-1" />
                                                            Yayında
                                                        </>
                                                    ) : (
                                                        <>
                                                            <EyeOff size={12} className="mr-1" />
                                                            Taslak
                                                        </>
                                                    )}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {new Date(post.created_at).toLocaleDateString('tr-TR', {
                                                    day: 'numeric',
                                                    month: 'short',
                                                    year: 'numeric'
                                                })}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-3">
                                                <button
                                                    onClick={() => handleEdit(post)}
                                                    className="inline-flex items-center text-navy-600 hover:text-navy-900 transition-colors"
                                                >
                                                    <Edit2 size={16} className="mr-1" />
                                                    Düzenle
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(post.id)}
                                                    className="inline-flex items-center text-red-600 hover:text-red-900 transition-colors"
                                                >
                                                    <Trash2 size={16} className="mr-1" />
                                                    Sil
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
