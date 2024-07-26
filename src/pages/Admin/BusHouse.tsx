
import { useEffect, useState } from "react";
import Heading from "./Heading";
import { getBushouses } from "../../api/busHouses.api";
const BusHouse = () => {
    const [busHouses, setBusHouse] = useState([]);
    useEffect(() => {
        (async function () {
            const { data } = await getBushouses();
            setBusHouse(data)
        })()
    }, [])
    return (
        <>
            <Heading title="Nhà Xe" />
            <table className="w-full border-collapse border border-slate-400">
                <thead>
                    <tr>
                        <th className="text-center text-2xl border border-slate-300 py-4 font-bold">Tên nhà xe</th>
                        <th className="text-center text-2xl border border-slate-300 py-4 font-bold">Số điện thoại</th>
                        <th className="text-center text-2xl border border-slate-300 py-4 font-bold">Địa chỉ</th>
                    </tr>
                </thead>
                <tbody>

                    {busHouses.map((busHouse : any, index) => <tr key={index}>
                        <td className="text-center text-xl border border-slate-300 py-3 font-medium">{busHouse.name}</td>
                        <td className="text-center text-xl border border-slate-300 py-3 font-medium">{busHouse.phone}</td>
                        <td className="text-center text-xl border border-slate-300 py-3 font-medium">{busHouse.address}</td>
                    </tr>)}

                </tbody>
            </table>
        </>
    )
}

export default BusHouse; 