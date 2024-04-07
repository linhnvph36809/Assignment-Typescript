import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { useForm, SubmitHandler } from "react-hook-form";
import Tab from "./Tab.tsx";
import search1 from '../../assets/images/search-1.jpg';
import search2 from '../../assets/images/search-2.jpg';
import search3 from '../../assets/images/search-3.jpg';
import tab1 from '../../assets/images/tab-1.jpg';
import tab2 from '../../assets/images/tab-2.jpg';
import tab3 from '../../assets/images/tab-3.jpg';
import tab4 from '../../assets/images/tab-4.jpg';
import { getTrips } from "../../api/trips.api.ts";
import { CITY_VN } from "../../constants/constants.ts";

type SearchTripForm = {
    startTime: string,
    fromStation: string,
    toStation: string,
}

const Search = (props: { check: string }) => {
    const navigate = useNavigate() 
    const [trips, setTrips] = useState([]) 

    useEffect(() => {
        (async function(){
          const {data} = await getTrips() ;           
          setTrips(data)
        })()
    },[])

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm<SearchTripForm>()

    const onSubmit: SubmitHandler<SearchTripForm> = async (data) => {
        console.log(data);
         navigate(`/detail?from=${data.fromStation}&to=${data.toStation}&date=${data.startTime}`)
     }


    return (
        <div className={`
        mx-auto
        bg-white p-4 rounded-xl 
        search 
        xl:w-[1016px] 
        ${props.check === "banner" ? "lg:w-[900px] md:w-[700px]" : "lg:w-full md:w-full"}
        md:p-3
        [@media(max-width:431px)]:w-[380px]
        [@media(max-width:431px)]:p-3
        `}>
            <ul className="flex justify-center border-b-2 border-solid border-[#E0E0E0]">
                <Tab title="Xe khách" img={tab1} active={true} />
                <Tab title="Máy bay" img={tab2} deal="-20K" />
                <Tab title="Tàu hỏa" img={tab3} deal="Mới" />
                {props.check == "banner" && <Tab title="Thuê xe" img={tab4} deal="Mới" />}

            </ul>
            <form action="/detail" method="GET" onSubmit={handleSubmit(onSubmit)}>
                <div className="lg:flex items-center justify-between pt-4 gap-4">
                    <div className="lg:w-10/12 md:w-full lg:flex  justify-between items-center rounded-lg place">
                        <div
                            className={`
                            lg:w-3/12 md:w-full flex items-center
                            gap-3 lg:py-1 px-6 md:py-1
                            md:border-b-2 md:border-solid
                            md:border-[#E0E0E0]
                            lg:border-none
                            `}>
                            <img src={search1} alt="" className="md:w-[24px] [@media(max-width:431px)]:w-[18px]" />
                            <div>
                                <span className="text-xs font-normal text-gray-400 [@media(max-width:431px)]:text-[8px]">Nơi xuất phát</span>
                                <select id="" className="w-full font-base font-medium" {...register("fromStation", { required: true })}>
                                <option value="">--Nơi đi--</option>
                                    {
                                        CITY_VN.map((city,index) => 
                                        <option key={index} value={city.name}>{city.name}</option>
                                        )
                                    }
                                </select>
                            </div>
                        </div>

                        <div
                            className={`
                            lg:w-3/12 md:w-full flex items-center
                            gap-3 lg:py-1 px-6 md:py-1
                            md:border-b-2 md:border-solid
                            md:border-[#E0E0E0]
                            lg:border-none
                            `}>
                            <img src={search2} alt="" className="md:w-[24px] [@media(max-width:431px)]:w-[18px]" />
                            <div>
                                <span className="text-xs font-normal text-gray-400 [@media(max-width:431px)]:text-[8px]">Nơi đến</span>
                                <select id="" className="w-full font-base font-medium" {...register("toStation", { required: true })}>
                                    <option value="">--Nơi đến--</option>
                                    {
                                        CITY_VN.map((city,index) => 
                                        <option key={index} value={city.name}>{city.name}</option>
                                        )
                                    }

                                </select>
                            </div>
                        </div>

                        <div
                            className={`
                            lg:w-3/12 md:w-full flex items-center
                            gap-3 lg:py-1 px-6 md:py-1
                            md:border-b-2 md:border-solid
                            md:border-[#E0E0E0]
                            lg:border-none
                            `}>
                            <img src={search3} alt="" className="md:w-[24px] [@media(max-width:431px)]:w-[18px]" />
                            <div>
                                <span className="text-xs font-normal text-gray-400 [@media(max-width:431px)]:text-[8px]">Ngày đi</span>
                                <input defaultValue={moment().format("YYYY-MM-DD")} min={moment().format("YYYY-MM-DD")} {...register("startTime", { required: true })}  type="date" className="w-full placeholder:text-[#000] lg:placeholder:text-[15px] md:placeholder:text-xs font-medium [@media(max-width:431px)]:text-[10px]" />
                            </div>
                        </div>
                        
                        <div className="w-3/12 flex items-center gap-3 py-4 px-6 justify-center md:hidden lg:block [@media(max-width:431px)]:hidden">
                            <div className="flex gap-2 items-center">
                                {props.check == "detail" && <span className="text-sm font-normal text-[#2474E5]">add</span>}
                                <p className="text-base font-medium text-gray-400 text-sky-500">Thêm ngày về</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-2/12 md:w-full md:my-4 [@media(max-width:431px)]:my-2">
                        <button type="submit" className="w-full lg:rounded-lg md:rounded-md [@media(max-width:431px)]:rounded text-center lg:py-4 lg:text-lg md:text-sm md:py-2 font-medium">Tìm kiếm</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Search; 