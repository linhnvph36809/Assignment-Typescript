import express from 'express'; 
import { getTrips, addTrip } from '../controllers/Trips.js';
const router = express.Router() ; 
router.get("/trips",getTrips) ; 
router.post("/trips",addTrip) ; 
export default router ; 