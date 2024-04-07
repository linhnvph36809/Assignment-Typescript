import { bookingModel } from "../Models/Model.js";
import moment from "moment";

const addBooking = async(req,res) => {
    const body = req.body ; 
    const booking = await new bookingModel(body).save();
    res.send(booking) ;
}

const getBooking = async (req, res) => {
    try {
        const trips = await bookingModel.find().populate('tripId').exec();
        res.send(trips);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const getBookingById = async (req, res) => {
    const id = req.params.id ;
    const dateTime = moment().format('YYYY-MM-DDTHH:mm');
    try {
        const booking = await bookingModel.find({tripId: id} ).populate({path: 'tripId',match: {startTime:{$gt : dateTime}}}).exec();
        res.send(booking);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
export {addBooking,getBooking,getBookingById}

