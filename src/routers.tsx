import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Admin from './components/Admin/Admin';
import Main from './components/Main.tsx';
import Detail from './components/Detail/Detail.tsx';
import Checkout from './components/Checkout/Checkout.tsx';
import Form from './components/Admin/Form';
import Trip from './components/Admin/Trip.tsx';
const routers = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "",
                element: <Main />
            },
            {
                path: "detail",
                element: <Detail />
            },
            {
                path: "pay",
                element: <Checkout />
            }
        ]
    },
    {
        path: "/admin",
        // Nested router
        element: <Admin />,
        children: [
            {
                path: "",
                element: <Form/>
            },
            {
                path: "trip",
                element: <Trip/>
            },
        ]
    }
])

export default routers 