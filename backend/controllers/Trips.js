import {tripModel} from "../Models/Model.js";
import moment from "moment";

const getTripsDetail = async (req, res) => {
    try {
        const dateTime = moment().format('YYYY-MM-DDTHH:mm');
        const trips = await tripModel.find({startTime: {$gte: dateTime}}).populate('busHouseId stationId').sort({_id: "desc"}).exec();
        res.send(trips);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


const getTripsOne = async (req, res) => {
    const id = req.params.id
    try {
        const trip = await tripModel.findOne({_id:id}).populate('busHouseId stationId').exec();
        res.send(trip) ; 
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


const addTrip = async(req,res) => {
    const body = req.body ; 
    const posts = await new tripModel(body).save();
    res.send(posts) ;
}

const updateTrip = async(req,res) => {
    const id = req.params.id ; 
    const body = req.body ; 
    try {
    const posts = await tripModel.findOneAndUpdate({_id:id},body,{new:true});
    res.send(posts) ;
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
        
    }


}

const searchTrips = async(req,res) => {
    const {from,to,date,field,sort} = req.query ;
    const dateTime = moment().format('YYYY-MM-DDTHH:mm');
    const checkSort = field && sort ? {[field] : sort} : {_id: "asc"} ; 
    const checkFind = from && to && date ? {fromStation: from,toStation: to} : {} ;
    // const newDate = date ? "" : null
    const trips = await tripModel.find({startTime: {$gte: dateTime,$lte: date+"T23:59"},...checkFind}).populate('busHouseId stationId').sort(checkSort).exec();
    res.send(trips) ;
}

const searchTripsOneHour = async(req,res) => {
    try {
        const dateTime = moment().format('YYYY-MM-DDTHH:mm');
        const futureTime = moment().add(1, 'hours').format('YYYY-MM-DDTHH:mm'); // Cộng thêm 1 giờ
        const trips = await tripModel.find({startTime: {$lte: futureTime,$gte: dateTime}}).populate('busHouseId stationId').exec();
        res.send(trips);
    } catch (error) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const tripsHistory = async (req, res) => {
    try {
        const dateTime = moment().format('YYYY-MM-DDTHH:mm');
        const trips = await tripModel.find({startTime: {$lte: dateTime}}).populate('busHouseId stationId').sort({_id: "desc"}).exec();
        res.send(trips);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const getTripsTime = async (req, res) => {
    const day = req.query.day
    try {
        const futureTime = moment().add(day, 'days').format('YYYY-MM-DDTHH:mm');
        const trips = await tripModel.find({startTime: {$gte: futureTime}}).populate('busHouseId stationId').exec();
        res.send(trips);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const deleteTrip= async(req,res) =>{
    const id = req.params.id ; 
    try {
        const trip = await tripModel.deleteOne({_id:id}) ; 
        res.send(trip) ; 
    } catch (error) {
        res.send({
            status: false,
            message: "Xóa thất bại !"
        }) ; 
        
    }
}

export { 
    getTripsDetail,
    addTrip,
    getTripsOne,
    updateTrip,
    searchTrips,
    searchTripsOneHour,
    tripsHistory,
    getTripsTime,
    deleteTrip
}