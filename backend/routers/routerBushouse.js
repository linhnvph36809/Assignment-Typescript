import express from 'express'; 
import {addBushouse,getBusHouses } from '../controllers/busHouses.js';
const routerBushouse = express.Router() ; 
routerBushouse.get("/bushouses",getBusHouses) ; 
routerBushouse.post("/bushouses",addBushouse) ; 
export default routerBushouse ; 