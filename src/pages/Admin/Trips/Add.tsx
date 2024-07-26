import { useForm, SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Heading from '../Heading';
import Input from '../Input';
import { postTrips } from '../../../api/trips.api';
import { useEffect, useState } from 'react';
import { getStation } from '../../../api/station.api';
import { getBushouses } from '../../../api/busHouses.api';
import { useNavigate } from 'react-router-dom';
import { validateDate } from '../../../Dates/Trip';
import { CITY_VN } from '../../../constants/constants';

type AddTripForm = {
    busHouseId: string;
    startTime: string;
    fromStation: string;
    toStation: string;
    station: string;
    seats: string;
    price: string;
    stationId: string;
};

const Form = () => {
    const navigate = useNavigate();
    const [location, setLocation] = useState<any>({});

    useEffect(() => {
        (async function () {
            const { data: stations } = await getStation();
            const { data: busHouses } = await getBushouses();
            setLocation({ stations, busHouses });
        })();
    }, []);

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm<AddTripForm>();

    const onSubmit: SubmitHandler<AddTripForm> = async (data) => {
        try {
            await postTrips(data);
            alert('Thêm thành công !');
            navigate('/admin/trip');
            reset();
        } catch (error) {
            navigate("/")
        }
    };

    return (
        <>
            <Heading title="Thêm mới chuyến xe" />
            <Link
                to="/admin/trip"
                className="inline-block flex items-center gap-2 py-3"
            >
                <svg
                    width="7"
                    height="12"
                    viewBox="0 0 7 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M5.66654 1L1.2558 5.41074C0.93036 5.73618 0.93036 6.26382 1.2558 6.58926L5.66654 11"
                        stroke="#3C4242"
                        stroke-width="1.5"
                        stroke-linecap="round"
                    />
                </svg>
                Quay lại
            </Link>
            <div className="bg-[#F2F2F2] px-10 py-5 rounded-xl">
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        title="Nhà xe"
                        type=""
                        datas={location.busHouses}
                        register={{
                            ...register('busHouseId', {
                                required: 'Dữ liệu bắt buộc',
                            }),
                        }}
                    >
                        {errors.busHouseId}
                    </Input>
                    <div className="flex flex-wrap justify-between">
                        <Input
                            datas={''}
                            title="Thời gian bắt đầu"
                            type="datetime-local"
                            register={{
                                ...register('startTime', {
                                    required: 'Vui lòng nhập thời gian',
                                    validate: { date: (v) => validateDate(v) },
                                }),
                            }}
                        >
                            {errors.startTime}
                        </Input>
                        <Input
                            title="Số ghế"
                            type="number"
                            datas={''}
                            register={{
                                ...register('seats', {
                                    required: 'Vui lòng nhập số lượng ghế',
                                    min: 4,
                                }),
                            }}
                        >
                            {errors.seats}
                        </Input>
                        <Input
                            title="Giá"
                            type="number"
                            datas={''}
                            register={{
                                ...register('price', {
                                    required: 'Vui lòng nhập giá',
                                    min: 1000,
                                }),
                            }}
                        >
                            {errors.price}
                        </Input>
                        <Input
                            title="Bến xe"
                            type=""
                            datas={location.stations}
                            register={{
                                ...register('stationId', {
                                    required: 'Vui lòng nhập bến xe',
                                }),
                            }}
                        >
                            {errors.stationId}
                        </Input>
                        <Input
                            title="Điểm đi"
                            type=""
                            datas={CITY_VN}
                            register={{
                                ...register('fromStation', {
                                    required: 'Vui lòng nhập điểm đi',
                                }),
                            }}
                        >
                            {errors.fromStation}
                        </Input>
                        <Input
                            title="Điểm đến"
                            type=""
                            datas={CITY_VN}
                            register={{
                                ...register('toStation', {
                                    required: 'Vui lòng nhập điểm đến',
                                }),
                            }}
                        >
                            {errors.toStation}
                        </Input>
                    </div>
                    <div className="text-end">
                        <button
                            type="submit"
                            className="md:w-[265px] py-3 rounded-xl text-lg font-bold bg-black text-white mt-5"
                        >
                            Thêm mới
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Form;
