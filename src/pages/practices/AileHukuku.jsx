import React from 'react';
import { Helmet } from 'react-helmet';

const AileHukuku = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <Helmet>
                <title>Pendik Boşanma Avukatı | Aile Hukuku ve Velayet | Dilek Hukuk</title>
                <meta name="description" content="Pendik boşanma avukatı. Çekişmeli ve anlaşmalı boşanma, nafaka, velayet ve mal paylaşımı davalarında uzman hukuki destek." />
            </Helmet>
            <h1 className="text-3xl font-bold mb-6">Aile ve Boşanma Hukuku</h1>
            <p>Aile hukuku ve boşanma davaları hakkındaki hizmetlerimiz yakında eklenecektir.</p>
        </div>
    );
};

export default AileHukuku;
