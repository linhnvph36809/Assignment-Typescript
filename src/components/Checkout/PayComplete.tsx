import { useEffect } from 'react';
import moment from 'moment';
import { useLocation } from 'react-router-dom';
import { postBooking } from '../../api/booking.api';
import { setIdLocal } from '../../local';
const PayComplete = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const tripId = queryParams.get('id');
    const name = queryParams.get('name');
    const email = queryParams.get('email');
    const phone = queryParams.get('phone');
    const message = queryParams.get('message');
    const orderInfo = queryParams.get('orderInfo');
    const amount = queryParams.get('amount');
    const dateTime = moment().format('HH:mm-DD-MM-YYYY');


    useEffect(() => {
        (async function(){
        if(name && email && phone && message === "Successful."){
            const payDataString = sessionStorage.getItem("pay");
            const isPay = payDataString ? JSON.parse(payDataString) : false;
            isPay && await postBooking({tripId,name,email,phone})  ;
            sessionStorage.removeItem("pay") ;
            setIdLocal(tripId) ; 
        }
        })()
    },[])


    return (
        <>
        {message && message === "Successful." 
        ? <div className='w-[470px] mx-auto bg-[#ffff] rounded-lg my-20 px-5 shadow-lg pb-20'>
            <div className='flex justify-center pt-5'>
            <img src="../src/assets/images/logo-pay-3.png" alt="" className="md:w-[180px] [@media(max-width:431px)]:w-[100px]" />
            </div>
            <h1 className='text-center text-2xl font-bold pt-4 pb-8'>Hóa đơn thanh toán</h1>
            <div className='flex justify-between mb-4 items-center'>
                <h3 className='text-base font-medium'>Đơn vị bán vé :</h3>
                <h3 className='text-red-500 font-bold'>Công ty TNHH  Dịch Vụ Vexere</h3>
            </div>
            <div className='flex justify-between mb-4 items-center'>
                <h3 className='text-base font-medium'>Họ và Tên :</h3>
                <h3 className='text-[#2474E5] font-medium'>{name}</h3>
            </div>
            <div className='flex justify-between mb-4 items-center'>
                <h3 className='text-base font-medium'>Email :</h3>
                <h3 className='text-[#2474E5] font-medium'>{email}</h3>
            </div>
            <div className='flex justify-between mb-4 items-center'>
                <h3 className='text-base font-medium'>Số điện thoại :</h3>
                <h3 className='text-[#2474E5] font-medium'>{phone}</h3>
            </div>
            <div className='flex justify-between mb-4 items-center'>
                <h3 className='text-base font-medium'>Hình thức thanh toán :</h3>
                <h3 className='text-[#2474E5] font-medium'>MOMO</h3>
            </div>
            <div className='flex justify-between mb-4 items-center'>
                <h3 className='text-base font-medium'>Nội dung :</h3>
                <h3 className='text-[#2474E5] font-medium'>{orderInfo}</h3>
            </div>
            <div className='flex justify-between mb-4 items-center'>
                <h3 className='text-base font-medium'>Tổng tiền :</h3>
                <h3 className='text-red-500 font-bold'>{amount}đ</h3>
            </div>
            <div className='flex justify-between mb-4 items-center'>
                <h3 className='text-base font-medium'>Thời gian :</h3>
                <h3 className='text-[#2474E5] font-medium'>{dateTime}</h3>
            </div>
            <div className='flex justify-between mb-4 items-center'>
                <h3 className='text-base font-medium'>Trạng thái :</h3>
                <h3 className='text-[#2474E5] font-medium'>{message}</h3>
            </div>
        </div> 
        : <h1>Not found</h1> }
        </>
    )
}

export default PayComplete ; 