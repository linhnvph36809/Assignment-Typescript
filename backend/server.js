import express from 'express'; 
import mongoose  from "mongoose"; 
import dotenv from "dotenv" ; 
import cors from "cors"; 
import router from "./routers/routerTrips.js" ; 
import routerBushouse from './routers/routerBushouse.js';
import routerStation from './routers/routerStation.js';
import routerPay from './controllers/Pay.js';
import userRouter from './routers/routerAuth.js';
import routerBooking from './routers/routerBooking.js';

const app = express();
const port = 4000 ; 

app.use(express.json());
app.use(cors());
app.use("/",router) ;
app.use("/",routerBushouse) ;
app.use("/",routerStation) ;
app.use("/auth",userRouter)
app.use("/",routerPay);
app.use("/",routerBooking);


const connectDB = () => {
    const url = dotenv.config().parsed.DB_URL
    mongoose.connect(url)
    .then(() => console.log('Connected!'))
    .catch(() => console.log('Can not connected'));
}


app.listen(port,() => {
    connectDB() ; 
    console.log('listening on port ' + port);
});
