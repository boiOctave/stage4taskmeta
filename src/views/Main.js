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
            </main>
        </>
    );
};

export default Main;
