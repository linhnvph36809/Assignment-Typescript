import Header from "./Header" ; 
import Tab from "./Tab";
import { Outlet } from "react-router-dom";
const Admin = () => {
    return (
        <div className="w-[1440px] mx-auto">
        <Header />
        <div className="flex gap-10 min-h-[1068px]">
            <div className="md:w-3/12 bg-[#F2F2F2] border-[1px] border-[#000] border-solid px-2">
                <ul>
                    <Tab title="Dashboard"/>
                    <Tab title="Lịch sử chuyến" active/>
                    <Tab title="Chuyến xe"/>
                    <Tab title="Nhà xe"/>
                </ul>
            </div>
            <div className="md:w-9/12">
                <Outlet />
            </div>
        </div>
        </div>
    )
}

export default Admin ; 