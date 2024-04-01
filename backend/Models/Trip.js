import mongoose  from "mongoose"; 
const tripSchema = new mongoose.Schema({
    fromStation: String,
    toStation: String,
    startTime: String,
    seats: String,
    price: String,
    busHouseId: {
        type:mongoose.Schema.Types.ObjectId,
        ref: "busHouses"
    } 

},{
    timestamps: true
}) ; 

const busHousesSchema = new mongoose.Schema({
    _id: {type: mongoose.Schema.Types.ObjectId,ref: "busHouses"},
    name: String,
    address: {
        type: String,
        unique: true
    },
    phone: String
},{
    timestamps: true
}) ; 
const tripModel = new mongoose.model('trips', tripSchema);
const busModel = new mongoose.model('busHouses', busHousesSchema);
export {tripModel,busModel};