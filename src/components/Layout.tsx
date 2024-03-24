import Header from './Header/Header.tsx' ; 
import Footer from './Footer/Footer.tsx' ; 
import { Outlet } from "react-router-dom";
const Layout = () => {
    return (
        <>
        <Header /> 
        <Outlet />
        <Footer /> 
        </>
    )
}

export default Layout ; 