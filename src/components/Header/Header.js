import logo from '../../assets/images/logo.svg';

import './Header.css';

const Header = () => {
    return (
        <header className='header '>
            <nav className='nav flex container'>
                <a href='#' className='logoContent'>
                    <img src={logo} alt='logo' />
                </a>
                <ul className='nav-links flex'>
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
                </ul>
                <div className='nav__button '>
                    <button className='button nav__button'>
                        Connect Wallet
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
