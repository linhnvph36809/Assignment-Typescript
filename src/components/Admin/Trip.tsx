import {Link,useNavigate} from "react-router-dom"
import { getTrips,getTripsTime,deleteTrip } from "../../api/trips.api";
import moment from "moment";
import { useEffect, useState } from "react";
import { getBookingById } from "../../api/booking.api";
import Button from "./Button";
import Heading from "./Heading";
import Text from "./Text";
const Trip = () => {
    const [trips, setTrips] = useState([{}]);

    useEffect(() => {
        (async function () {
            const { data } = await getTrips();
            setTrips(data);
        })();
    }, []);
    
    async function handleTripsTime(day:string){
        const {data} = await getTripsTime(day);
        setTrips(data);  
    }
    
    async function handleDelete(id:string){
        const {data: bookings} = await getBookingById(id);
        if(bookings.length == 0){
            await deleteTrip(id) ;
            const { data } = await getTrips();
            setTrips(data);
            alert("Xóa thành công!") ; 

        }else{
            alert("Vé đã được đặt không thể xóa!") ; 
        } 
            
    }
    
    return (
        <div>
            <Heading title="Danh sách chuyến xe" />
            <div className="flex justify-between items-center">
                <Button title="Thêm mới chuyến xe" />
                <select onChange={(e) => handleTripsTime(e.target.value) }  name="" id="" className="rounded-3xl font-semibold text-base border-solid border-black border-[1px] py-3 w-2/12 text-center" >
                    <option className="text-base font-medium" value="">Tất cả</option>
                    <option className="text-base font-medium" value="3">3 ngày tiếp theo</option>
                    <option className="text-base font-medium" value="7">1 tuần tiếp theo</option>
                    <option className="text-base font-medium" value="30">1 tháng tiếp theo</option>
                </select>
            </div>
            {trips && trips.length > 0 ? trips.map((trip,index) => 
            <div key={index} className="py-5 px-10 rounded-lg bg-[#f2f2f2] border-[1px] border-solid border-[#969696] mt-5 mb-12">
                <div className="flex justify-end gap-3">
                <Link to={`/admin/trip/${trip._id}`} className="text-end block underline hover:text-[#2474E5]">Cập nhật</Link>
                <p className="underline hover:text-[#2474E5] hover:cursor-pointer" onClick={() => handleDelete(trip._id)}>Xóa</p>
                </div>                
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
                        <Text title="Khởi hành:" text={ moment(trip.startTime).format("DD-MM-YYYY-HH:mm")} />
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

export default Trip; 