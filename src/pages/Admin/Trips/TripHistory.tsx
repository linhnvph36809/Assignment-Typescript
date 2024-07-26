import { useEffect, useState } from "react";
import moment from "moment";
import Button from "../Button";
import Heading from "../Heading";
import Text from "../Text";
import { getTripsHistory } from "../../../api/trips.api";
const TripHistory = () => {

    const [trips, setTrips] = useState<any>([]);

    useEffect(() => {
        (async function () {
            const { data } = await getTripsHistory();
            setTrips(data);
        })();

    }, []);

    
    return (
        <div>
            <Heading title="Danh sách chuyến xe" />
            <div className="flex justify-between items-center">
                <Button title="Thêm mới chuyến xe" />
            </div>
            {trips.length > 0 ? trips.map((trip:any, index:number) => <div key={index} className="py-5 px-10 rounded-lg bg-[#f2f2f2] border-[1px] border-solid border-[#969696] mt-5 mb-12">
                <div className="flex justify-between my- items-center">
                    <div className="w-8/12">
                        <h1 className="text-[32px] font-semibold my-3">Mã chuyến : {trip._id}</h1>
                        <p className="font-normal text-3xl my-5">{trip.busHouseId?.name}</p>
                        <Text title="Số ghế còn trống :" text={trip.seats} />
                    </div>
                    <div className="w-4/12">
                        <Text title="SĐT nhà xe:" text={trip.busHouseId?.phone} />
                    </div>
                </div>
                <div className="flex justify-between items-center my-10">
                    <div className="w-8/12">
                        <Text title="Khởi hành:" text={moment(trip.startTime).format("DD-MM-YYYY-HH:mm")} />
                    </div>
                    <div className="w-4/12">
                        <Text title="Bến xe :" text={trip.stationId?.name} />
                    </div>
                </div>
                <div className="flex justify-between items-center my-8">
                    <div className="w-8/12">
                        <Text title="Điểm đi:" text={trip.fromStation} />
                    </div>
                    <div className="w-4/12">
                        <Text title="Điểm đến :" text={trip.toStation} />
                    </div>
                </div>
            </div>
            )
            : <h1 className="text-center text-2xl font-medium">Trống!</h1>}

        </div>
    )
}

export default TripHistory; 