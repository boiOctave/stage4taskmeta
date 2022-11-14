import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';

import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [windowPosition, setWindowPosition] = useState(0);

    useEffect(() => {
        window.onscroll = () => {
            setWindowPosition(window.scrollY);
        };
        if (windowPosition >= 60) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    }, [windowPosition]);

    const handleMenu = () => {
        isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true);
    };
    return (
        <header className={`header ${isScrolled ? 'inverted' : ''}`}>
            <nav className='nav flex container'>
                <a href='#' className='logoContent'>
                    <img src={logo} alt='logo' />
                </a>
                <ul className={`nav-links flex ${isMenuOpen ? 'open' : ''}`}>
                    <li
                        className='nav-link'
                        onClick={() => setIsMenuOpen(false)}>
                        <Link to='/'>Home</Link>
                    </li>

                    <li
                        className='nav-link'
                        onClick={() => setIsMenuOpen(false)}>
                        <Link to='/place-to-stay'>Place to stay</Link>
                    </li>

                    <li
                        className='nav-link'
                        onClick={() => setIsMenuOpen(false)}>
                        <a href='#nfts'>NFTs</a>
                    </li>

                    <li
                        className='nav-link'
                        onClick={() => setIsMenuOpen(false)}>
                        <a href='#community'>Community</a>
                    </li>
                    <li>
                        <div className='nav__button-container '>
                            <button
                                type='submit'
                                className='button nav__button-mobile'>
                                Connect Wallet
                            </button>
                        </div>
                    </li>
                    <li>
                        {' '}
                        <div className='closeMenu' onClick={handleMenu}>
                            <span className='material-symbols-outlined'>
                                close
                            </span>
                        </div>
                    </li>
                </ul>
                <div className='nav__button-container '>
                    <button type='submit' className='button nav__button'>
                        Connect Wallet
                    </button>
                </div>
                <div className='hamburgerMenu' onClick={handleMenu}>
                    <span className='material-symbols-outlined'>menu</span>
                </div>
            </nav>
        </header>
    );
};

export default Header;
