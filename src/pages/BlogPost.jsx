import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const BlogPost = () => {
    const { slug } = useParams();

    return (
        <div className="container mx-auto px-4 py-12">
            <Helmet>
                <title>Blog Yazısı | Dilek Hukuk</title>
            </Helmet>
            <h1 className="text-3xl font-bold mb-6">Blog Yazısı: {slug}</h1>
            <p>Bu makale içeriği yakında eklenecektir.</p>
        </div>
    );
};

export default BlogPost;
