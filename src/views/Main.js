import Community from 'components/Community/Community';
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
            </main>
        </>
    );
};

export default Main;
