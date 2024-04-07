import { createBrowserRouter,useNavigate } from 'react-router-dom';
import Layout from './components/Layout';
import Admin from './components/Admin/Admin';
import Main from './components/Main.tsx';
import Detail from './components/Detail/Detail.tsx';
import Checkout from './components/Checkout/Checkout.tsx';
import Form from './components/Admin/Trips/Add.tsx';
import Trip from './components/Admin/Trip.tsx';
import Update from './components/Admin/Trips/Update.tsx';
import TripHistory from './components/Admin/Trips/TripHistory.tsx';
import { getTripById } from './api/trips.api.ts';
import Dashboard from './components/Admin/Dashboard.tsx';
import SignUp from './components/Login/SignUp.tsx';
import SignIn from './components/Login/SignIn.tsx';
import PayComplete from './components/Checkout/PayComplete.tsx';
import BusHouse from './components/Admin/BusHouse.tsx';
import Order from './components/Order.tsx';


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
                loader: async ({params}) => {  
                    // console.log(params);
                                      
                 return  null
                },
                element: <Detail />
            },
            {
                path: "pay/:id",
                element: <Checkout />
            },
            {
                path: "order",
                element: <Order />
            },
            {
                path: "pay-complete",
                element: <PayComplete />
            },
            {
                path: "sign-up",
                element: <SignUp />
            },
            {
                path: "sign-in",
                element: <SignIn />
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
            {
                path: "dashboard",
                element: <Dashboard/>
            },
            {
                path: "trip/:id",
                loader: async ({ params }) => {
                    if (params.id) {
                        try {
                            const { data: trip } = await getTripById(params.id)
                            return trip ; 
                        } catch (error) {
                            console.log(error);
                        }
                    }
                    return {}
                },
                element: <Update/>
            },
            {
                path: "trip-history",
                element: <TripHistory/>
            },
            {
                path: "bushouse",
                element: <BusHouse/>
            },
        ]
    }
])

export default routers 