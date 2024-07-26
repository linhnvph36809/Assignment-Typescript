import Header from '../../Header/index.tsx';
import Footer from '../../Footer/index.tsx';
import { Outlet } from "react-router-dom";
const Layout = () => {
    return (
        <>
            <Header />
            <main>
            <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout; 