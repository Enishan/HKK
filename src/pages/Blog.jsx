import React from 'react';
import { Helmet } from 'react-helmet';

const Blog = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <Helmet>
                <title>Hukuki Makaleler ve Blog | Dilek Hukuk</title>
                <meta name="description" content="Güncel hukuki makaleler, yargıtay kararları ve hukuk dünyasından haberler. Dilek Hukuk Bürosu blog sayfası." />
            </Helmet>
            <h1 className="text-3xl font-bold mb-6">Hukuki Makaleler</h1>
            <p>Blog yazıları yakında eklenecektir.</p>
        </div>
    );
};

export default Blog;
