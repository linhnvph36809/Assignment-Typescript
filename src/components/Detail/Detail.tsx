import { useLocation,useNavigate } from "react-router-dom";
import { useState } from "react";
import moment from "moment";
import Search from "../Search/Search.tsx";
import Ticket from "./Ticket.tsx";
import img1 from "../../assets/images/detail-1.jpg";
import { useEffect } from "react";
import {searchTrips,searchTripsOneHour } from "../../api/trips.api.ts";



const Detail = () => {
    const [trips, setTrips] = useState([]);
    const location = useLocation();
    const URL = location.search.slice(1) ; 
    const navigate = useNavigate()
    async function handleSearch(check : string){
        const {data} = await searchTrips(URL+check)
        setTrips(data) ; 
    }

    useEffect(() => {
        (async function () {
            const {data} = await searchTrips(URL);
            setTrips(data) ; 
        })()

    }, [location])
    
    
    return (
        <div className="bg-[#F2F2F2] pt-5 [@media(max-width:431px)]:px-3 md:px-3">
            <Search check="detail"  />
            <div className="lg:w-full xl:w-[1016px] md:w-full mx-auto mt-5 flex gap-5">
                <div className="md:w-3/12 bg-[#fff] p-4 rounded-md border-[1px] border-solid border-[#E0E0E0] [@media(max-width:431px)]:hidden">
                    <h3 className="lg:text-[17px] font-semibold">Sắp xếp</h3>
                    <form action="">
                        <div className="flex items-center gap-2 lg:text-[14px] font-normal my-3">
                            <input name="search" onClick={() => {navigate("/detail"); handleSearch("")}} id="default" type="radio" className="lg:w-[18px] lg:h-[18px]" />
                            <label htmlFor="default" className="md:text-[12px] lg:text-[14px]">Mặc định</label>
                        </div>
                        <div className="flex items-center gap-2 lg:text-[14px] font-normal my-3">
                            <input onClick={() => handleSearch("&field=startTime&sort=asc") } name="search" id="early" type="radio" className="lg:w-[18px] lg:h-[18px]" />
                            <label htmlFor="early" className="md:text-[12px] lg:text-[14px]">Giờ đi sớm nhất</label>
                        </div>
                        <div className="flex items-center gap-2 lg:text-[14px] font-normal my-3">
                            <input name="search" onClick={() => handleSearch("&field=startTime&sort=desc") } id="late" type="radio" className="lg:w-[18px] lg:h-[18px]" />
                            <label htmlFor="late" className="md:text-[12px] lg:text-[14px]">Giờ đi muộn nhất</label>
                        </div>
                        <div className="flex items-center gap-2 lg:text-[14px] font-normal my-3">
                            <input name="search" onClick={() => handleSearch("&field=price&sort=asc") } id="priceUp" type="radio" className="lg:w-[18px] lg:h-[18px]" />
                            <label htmlFor="priceUp" className="md:text-[12px] lg:text-[14px]">Giá tăng dần</label>
                        </div>
                        <div className="flex items-center gap-2 lg:text-[14px] font-normal my-3">
                            <input  name="search" onClick={() => handleSearch("&field=price&sort=desc") } id="priceDown" type="radio" className="lg:w-[18px] lg:h-[18px]" />
                            <label htmlFor="priceDown" className="md:text-[12px] lg:text-[14px]">Giá giảm dần</label>
                        </div>
                        <div className="flex items-center gap-2 lg:text-[14px] font-normal my-3">
                            <input name="search" onClick={async() => {const {data} = await searchTripsOneHour() ; setTrips(data) } } id="oneHour" type="radio" className="lg:w-[18px] lg:h-[18px]" />
                            <label htmlFor="oneHour" className="md:text-[12px] lg:text-[14px]">Chuyến đi trước 1 tiếng</label>
                        </div>
                    </form>
                </div>
                <div className="w-9/12 [@media(max-width:431px)]:w-full">
                    {
                        trips.length > 0 ? trips.map(trip =>
                            <Ticket
                                title={trip.busHouseId?.name}
                                price={`${trip.price}đ`}
                                chair={`Còn ${trip.seats} chỗ trống`}
                                img={img1}
                                id={trip._id}
                                times={{
                                    timeGo: moment(trip.startTime).format("DD-MM-YYYY-HH:mm"),
                                    placeGo: trip.fromStation,
                                    timeTo: "...",
                                    placeTo: trip.toStation,
                                }}
                            />
                        ) : <h1 className="text-center">Vé không tồn tại !</h1>
                    }
                </div>

            </div>
            <div className="fixed bottom-3 left-1/2 -translate-x-1/2 hidden [@media(max-width:431px)]:block font-medium rounded-2xl left-0 px-8 py-1 bg-[#F3F3F3]">
                Sắp xếp
            </div>
        </div>
    )
}

export default Detail; 