import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Search from '../../../../components/Searchs/index.tsx';
import { searchTrips } from '../../../../api/trips.api.ts';
import { ITrip } from '../../../../interfaces/trip.ts';
import Ticket from './Ticket.tsx';

const PlaneDetail = () => {
    const [trips, setTrips] = useState<ITrip[]>([]);
    const location = useLocation();
    const URL = location.search.slice(1);
    const navigate = useNavigate();

    async function handleSearch(check: string) {
        const { data } = await searchTrips(URL + check);
        setTrips(data);
    }

    useEffect(() => {
        (async function () {
            const { data } = await searchTrips(URL);
            setTrips(data);
        })();
    }, [location]);


    return (
        <div className="bg-[#F2F2F2] pt-5 [@media(max-width:431px)]:px-3 md:px-3">
            <Search check="detail" type='plane' />
            <div className="lg:w-full xl:w-[1016px] md:w-full mx-auto mt-5 flex gap-5">
                <div className="md:w-3/12 bg-[#fff] p-4 rounded-md border-[1px] border-solid border-[#E0E0E0] [@media(max-width:431px)]:hidden">
                    <h3 className="lg:text-lg font-bold text-[#141414]">
                        Bộ lọc
                    </h3>
                    <div className="mt-3 pb-4 border-b">
                        <h4 className="lg:text-sm font-semibold pb-2">
                            Giờ cất cánh
                        </h4>
                        <div className="grid grid-cols-2 justify-between flex-wrap gap-2">
                            <div
                                className="border-2 border-[#e0e0e0] w-full h-[58px] rounded-[6px]
                            flex justify-center items-center"
                            >
                                <div className="text-center">
                                    <p className="text-sm font-medium">
                                        Sáng sớm
                                    </p>
                                    <p className="text-xs font-normal">
                                        00:00 - 06:00
                                    </p>
                                </div>
                            </div>
                            <div
                                className="border-2 border-[#e0e0e0] w-full h-[58px] rounded-[6px]
                            flex justify-center items-center"
                            >
                                <div className="text-center">
                                    <p className="text-sm font-medium">
                                        Sáng sớm
                                    </p>
                                    <p className="text-xs font-normal">
                                        00:00 - 06:00
                                    </p>
                                </div>
                            </div>
                            <div
                                className="border-2 border-[#e0e0e0] w-full h-[58px] rounded-[6px]
                            flex justify-center items-center"
                            >
                                <div className="text-center">
                                    <p className="text-sm font-medium">
                                        Sáng sớm
                                    </p>
                                    <p className="text-xs font-normal">
                                        00:00 - 06:00
                                    </p>
                                </div>
                            </div>
                            <div
                                className="border-2 border-[#e0e0e0] w-full h-[58px] rounded-[6px]
                            flex justify-center items-center"
                            >
                                <div className="text-center">
                                    <p className="text-sm font-medium">
                                        Sáng sớm
                                    </p>
                                    <p className="text-xs font-normal">
                                        00:00 - 06:00
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-3 pb-4 border-b">
                        <h4 className="lg:text-sm font-semibold pb-2">
                            Giờ hạ cánh
                        </h4>
                        <div className="grid grid-cols-2 justify-between flex-wrap gap-2">
                            <div
                                className="border-2 border-[#e0e0e0] w-full h-[58px] rounded-[6px]
                            flex justify-center items-center"
                            >
                                <div className="text-center">
                                    <p className="text-sm font-medium">
                                        Sáng sớm
                                    </p>
                                    <p className="text-xs font-normal">
                                        00:00 - 06:00
                                    </p>
                                </div>
                            </div>
                            <div
                                className="border-2 border-[#e0e0e0] w-full h-[58px] rounded-[6px]
                            flex justify-center items-center"
                            >
                                <div className="text-center">
                                    <p className="text-sm font-medium">
                                        Sáng sớm
                                    </p>
                                    <p className="text-xs font-normal">
                                        00:00 - 06:00
                                    </p>
                                </div>
                            </div>
                            <div
                                className="border-2 border-[#e0e0e0] w-full h-[58px] rounded-[6px]
                            flex justify-center items-center"
                            >
                                <div className="text-center">
                                    <p className="text-sm font-medium">
                                        Sáng sớm
                                    </p>
                                    <p className="text-xs font-normal">
                                        00:00 - 06:00
                                    </p>
                                </div>
                            </div>
                            <div
                                className="border-2 border-[#e0e0e0] w-full h-[58px] rounded-[6px]
                            flex justify-center items-center"
                            >
                                <div className="text-center">
                                    <p className="text-sm font-medium">
                                        Sáng sớm
                                    </p>
                                    <p className="text-xs font-normal">
                                        00:00 - 06:00
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-3 pb-4 border-b">
                        <h4 className="lg:text-sm font-semibold pb-2">
                            Giá vé
                        </h4>
                        <input
                            id="default-range"
                            type="range"
                            defaultValue={50}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                        />
                    </div>
                    <div className="mt-3 pb-4 border-b">
                        <h4 className="lg:text-sm font-semibold pb-2">
                            Hãng Bay
                        </h4>
                        <div className="flex gap-2 items-center">
                            <input
                                id="brand-plane"
                                type="checkbox"
                                defaultValue=""
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 
                                dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                                className="flex gap-2 items-center cursor-pointer"
                                htmlFor="brand-plane"
                            >
                                <img
                                    src="https://storage.googleapis.com/goyolo-uat/images/airlines/vj-new.png"
                                    alt=""
                                    className="w-[24px] h-[24px]"
                                />
                                <p className="font-medium text-[#141414] text-sm">
                                    Vietjet Air
                                </p>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="w-9/12 [@media(max-width:431px)]:w-full">
                    <Ticket />
                    <Ticket />

                </div>
            </div>
            <div className="fixed bottom-3 left-1/2 -translate-x-1/2 hidden [@media(max-width:431px)]:block font-medium rounded-2xl left-0 px-8 py-1 bg-[#F3F3F3]">
                Sắp xếp
            </div>
        </div>
    );
};

export default PlaneDetail;
