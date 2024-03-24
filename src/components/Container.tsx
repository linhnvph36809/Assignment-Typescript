import Header from './Header/Header.tsx' ; 
import Footer from './Footer/Footer.tsx' ; 
import { Outlet } from "react-router-dom";
const Container = () => {
    return (
        <>
        <Header /> 
        <Outlet />
        <Footer /> 
        </>
    )
}

export default Container ; 