import Community from 'components/Community/Community';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import Hero from 'components/Hero/Hero';
import NFTs from 'components/NFTs/NFTs';
import Wallets from '../components/Wallets/Wallets';

import { homeData } from 'data/Data';
const Main = () => {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Wallets />
                <Community data={homeData} />
                <NFTs />
                <Footer />
            </main>
        </>
    );
};

export default Main;
