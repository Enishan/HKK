import React from 'react';
import { Helmet } from 'react-helmet';

const CezaHukuku = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <Helmet>
                <title>Pendik Ceza Avukatı | Ağır Ceza ve Asliye Ceza | Dilek Hukuk</title>
                <meta name="description" content="Pendik ceza avukatı olarak ağır ceza, asliye ceza, soruşturma ve kovuşturma aşamalarında profesyonel hukuki destek sunuyoruz." />
            </Helmet>
            <h1 className="text-3xl font-bold mb-6">Ceza Hukuku</h1>
            <p>Ceza hukuku alanındaki hizmetlerimiz hakkında detaylı bilgi yakında eklenecektir.</p>
        </div>
    );
};

export default CezaHukuku;
