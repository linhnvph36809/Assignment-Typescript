import {busModel} from "../Models/Model.js" ; 

const addBushouse = async(req,res) => {
    const body = req.body ; 
    const busHouse = await new busModel(body).save();
    res.send(busHouse) ;
}

const getBusHouses= async(req,res) => {
    const busHouses = await busModel.find() ;
    res.send(busHouses) ;
}

export {addBushouse,getBusHouses} ; 