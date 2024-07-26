import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import moment from "moment";
import Time from "./Time.tsx";
import { pay } from "../../../api/pay.api.ts";
import { getTripById } from "../../../api/trips.api.ts";

type payForm = {
  name: string;
  email: string;
  phone: number;
};

const Checkout = () => {
  const [trip, setTrip] = useState<any>([]);

  const { id } = useParams();

  useEffect(() => {
    (async function () {
      if (id) {
        const { data } = await getTripById(id);
        setTrip(data);
      }
    })();
  }, []);

  function validateDate(email: string) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email) || "Email không đúng định dạng!";
  }

  const validatePhoneNumber = (phoneNumber: string) => {
    const phoneNumberRegex =
      /^(0|\+84)(3[2-9]|5[689]|7[06-9]|8[1-9]|9[0-9])\d{7}$/;
    return phoneNumberRegex.test(phoneNumber) || "Số điện thoại sai định dạng!";
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<payForm>();

  const onSubmit: SubmitHandler<payForm> = async (data) => {
    try {
      const { data: url } = await pay(
        trip.price,
        trip._id,
        data.name,
        data.email,
        data.phone
      );
      window.location.href = url;
      sessionStorage.setItem("pay", JSON.stringify(true));
    } catch (error) {
      alert("Thanh toán thất bại !");
    }
  };

  return (
    <div className="md:w-[730px] mx-auto bg-[#F2F2F2] my-10 rounded-lg px-5 pb-20">
      <div className="flex justify-center py-5 border-b-[2px] border-solid border-[#E0E0E0]">
        <img
          src="../src/assets/images/logo-pay-3.png"
          alt=""
          className="md:w-[250px] [@media(max-width:431px)]:w-[100px]"
        />
      </div>
      <div className="flex justify-between items-center py-5">
        <div className="flex gap-4">
          <img
            src="../src/assets/images/detail-1.jpg"
            alt=""
            className="md:w-[100px] [@media(max-width:431px)]:w-[80px]"
          />
          <div className="flex flex-col justify-between">
            <h3 className="md:text-[14px] font-semibold [@media(max-width:431px)]:text-[12px]">
              {trip.busHouseId?.name}
            </h3>
            <div>
              <div className="flex gap-2 items-center">
                <svg
                  width="12"
                  height="73"
                  className="[@media(max-width:431px)]:w-[9px] [@media(max-width:431px)]:h-[70px]"
                  viewBox="0 0 13 74"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1_711)">
                    <path
                      d="M6.55005 16.8571V56.2857"
                      stroke="#787878"
                      stroke-width="1.71429"
                      stroke-linecap="round"
                    />
                    <path
                      d="M6.5501 16C9.15373 16 11.2644 13.8893 11.2644 11.2857C11.2644 8.68207 9.15373 6.57141 6.5501 6.57141C3.94647 6.57141 1.83582 8.68207 1.83582 11.2857C1.83582 13.8893 3.94647 16 6.5501 16Z"
                      stroke="#484848"
                      stroke-width="2.57143"
                    />
                    <path
                      d="M6.54999 55C5.1989 54.9893 3.89871 55.5148 2.93459 56.4614C1.97048 57.408 1.42116 58.6984 1.40713 60.0494C1.40463 60.7598 1.55825 61.4621 1.85713 62.1066C3.07316 64.4529 4.57674 66.6386 6.33313 68.6132C6.36032 68.6438 6.3937 68.6684 6.43109 68.6852C6.46847 68.7021 6.509 68.7107 6.54999 68.7107C6.59099 68.7107 6.63151 68.7021 6.6689 68.6852C6.70628 68.6684 6.73966 68.6438 6.76685 68.6132C8.52259 66.6409 10.0261 64.4578 11.2428 62.1143C11.5418 61.4698 11.6954 60.7676 11.6928 60.0572C11.6809 58.7047 11.1324 57.4124 10.1681 56.4642C9.20376 55.5159 7.90241 54.9893 6.54999 55ZM6.54999 62.6714C5.84812 62.6771 5.17264 62.4042 4.67176 61.9125C4.17088 61.4208 3.88552 60.7504 3.87828 60.0486C3.87828 59.34 4.15976 58.6604 4.6608 58.1594C5.16185 57.6583 5.84141 57.3769 6.54999 57.3769C7.25857 57.3769 7.93814 57.6583 8.43918 58.1594C8.94022 58.6604 9.22171 59.34 9.22171 60.0486C9.21446 60.7504 8.9291 61.4208 8.42822 61.9125C7.92735 62.4042 7.25187 62.6771 6.54999 62.6714Z"
                      fill="#787878"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_711">
                      <rect
                        width="12"
                        height="74"
                        fill="white"
                        transform="translate(0.550049)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <div>
                  <Time
                    time={moment(trip.startTime).format("DD-MM-YYYY-HH:mm")}
                    place={trip.fromStation}
                  />
                  <span className="lg:text-[10px] font-normal text-[#707070] [@media(max-width:431px)]:text-[10px]">
                    1h30m
                  </span>
                  <Time time="..." place={trip.toStation} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* <p className="text-end text-sm text-[#484848] my-2 font-normal [@media(max-width:431px)]:text-[10px]">Số ghế : 1</p> */}
          <h3 className="lg:text-base text-[#2474E5] font-semibold text-end [@media(max-width:431px)]:text-[12px]">
            Tạm tính: {trip.price}đ
          </h3>
        </div>
      </div>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="lg:text-xl font-semibold mt-4 [@media(max-width:431px)]:text-[16px]">
          Thông tin khách hàng
        </h1>
        <div className="grid md:grid-cols-2 gap-x-5">
          <div className="pt-4">
            <label
              htmlFor=""
              className="block pb-2 md:text-sm font-medium text-[#484848] [@media(max-width:431px)]:text-xs"
            >
              Tên người dùng
            </label>
            <input
              type="text"
              {...register("name", { required: "Vui lòng nhập tên" })}
              className="w-full h-[42px] rounded-md px-5 border-[1px] border-solid border-[#ccc]"
            />
            {errors.name?.message && (
              <p className="my-2 text-red-500 text-xs">
                {errors.name?.message}
              </p>
            )}
          </div>
          <div className="pt-4">
            <label
              htmlFor=""
              className="block pb-2 md:text-sm font-medium text-[#484848] [@media(max-width:431px)]:text-xs"
            >
              Email
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Vui lòng nhập email",
                validate: { date: (v) => validateDate(v) },
              })}
              className="w-full h-[42px] rounded-md px-5 border-[1px] border-solid border-[#ccc]"
            />
            {errors.email?.message && (
              <p className="my-2 text-red-500 text-xs">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="pt-4">
            <label
              htmlFor=""
              className="block pb-2 md:text-sm font-medium text-[#484848] [@media(max-width:431px)]:text-xs"
            >
              Số điện thoại
            </label>
            <input
              type="number"
              {...register("phone", {
                required: "Vui lòng nhập số điện thoại",
                validate: { date: (v: any) => validatePhoneNumber(v) },
              })}
              className="w-full h-[42px] rounded-md px-5 border-[1px] border-solid border-[#ccc]"
            />
            {errors.phone?.message && (
              <p className="my-2 text-red-500 text-xs">
                {errors.phone?.message}
              </p>
            )}
          </div>
          <div className="pt-4">
            <label
              htmlFor=""
              className="block pb-2 md:text-sm font-medium text-[#484848] [@media(max-width:431px)]:text-xs"
            >
              Nội dung
            </label>
            <input
              type="text"
              disabled
              value="Thanh toan ve xe"
              className="w-full h-[42px] rounded-md px-5 border-[1px] border-solid border-[#ccc] text-[#2474E5]"
            />
          </div>
        </div>
        <div className="flex [@media(max-width:431px)]:flex-col-reverse py-5 items-start justify-between border-b-2 border-solid border-[#E0E0E0]">
          <div className="[@media(max-width:431px)]:w-full">
            <span className="text-base text-[#484848] font-semibold my-3 block">
              Phương thức thanh toán
            </span>
            <div className="flex gap-2 items-center mb-2">
              <input checked type="radio" name="bank" />
              <h3 className="flex items-center gap-2 text-xs">
                <img
                  src="../src/assets/images/logo-pay-2.png"
                  alt=""
                  className="w-[20px]"
                />
                Ví MoMo
              </h3>
            </div>
            <div className="flex gap-2 items-center mb-2">
              <input type="radio" name="bank" />
              <h3 className="flex items-center gap-2 text-xs">
                <img
                  src="../src/assets/images/logo-pay.png"
                  alt=""
                  className="w-[30px]"
                />
                Thanh toán VNPAY
              </h3>
            </div>
          </div>
          <div className="[@media(max-width:431px)]:w-full">
            <div className="flex justify-between items-center gap-5 my-3">
              <span className="text-base text-[#484848] font-semibold">
                Tạm tính :{" "}
              </span>
              <span className="text-xs font-semibold">{trip.price}đ</span>
            </div>
            <div className="flex justify-between items-center gap-5 my-3">
              <span className="text-base text-[#484848] font-semibold">
                Chiết khấu :{" "}
              </span>
              <span className="text-xs font-semibold">0đ</span>
            </div>
            <div className="flex justify-between items-center gap-5">
              <h3 className="text-[#484848] text-base font-semibold">
                Tổng thanh toán :
              </h3>
              <h3 className="lg:text-lg text-[#2474E5] font-semibold text-end [@media(max-width:431px)]:text-[14px]">
                {trip.price}đ
              </h3>
            </div>
          </div>
        </div>
        <div className="flex [@media(max-width:431px)]:flex-col-reverse justify-between items-center py-5">
          <p className="md:text-xs [@media(max-width:431px)]:text-[10px]">
            Bằng việc tiếp tục, bạn đồng ý với{" "}
            <a href="#" className="text-[#2474E5] font-semibold">
              Chính sách bảo mật thanh toán
            </a>{" "}
            và{" "}
            <a href="#" className="text-[#2474E5] font-semibold">
              Quy chế
            </a>
          </p>
          <button
            type="submit"
            className="md:w-1/3 bg-[#FFC700] py-3 font-semibold text-base rounded-lg [@media(max-width:431px)]:w-full [@media(max-width:431px)]:my-3 [@media(max-width:431px)]:py-2 [@media(max-width:431px)]:rounded-md"
          >
            Đặt vé
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
