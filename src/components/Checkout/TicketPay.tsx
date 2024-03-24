import Time from "./Time.tsx";
const TicketPay = () => {
    return (
        <div className="flex justify-between items-center py-5">
        <div className="flex gap-4">
          <img src="./src/assets/images/detail-1.jpg" alt="" className="md:w-[100px] [@media(max-width:431px)]:w-[80px]" />
          <div className="flex flex-col justify-between">
            <h3 className="md:text-[14px] font-semibold [@media(max-width:431px)]:text-[12px]">Hải Phòng Travel (Đất Cảng)</h3>
            <div>
              <div className="flex gap-2 items-center">
                <svg width="12" height="73" className="[@media(max-width:431px)]:w-[9px] [@media(max-width:431px)]:h-[70px]" viewBox="0 0 13 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_1_711)">
                    <path d="M6.55005 16.8571V56.2857" stroke="#787878" stroke-width="1.71429" stroke-linecap="round" />
                    <path d="M6.5501 16C9.15373 16 11.2644 13.8893 11.2644 11.2857C11.2644 8.68207 9.15373 6.57141 6.5501 6.57141C3.94647 6.57141 1.83582 8.68207 1.83582 11.2857C1.83582 13.8893 3.94647 16 6.5501 16Z" stroke="#484848" stroke-width="2.57143" />
                    <path d="M6.54999 55C5.1989 54.9893 3.89871 55.5148 2.93459 56.4614C1.97048 57.408 1.42116 58.6984 1.40713 60.0494C1.40463 60.7598 1.55825 61.4621 1.85713 62.1066C3.07316 64.4529 4.57674 66.6386 6.33313 68.6132C6.36032 68.6438 6.3937 68.6684 6.43109 68.6852C6.46847 68.7021 6.509 68.7107 6.54999 68.7107C6.59099 68.7107 6.63151 68.7021 6.6689 68.6852C6.70628 68.6684 6.73966 68.6438 6.76685 68.6132C8.52259 66.6409 10.0261 64.4578 11.2428 62.1143C11.5418 61.4698 11.6954 60.7676 11.6928 60.0572C11.6809 58.7047 11.1324 57.4124 10.1681 56.4642C9.20376 55.5159 7.90241 54.9893 6.54999 55ZM6.54999 62.6714C5.84812 62.6771 5.17264 62.4042 4.67176 61.9125C4.17088 61.4208 3.88552 60.7504 3.87828 60.0486C3.87828 59.34 4.15976 58.6604 4.6608 58.1594C5.16185 57.6583 5.84141 57.3769 6.54999 57.3769C7.25857 57.3769 7.93814 57.6583 8.43918 58.1594C8.94022 58.6604 9.22171 59.34 9.22171 60.0486C9.21446 60.7504 8.9291 61.4208 8.42822 61.9125C7.92735 62.4042 7.25187 62.6771 6.54999 62.6714Z" fill="#787878" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_711">
                      <rect width="12" height="74" fill="white" transform="translate(0.550049)" />
                    </clipPath>
                  </defs>
                </svg>
                <div>
                    <Time time="19:00" place="Hà Nội" />
                    <span className="lg:text-[10px] font-normal text-[#707070] [@media(max-width:431px)]:text-[10px]">1h30m</span>
                    <Time time="20:00" place="Hải Phòng" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-end text-sm text-[#484848] my-2 font-normal [@media(max-width:431px)]:text-[10px]">Số ghế : 1</p>
          <h3 className="lg:text-base text-[#2474E5] font-semibold text-end [@media(max-width:431px)]:text-[12px]">Tạm tính: 230.000đ</h3>
        </div>
      </div>
    )
}

export default TicketPay ; 