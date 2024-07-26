import Admin from '../components/Layouts/LayoutAdmin/index.tsx';
import Form from '../pages/Admin/Trips/Add.tsx';
import Trip from '../pages/Admin/Trip.tsx';
import Update from '../pages/Admin/Trips/Update.tsx';
import TripHistory from '../pages/Admin/Trips/TripHistory.tsx';
import Dashboard from '../pages/Admin/Dashboard.tsx';
import BusHouse from '../pages/Admin/BusHouse.tsx';

import { getTripById } from '../api/trips.api.ts';

const routerAdmin = {
    path: '/admin',
    element: <Admin />,
    children: [
        {
            path: '',
            element: <Form />,
        },
        {
            path: 'trip',
            element: <Trip />,
        },
        {
            path: 'dashboard',
            element: <Dashboard />,
        },
        {
            path: 'trip/:id',
            loader: async ({ params }: any) => {
                if (params.id) {
                    try {
                        const { data: trip } = await getTripById(params.id);
                        return trip;
                    } catch (error) {
                        console.log(error);
                    }
                }
                return {};
            },
            element: <Update />,
        },
        {
            path: 'trip-history',
            element: <TripHistory />,
        },
        {
            path: 'bushouse',
            element: <BusHouse />,
        },
    ],
};

export default routerAdmin;
