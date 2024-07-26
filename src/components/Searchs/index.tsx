import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import { useForm, SubmitHandler } from 'react-hook-form';

import Tab from './Tab.tsx';
import { getTrips } from '../../api/trips.api.ts';
import { CITY_VN } from '../../constants/constants.ts';

type SearchTripForm = {
    startTime: string;
    fromStation: string;
    toStation: string;
};

const Search = (props: { check: string; type: string }) => {
    const navigate = useNavigate();
    const [_, setTrips] = useState([]);

    useEffect(() => {
        (async function () {
            const { data } = await getTrips();
            setTrips(data);
        })();
    }, []);

    const { register, handleSubmit } = useForm<SearchTripForm>();

    const onSubmit: SubmitHandler<SearchTripForm> = async (data) => {
        navigate(
            `${props.type == 'bus' ? '/detail' : '/detail/plane'}?from=${
                data.fromStation
            }&to=${data.toStation}&date=${data.startTime}`,
        );
    };

    return (
        <div
            className={`
        mx-auto
        bg-white p-4 rounded-xl 
        search 
        xl:w-[1016px] 
        ${
            props.check == 'banner'
                ? 'lg:w-[900px] md:w-[700px]'
                : 'lg:w-full md:w-full'
        }
        md:p-3
        sm:w-[380px]
        sm:p-3
        `}
        >
            <Tab type={props.type} />
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="lg:flex items-center justify-between pt-4 gap-4">
                    <div className="lg:w-10/12 md:w-full lg:flex  justify-between items-center rounded-lg place">
                        <div
                            className={`
                            lg:w-3/12 md:w-full flex items-center
                            gap-3 lg:py-1 px-6 md:py-1
                            md:border-b-2 md:border-solid
                            md:border-[#E0E0E0]
                            lg:border-none
                            `}
                        >
                            <img
                                src="https://229a2c9fe669f7b.cmccloud.com.vn/svgIcon/pickup_vex_blue_24dp.svg"
                                alt=""
                                className="md:w-[24px] sm:w-[18px]"
                            />
                            <div>
                                <span className="text-xs font-normal text-gray-400 sm:text-[8px] md:text-xs font-normal">
                                    Nơi xuất phát
                                </span>
                                <select
                                    id=""
                                    className="w-full font-base font-medium"
                                    {...register('fromStation', {
                                        required: true,
                                    })}
                                >
                                    <option value="">--Nơi đi--</option>
                                    {CITY_VN.map((city, index) => (
                                        <option key={index} value={city.name}>
                                            {city.name}
                                        </option>
                                    ))}
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
                            `}
                        >
                            <img
                                src="https://229a2c9fe669f7b.cmccloud.com.vn/svgIcon/dropoff_new_24dp.svg"
                                alt=""
                                className="md:w-[24px] sm:w-[18px]"
                            />
                            <div>
                                <span className="text-xs font-normal text-gray-400 sm:text-[8px] md:text-xs font-normal">
                                    Nơi đến
                                </span>
                                <select
                                    id=""
                                    className="w-full font-base font-medium"
                                    {...register('toStation', {
                                        required: true,
                                    })}
                                >
                                    <option value="">--Nơi đến--</option>
                                    {CITY_VN.map((city, index) => (
                                        <option key={index} value={city.name}>
                                            {city.name}
                                        </option>
                                    ))}
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
                            `}
                        >
                            <img
                                src="https://storage.googleapis.com/fe-production/svgIcon/event_vex_blue_24dp.svg"
                                alt=""
                                className="md:w-[24px] sm:w-[18px]"
                            />
                            <div>
                                <span className="text-xs font-normal text-gray-400 sm:text-[8px] md:text-xs font-normal">
                                    Ngày đi
                                </span>
                                <input
                                    defaultValue={moment().format('YYYY-MM-DD')}
                                    min={moment().format('YYYY-MM-DD')}
                                    {...register('startTime', {
                                        required: true,
                                    })}
                                    type="date"
                                    className="w-full placeholder:text-[#000] lg:placeholder:text-[15px]
                                    md:placeholder:text-xs font-medium sm:text-[10px] md:text-sm font-normal"
                                />
                            </div>
                        </div>

                        <div className="w-3/12 flex items-center gap-3 py-4 px-6 justify-center md:hidden lg:block sm:hidden">
                            <div className="flex gap-2 items-center">
                                {props.check == 'detail' && (
                                    <span className="text-sm font-normal text-[#2474E5]">
                                        add
                                    </span>
                                )}
                                <p className="text-base font-medium text-gray-400 text-sky-500">
                                    Thêm ngày về
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-2/12 md:w-full md:my-4 sm:my-2">
                        <button
                            type="submit"
                            className="w-full lg:rounded-lg md:rounded-md sm:rounded text-center lg:py-4 lg:text-lg md:text-sm md:py-2 font-medium"
                        >
                            Tìm kiếm
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Search;
