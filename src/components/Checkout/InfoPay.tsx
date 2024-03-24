const InfoPay = () => {
    return (
        <div className="flex [@media(max-width:431px)]:flex-col-reverse py-5 items-start justify-between border-b-2 border-solid border-[#E0E0E0]">
        <div className="[@media(max-width:431px)]:w-full">
          <span className="text-base text-[#484848] font-semibold my-3 block">Phương thức thanh toán</span>
            <div className="flex gap-2 items-center mb-2">
                <input type="radio" />
                <h3 className="flex items-center gap-2 text-xs"><img src="./src/assets/images/logo-pay.png" alt="" className="w-[30px]" />Thanh toán VNPAY - QR</h3>
            </div>
            <div className="flex gap-2 items-center mb-2">
                <input type="radio" />
                <h3 className="flex items-center gap-2 text-xs"><img src="./src/assets/images/logo-pay-2.png" alt="" className="w-[20px]" />Ví MoMo</h3>
            </div>
        </div>
        <div className="[@media(max-width:431px)]:w-full">
          <div className="flex justify-between items-center gap-5 my-3">
          <span className="text-base text-[#484848] font-semibold">Tạm tính : </span>
          <span className="text-xs font-semibold">230.000 VND</span>
          </div>
          <div className="flex justify-between items-center gap-5 my-3">
          <span className="text-base text-[#484848] font-semibold">Chiết khấu : </span>
          <span className="text-xs font-semibold">0 VND</span>
          </div>
          <div className="flex justify-between items-center gap-5">
          <h3 className="text-[#484848] text-base font-semibold">Tổng thanh toán :</h3>
          <h3 className="lg:text-lg text-[#2474E5] font-semibold text-end [@media(max-width:431px)]:text-[14px]">230.000 VND</h3>
          </div>
        </div>
      </div>
    )
}

export default InfoPay  ;