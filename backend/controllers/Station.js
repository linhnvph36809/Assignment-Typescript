import {stationModel} from "../Models/Model.js" ; 

const addStation = async(req,res) => {
    const body = req.body ; 
    const station = await new stationModel(body).save();
    res.send(station) ;
}

const getStation = async(req,res) => {
    const station = await stationModel.find() ;
    res.send(station) ;
}

export {addStation,getStation} ; 