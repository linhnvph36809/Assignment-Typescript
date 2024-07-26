import { createBrowserRouter } from 'react-router-dom';

import routerClient from './routerClient';
import routerAdmin from './routerAdmin';

const routers = createBrowserRouter([
    routerClient,
    routerAdmin,
    {
        path: '*',
        element: (
            <h1 className="text-center py-5 text-2xl font-bold">
                404 Not Found
            </h1>
        ),
    },
]);

export default routers;
