import Input from "./Input.tsx" ; 
import InfoPay from "./InfoPay.tsx";
import TicketPay from "./TicketPay.tsx";
const Checkout = () => {
  return (
    <div className="md:w-[730px] mx-auto bg-[#F2F2F2] my-10 rounded-lg px-5 pb-20">
      <div className="flex justify-center py-5 border-b-[2px] border-solid border-[#E0E0E0]">
        <img src="./src/assets/images/logo-pay.png" alt="" className="md:w-[200px] [@media(max-width:431px)]:w-[100px]" />
      </div>
      <TicketPay />
      <form action="">
        <h1 className="lg:text-xl font-semibold mt-4 [@media(max-width:431px)]:text-[16px]">Thông tin khách hàng</h1>
        <div className="grid md:grid-cols-2 gap-x-5">
          <Input title="Tên người đi"/>
          <Input title="Email"/>
          <Input title="Số điện thoại"/>
          <Input title="Số chứng minh"/>
        </div>
      </form>
      <InfoPay />
      <div className="flex [@media(max-width:431px)]:flex-col-reverse justify-between items-center py-5">
      <p className="md:text-xs [@media(max-width:431px)]:text-[10px]">Bằng việc tiếp tục, bạn đồng ý với <a href="#" className="text-[#2474E5] font-semibold">Chính sách bảo mật thanh toán</a> và <a href="#" className="text-[#2474E5] font-semibold">Quy chế</a></p>
      <button className="md:w-1/3 bg-[#FFC700] py-3 font-semibold text-base rounded-lg [@media(max-width:431px)]:w-full [@media(max-width:431px)]:my-3 [@media(max-width:431px)]:py-2 [@media(max-width:431px)]:rounded-md">Đặt vé</button>
      </div>
    </div>
  )
};

export default Checkout; 