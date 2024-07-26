import instance from "./instance";
import { IBooking } from "../interfaces/login";
export const postBooking = (datas: IBooking) => {
    return instance.post('booking',datas);
}

export const getBooking = () => {
    return instance.get('booking');
}

export const getBookingById = (id:string) => {
    return instance.get(`booking/${id}`)
}