import express from 'express'; 
import {addStation,getStation } from '../controllers/Station.js';
const routerStation = express.Router() ; 
routerStation.get("/station",getStation) ; 
routerStation.post("/station",addStation) ; 
export default routerStation ; 