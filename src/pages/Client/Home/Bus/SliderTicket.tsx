import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper/modules';
import { getTripsLimit } from '../../../../api/trips.api';
import { ITrip } from '../../../../interfaces/trip';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../../../contexts/GlobalContext';

export default function SliderTicket() {
    const [trips, setTrips] = useState([]);

    const { setLoading } = useGlobalContext();

    useEffect(() => {
        (async function () {
            try {
                setLoading(true);
                const { data } = await getTripsLimit();
                setTrips(data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                navigation={true}
                breakpoints={{
                    0: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                }}
                modules={[Pagination, Navigation]}
                className="sliderTicket hover:cursor-grab"
            >
                {trips.map((trip: ITrip, index: number) => (
                    <SwiperSlide key={index}>
                        <Link
                            to={`detail?from=${trip.fromStation}&to=${trip.toStation}&date=${trip.startTime}`}
                        >
                            <div>
                                <img
                                    className="w-full h-[116px] object-cover rounded-t"
                                    src="https://static.vexere.com/production/images/1659409802553.jpeg"
                                    alt=""
                                />
                                <div
                                    className={`px-3 sm:pb-6 pt-3 rounded-b sm:h-[70px] md:h-[100px] bg-[#9e947c]`}
                                >
                                    <h3 className="text-base font-semibold text-white sm:text-[13px] md:text-lg sm:leading-5">
                                        {trip.toStation} - {trip.toStation}
                                    </h3>
                                    <div className="flex items-center gap-2">
                                        <p className="text-sm font-normal text-white sm:text-[10px] md:text-sm sm:leading-5">
                                            Từ : {trip.price}đ
                                        </p>
                                        {/* {props.sale && <span className="text-xs font-normal text-white line-through [@media(max-width:431px)]:text-[8px]">{props.sale}</span>} */}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
