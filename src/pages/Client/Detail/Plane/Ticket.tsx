const Ticket = () => {
    return (
        <div
            className="w-full bg-[#fff] px-4 py-3 rounded-md
            border-[1px] border-solid border-[#E0E0E0] mb-5"
        >
            <div className="flex justify-between items-start">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-[34px] h-[34px] p-1 border rounded-lg">
                            <img
                                src="https://storage.googleapis.com/goyolo-uat/images/airlines/vu.png"
                                alt=""
                                className=""
                            />
                        </div>
                        <h4 className="text-sm font-medium text-[#0d2e59]">
                            Vietravel Airlines
                        </h4>
                    </div>
                    <p className="text-sm font-medium text-[#474747]">
                        Economy
                    </p>
                    <span className="text-xs font-nornal text-[#474747]">
                        Airbus VU727
                    </span>
                </div>
                <div>
                    <div className="flex items-center">
                        <div className="min-w-[100px] text-start">
                            <h4 className="text-lg font-bold text-[#141414]">
                                21:50
                            </h4>
                            <p className="text-xs font-nornal text-[#858585] py-1">
                                HAN
                            </p>
                            <p className="text-xs font-nornal text-[#858585]">
                                Nội Bài
                            </p>
                        </div>
                        <div className="text-center min-w-[100px] flex justify-center">
                            <div>
                                <p className="text-xs font-nornal text-[#858585]">
                                    2h15
                                </p>
                                <img
                                    src="https://229a2c9fe669f7b.cmccloud.com.vn/svgIcon/route-direction.svg"
                                    className="py-1"
                                    alt=""
                                />
                                <p className="text-xs font-nornal text-[#858585]">
                                    Bay thẳng
                                </p>
                            </div>
                        </div>
                        <div className="min-w-[100px] text-end">
                            <h4 className="text-lg font-bold text-[#141414]">
                                00:05
                            </h4>
                            <p className="text-xs font-nornal text-[#858585] py-1">
                                HAN
                            </p>
                            <p className="text-xs font-nornal text-[#858585]">
                                Tân Sơn Nhất
                            </p>
                        </div>
                    </div>
                    <div className="pt-3 flex justify-end">
                        <div className="flex gap-1 justify-center w-[50px] items-center px-[6px] bg-[#eefbf4] rounded-[4px]">
                            <img
                                src="https://229a2c9fe669f7b.cmccloud.com.vn/svgIcon/flight-briefcase.svg"
                                alt=""
                            />
                            <p className="text-[#141414] text-xs font-normal">
                                7kg
                            </p>
                        </div>
                    </div>
                </div>
                <div className="text-end">
                    <div className="font-bold text-lg text-[#2474e5] flex items-center gap-1">
                        1.756.040đ{' '}
                        <span className="text-sm font-normal text-[#858585]">
                            /khách
                        </span>
                    </div>
                    <p className="font-normal text-sm text-[#474747 ]">
                        1.756.040đ
                        <span className="text-sm font-normal text-[#858585]">
                            /1 vé
                        </span>
                    </p>
                </div>
            </div>
            <div className="flex justify-between items-end pt-6 pb-3 border-b">
                <div>
                    <ul className="flex gap-5 items-center">
                        <li className="font-bold text-xs text-[#2474e5] relative
                        after:content-[''] after:absolute after:-bottom-[12px] after:left-0
                        after:right-0 after:h-[2px] after:bg-[#2474e5]">
                            Chi tiết
                        </li>
                        <li className="font-bold text-xs text-[#2474e5] relative
                        after:content-[''] after:absolute after:-bottom-[12px] after:left-0
                        after:right-0 after:h-[2px] after:bg-[#2474e5]">
                            Chi tiết
                        </li>
                    </ul>
                </div>
                <button className="text-base font-bold bg-[#ffd333] text-black px-[50px] py-[8px] rounded-[6px]">
                    Đặt vé
                </button>
            </div>
            <div className="pt-5 flex gap-5">
                <div className="w-1/2">
                    <p className="font-normal text-sm text-[#474747]">
                        Bạn có thể{' '}
                        <span className="font-medium">mua thêm hành lý</span>{' '}
                        sau khi nhập thông tin hành khách. Tính năng{' '}
                        <span className="font-medium">
                            mua suất ăn, chỗ ngồi
                        </span>{' '}
                        sẽ sớm được phát triển trong thời gian tới.
                    </p>
                </div>
                <div className="w-1/2 pl-4 border-l border-[#e0e0e0]">
                    <div className="flex items-center gap-2 mb-2">
                        <img
                            src="https://229a2c9fe669f7b.cmccloud.com.vn/svgIcon/flight-briefcase.svg"
                            alt=""
                        />
                        <p className="font-normal text-sm text-[#474747]">
                            7kg hành lý xách tay (1 kiện)
                        </p>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                        <img
                            src="https://229a2c9fe669f7b.cmccloud.com.vn/svgIcon/no-meal.svg"
                            alt=""
                        />
                        <p className="font-normal text-sm text-[#474747]">
                            Không bao gồm suất ăn
                        </p>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                        <img
                            src="https://229a2c9fe669f7b.cmccloud.com.vn/svgIcon/no-refund-ticket.svg"
                            alt=""
                        />
                        <p className="font-normal text-sm text-[#474747]">
                            Không được phép hoàn vé
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ticket;
