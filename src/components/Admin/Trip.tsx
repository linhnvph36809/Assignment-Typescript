import { useEffect } from "react";
import Button from "./Button" ; 
import Heading from "./Heading";
import Text from "./Text";
const Trip = () => {

    useEffect(() => {
        async function getApi(){
            const request = await fetch("http://localhost:4000/trips") ; 
            const trips = await request.json() ; 
            console.log(trips);
        } 
        getApi() ;
    },[]);
    
    return (
        <div>   
            <Heading title="Danh sách chuyến xe" />
            <div className="flex justify-between items-center">
            <Button title="Thêm mới chuyến xe" />
            <div className="relative border-[1px] rounded-3xl border-solid border-black md:w-[215px] text-center py-3 text-base font-bold">
                3 Ngày tiếp theo
                <div className="absolute left-0 right-0 top-14 ">
                <ul>
                    <li className="text-base font-bold border-solid border-black border-[1px] py-2">1 tuần tiếp theo</li>
                    <li className="text-base font-bold border-solid border-black border-[1px] py-2">1 tháng tiếp theo</li>
                </ul>
                </div>
            </div>
            </div>
            <div className="py-5 px-10 rounded-lg bg-[#f2f2f2] border-[1px] border-solid border-[#969696] mt-5 mb-12">
                <div className="flex justify-between my- items-center">
                <div className="w-8/12">
                <h1 className="text-[32px] font-semibold my-3">Mã chuyến : XRF123</h1>
                <p className="font-normal text-3xl my-5">Hải Phòng Travel (Đất Cảng)</p>
                <Text title="Số ghế còn trống :" text="10" />
                </div>
                <div className="w-4/12">
                <Text title="SĐT nhà xe:" text="090xxxxxxxx" />
                </div>
                </div>
                <div className="flex justify-between items-center my-10">
                <div className="w-8/12">
                <Text title="Khởi hành:" text="18h30 ngày 27 - 03 - 2024" />
                </div>
                <div className="w-4/12">
                <Text title="Bến xe :" text="Mỹ Đình" />
                </div>
                </div>
                <div className="flex justify-between items-center my-8">
                <div className="w-8/12">
                <Text title="Điểm đi:" text="Hà Nội" />
                </div>
                <div className="w-4/12">
                <Text title="Điểm đến :" text="Hải Phòng" />
                </div>
                </div>
            </div>
            <div className="py-5 px-10 rounded-lg bg-[#f2f2f2] border-[1px] border-solid border-[#969696] mt-5 mb-12">
                <div className="flex justify-between my- items-center">
                <div className="w-8/12">
                <h1 className="text-[32px] font-semibold my-3">Mã chuyến : XRF123</h1>
                <p className="font-normal text-3xl my-5">Hải Phòng Travel (Đất Cảng)</p>
                <Text title="Số ghế còn trống :" text="10" />
                </div>
                <div className="w-4/12">
                <Text title="SĐT nhà xe:" text="090xxxxxxxx" />
                </div>
                </div>
                <div className="flex justify-between items-center my-10">
                <div className="w-8/12">
                <Text title="Khởi hành:" text="18h30 ngày 27 - 03 - 2024" />
                </div>
                <div className="w-4/12">
                <Text title="Bến xe :" text="Mỹ Đình" />
                </div>
                </div>
                <div className="flex justify-between items-center my-8">
                <div className="w-8/12">
                <Text title="Điểm đi:" text="Hà Nội" />
                </div>
                <div className="w-4/12">
                <Text title="Điểm đến :" text="Hải Phòng" />
                </div>
                </div>
            </div>
            
        </div>
    )
}

export default Trip ; 