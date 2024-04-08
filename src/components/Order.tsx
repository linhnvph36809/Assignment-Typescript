import { useState, useEffect } from "react";
import moment from "moment";
import Time from "./Checkout/Time";
import { getTrips } from "../api/trips.api";
const Order = () => {
    const idProductArr = localStorage.getItem("idProducts");
    const idProduct = idProductArr ? JSON.parse(idProductArr) : [];
    
    const [trips, setTrip] = useState([]);

    useEffect(() => {
        (async function () {
            const { data: datas } = await getTrips();
            const trips = datas.filter(data => idProduct.includes(data._id))
            setTrip(trips)
        })()
    }, [])


    return (
        <>
            <div className="w-[1016px] mx-auto">
                <h1 className="text-3xl py-5">Danh sách vé xe</h1>
                {trips.length > 0 ? trips.map((trip, index) => (
                    <div key={index} className="flex justify-between items-center py-5 mb-5 w-9/12">
                        <div className="flex gap-4">
                            <img src="../src/assets/images/detail-1.jpg" alt="" className="md:w-[100px] [@media(max-width:431px)]:w-[80px]" />
                            <div className="flex flex-col justify-between">
                                <h3 className="md:text-[14px] pl-5 font-semibold [@media(max-width:431px)]:text-[12px]">{trip.busHouseId?.name}</h3>
                                <div>
                                    <div className="flex gap-2 items-center">
                                        <svg width="12" height="73" className="[@media(max-width:431px)]:w-[9px] [@media(max-width:431px)]:h-[70px]" viewBox="0 0 13 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            {/* Nội dung của SVG */}
                                        </svg>
                                        <div>
                                            <Time time={moment(trip.startTime).format("DD-MM-YYYY-HH:mm")} place={trip.fromStation} />
                                            <span className="lg:text-[10px] font-normal text-[#707070] [@media(max-width:431px)]:text-[10px]">1h30m</span>
                                            <Time time="..." place={trip.toStation} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                        <h3 className="lg:text-xs font-semibold text-end [@media(max-width:431px)]:text-[12px]">Số lượng : 1</h3>
                        <h3 className="lg:text-base text-[#2474E5] font-semibold text-end [@media(max-width:431px)]:text-[12px] my-2">Giá tiền: {trip.price}đ</h3>
                        <h3 className="lg:text-base font-semibold text-end [@media(max-width:431px)]:text-[12px] mb-2 text-red-500">Trạng thái : Đã thanh toán</h3>
                        </div>
                        <div>
                            <img src="../src/assets/images/qr-code.png" className="w-[80px]" alt="" />
                        </div>
                    </div>
                )) : <h1 className="text-center text-2xl font-medium">Trống!</h1>}
            </div>
        </>
    )
}

export default Order; 