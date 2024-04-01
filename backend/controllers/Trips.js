import {tripModel} from "../Models/Trip.js";

const getTrips = async (req, res) => {
    try {
        const result = await tripModel.aggregate([
            {
                $lookup: {
                    from: "busHouses",
                    localField: "busHouseId",
                    foreignField: '_id',
                    as: "trip_details"
                }
            }
        ]);
        res.send(result)
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
}

const addTrip = async(req,res) => {
    const body = req.body ; 
    const posts = await new tripModel(body).save();
    res.send(posts) ;
}



export { getTrips,addTrip }