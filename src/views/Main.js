import Community from 'components/Community/Community';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import Hero from 'components/Hero/Hero';
import NFTs from 'components/NFTs/NFTs';
import Wallets from '../components/Wallets/Wallets';

const Main = () => {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Wallets />
                <Community />
                <NFTs />
                <Footer />
            </main>
        </>
    );
};

export default Main;
