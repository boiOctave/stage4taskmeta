import Community from 'components/Community/Community';
import Header from 'components/Header/Header';
import Hero from 'components/Hero/Hero';
import Wallets from '../components/Wallets/Wallets';

const Main = () => {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Wallets />
                <Community />
            </main>
        </>
    );
};

export default Main;
