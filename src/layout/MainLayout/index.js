import { Outlet } from 'react-router-dom';

import './MainLayout.css';
const MainLayout = () => {
    return (
        <div className='container'>
            {' '}
            <Outlet />
        </div>
    );
};

export default MainLayout;
