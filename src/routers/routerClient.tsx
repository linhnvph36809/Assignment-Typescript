import Layout from '../components/Layouts/LayoutClient/index.tsx';
import Home from '../pages/Client/Home/Bus/index.tsx';
import BusDetail from '../pages/Client/Detail/Bus/index.tsx';
import Checkout from '../pages/Client/Checkout/Checkout.tsx';
import SignUp from '../pages/Client/Login/SignUp.tsx';
import SignIn from '../pages/Client/Login/SignIn.tsx';
import PayComplete from '../pages/Client/Checkout/PayComplete.tsx';
import Order from '../pages/Client/Order/index.tsx';
import PlaneDetail from '../pages/Client/Detail/Plane/index.tsx';
import HomePlane from '../pages/Client/Home/Planes/index.tsx';

const routerClient = {
    path: '/',
    element: <Layout />,
    children: [
        {
            path: '',
            element: <Home />,
        },
        {
            path: 'plane',
            element: <HomePlane />,
        },
        {
            path: 'detail',
            element: <BusDetail />,
        },
        {
            path: 'detail/plane',
            element: <PlaneDetail />,
        },
        {
            path: 'pay/:id',
            element: <Checkout />,
        },
        {
            path: 'order',
            element: <Order />,
        },
        {
            path: 'pay-complete',
            element: <PayComplete />,
        },
        {
            path: 'sign-up',
            element: <SignUp />,
        },
        {
            path: 'sign-in',
            element: <SignIn />,
        },
    ],
};
export default routerClient;
