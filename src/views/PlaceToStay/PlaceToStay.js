import React from 'react';

import Community from 'components/Community/Community';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import { placesData } from 'data/Data';

const PlaceToStay = () => {
    return (
        <>
            <Header />
            <main>
                <Community data={placesData} isHome={false} />

                <Footer />
            </main>
        </>
    );
};

export default PlaceToStay;
