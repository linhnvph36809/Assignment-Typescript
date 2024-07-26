import mongoose from 'mongoose';
const tripSchema = new mongoose.Schema(
    {
        fromStation: String,
        toStation: String,
        startTime: String,
        seats: String,
        price: Number,
        busHouseId: { type: mongoose.Schema.Types.ObjectId, ref: 'busHouses' },
        stationId: { type: mongoose.Schema.Types.ObjectId, ref: 'station' },
    },
    {
        timestamps: true,
    },
);

const busHousesSchema = new mongoose.Schema(
    {
        name: String,
        address: String,
        phone: String,
    },
    {
        timestamps: true,
    },
);

const stationSchema = new mongoose.Schema(
    {
        name: String,
        province: String,
    },
    {
        timestamps: true,
    },
);

const userSchema = new mongoose.Schema(
    {
        name: String,
        email: {
            type: String,
            unique: true,
        },
        password: String,
        role: Boolean,
    },
    {
        timestamps: true,
    },
);

const bookingSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        phone: Number,
        tripId: { type: mongoose.Schema.Types.ObjectId, ref: 'trips' },
    },
    {
        timestamps: true,
    },
);

const tripModel = new mongoose.model('trips', tripSchema);
const busModel = new mongoose.model('busHouses', busHousesSchema);
const stationModel = new mongoose.model('station', stationSchema);
const modelAuth = new mongoose.model('users', userSchema);
const bookingModel = new mongoose.model('booking', bookingSchema);

export { tripModel, busModel, stationModel, modelAuth, bookingModel };
