import Header from "./Header" ; 
import Slibar from "./Slibar";
import { Outlet } from "react-router-dom";
const Admin = () => {
    const userDataString = sessionStorage.getItem("user");
    const isUser = userDataString ? JSON.parse(userDataString) : false;

    return (
        <>
        {isUser && isUser?.role === true ? <div className="w-[1440px] mx-auto">
        <Header />
        <div className="flex gap-10 min-h-[1068px]">
            <Slibar /> 
            <div className="md:w-9/12">
                <Outlet />
            </div>
        </div>
        </div> : <h1>404 Not found </h1>}
        </>
    )
}

export default Admin ; 