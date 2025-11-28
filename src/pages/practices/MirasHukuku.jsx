import React from 'react';
import { Helmet } from 'react-helmet';

const MirasHukuku = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <Helmet>
                <title>Pendik Miras Avukatı | Veraset ve Miras Paylaşımı | Dilek Hukuk</title>
                <meta name="description" content="Pendik miras avukatı. Vasiyetname, miras paylaşımı, tenkis davası ve veraset ilamı işlemlerinde hukuki danışmanlık." />
            </Helmet>
            <h1 className="text-3xl font-bold mb-6">Miras Hukuku</h1>
            <p>Miras hukuku alanındaki hizmetlerimiz hakkında detaylı bilgi yakında eklenecektir.</p>
        </div>
    );
};

export default MirasHukuku;
