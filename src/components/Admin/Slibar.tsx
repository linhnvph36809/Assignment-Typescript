import { useState } from "react";
import {Link} from "react-router-dom";
const Slibar = () => {
    const [active,setActive] = useState("dashboard") ; 
    return (
        <div className="md:w-3/12 bg-[#F2F2F2] border-[1px] border-[#000] border-solid px-2">
        <ul>
        <li
        className=
        {`
        ${active === "dashboard" ? "bg-[#B8B8B8] border-[1px] border-solid border-black" 
        : "bg-[#DADADA]"} text-start text-xl font-semibold my-3 pl-8`
        }>
        <Link to="dashboard" className="block py-3" onClick={() => setActive("dashboard")}>Dashboard</Link>
        </li>
        <li 
        className=
        {`
        ${active === "tripHistory" ? "bg-[#B8B8B8] border-[1px] border-solid border-black" 
        : "bg-[#DADADA]"} text-start text-xl font-semibold my-3 pl-8`
        }>
        <Link to="trip-history" className="block py-3" onClick={() => setActive("tripHistory")} >Lịch sử chuyến</Link>
        </li>
        <li 
        className=
        {`
        ${active === "trip" ? "bg-[#B8B8B8] border-[1px] border-solid border-black" 
        : "bg-[#DADADA]"} text-start text-xl font-semibold my-3 pl-8`
        }>
        <Link to="/admin/trip" className="block py-3" onClick={() => setActive("trip")} >Chuyến xe</Link>
        </li>
        <li 
        className=
        {`
        ${active === "busHouses" ? "bg-[#B8B8B8] border-[1px] border-solid border-black" 
        : "bg-[#DADADA]"} text-start text-xl font-semibold my-3 pl-8`
        }>
        <Link to="bushouse" className="block py-3" onClick={() => setActive("busHouses")} >Nhà xe</Link>
        </li>
        </ul>
    </div>
    )
}

export default Slibar ; 