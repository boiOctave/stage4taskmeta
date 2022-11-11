import { lazy } from 'react';

import MainLayout from 'layout/MainLayout';
// import Loadable from 'ui-component/Loadable';
import Loadable from 'components/ui-components/Loadable';

// dashboard routing

const Main = Loadable(lazy(() => import('views/Main.js')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <Main />,
        },
    ],
};

export default MainRoutes;
