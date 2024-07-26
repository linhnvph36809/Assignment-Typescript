import express from 'express'; 
import { 
    getTripsDetail, 
    addTrip, 
    getTripsOne, 
    updateTrip, 
    searchTrips,
    searchTripsOneHour,
    tripsHistory,
    getTripsTime,
    deleteTrip,
    getTripsLimit
} from '../controllers/Trips.js';
import checkToken from '../middleware/checkToken.js';

const router = express.Router() ; 

router.get("/trips",getTripsDetail) ; 
router.get("/trips/:id",getTripsOne) ; 
router.get("/tripslimit",getTripsLimit) ; 
router.get("/searchTrips",searchTrips) ; 
router.get("/tripshistory",tripsHistory) ; 
router.get("/tripsTime",getTripsTime) ; 
router.get("/searchTripsOneHour",searchTripsOneHour) ; 
router.post("/trips",checkToken,addTrip) ; 
router.put("/trips/:id",checkToken,updateTrip) ; 
router.delete("/trips/:id",checkToken,deleteTrip) ; 
export default router ; 