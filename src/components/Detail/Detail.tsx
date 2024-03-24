import Search from "../Search/Search.tsx";
import InputRadio from "./InputRadio.tsx";
import Ticket from "./Ticket.tsx";
import img1 from "../../assets/images/detail-1.jpg" ;
import img2 from "../../assets/images/detail-2.jpg" ;


const Detail = () => {
    return (
        <div className="bg-[#F2F2F2] pt-5 [@media(max-width:431px)]:px-3 md:px-3">
            <Search check="detail"/>
            <div className="lg:w-full xl:w-[1016px] md:w-full mx-auto mt-5 flex gap-5">
                <div className="md:w-3/12 bg-[#fff] p-4 rounded-md border-[1px] border-solid border-[#E0E0E0] [@media(max-width:431px)]:hidden">
                    <h3 className="lg:text-[17px] font-semibold">Sắp xếp</h3>
                    <form action="">
                        <InputRadio title="Mặc định" />
                        <InputRadio title="Giờ đi sớm nhất" />
                        <InputRadio title="Giờ đi muộn nhất" />
                        <InputRadio title="Đánh giá cao nhất" />
                        <InputRadio title="Giá tăng dần" />
                        <InputRadio title="Giá giảm dần" />
                    </form>
                </div>  
                <div className="w-9/12 [@media(max-width:431px)]:w-full">
                        <Ticket 
                        title="Hải Phòng Travel (Đất Cảng)" 
                        price="Từ 230.000đ" 
                        chair="Còn 11 chỗ trống" 
                        img={img1} 
                        times={{
                            timeGo: "19:00",
                            placeGo: "Hà Nội",
                            timeTo: "20:30",
                            placeTo: "Hải Phòng",
                        }}
                        />
                        <Ticket 
                        title="Hải Phòng Travel (Đất Cảng)" 
                        price="Từ 230.000đ" 
                        chair="Còn 11 chỗ trống" 
                        img={img1} 
                        times={{
                            timeGo: "19:00",
                            placeGo: "Hà Nội",
                            timeTo: "20:30",
                            placeTo: "Hải Phòng",
                        }}
                        />
                        <Ticket 
                        title="Nguyễn Gia Limousine (Hải Phòng)" 
                        price="Từ 230.000đ" 
                        chair="Còn 11 chỗ trống" 
                        img={img2}
                        times={{
                            timeGo: "14:01",
                            placeGo: "VP Cầu Giấy",
                            timeTo: "15:31",
                            placeTo: "Hải Phòng",
                        }}
                         />
                </div>
                
            </div>
            <div className="fixed bottom-3 left-1/2 -translate-x-1/2 hidden [@media(max-width:431px)]:block font-medium rounded-2xl left-0 px-8 py-1 bg-[#F3F3F3]">
            Sắp xếp
            </div>
        </div>
    )
}

export default Detail; 