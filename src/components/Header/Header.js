import { useState } from 'react';
import logo from '../../assets/images/logo.svg';

import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleMenu = () => {
        isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true);
    };
    return (
        <header className='header '>
            <nav className='nav flex container'>
                <a href='#' className='logoContent'>
                    <img src={logo} alt='logo' />
                </a>
                <ul className={`nav-links flex ${isMenuOpen ? 'open' : null}`}>
                    <li className='nav-link'>
                        <a href='#'>Home</a>
                    </li>

                    <li className='nav-link'>
                        <a href='#'>Place to stay</a>
                    </li>

                    <li className='nav-link'>
                        <a href='#'>NFTs</a>
                    </li>

                    <li className='nav-link'>
                        <a href='#'>Community</a>
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
                            <span class='material-symbols-outlined'>close</span>
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
