import express from 'express'; 
import { addBooking,getBooking,getBookingById } from '../controllers/booking.js';
const routerBooking = express.Router() ; 
routerBooking.get("/booking",getBooking) ; 
routerBooking.get("/booking/:id",getBookingById) ; 
routerBooking.post("/booking",addBooking) ; 
export default routerBooking ;