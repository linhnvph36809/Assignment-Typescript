import { IBusHouse } from "./busHouse";
import { IStation } from "./station";

export interface  ITrip {
    busHouseId?: IBusHouse | string,
    startTime?: string,
    fromStation?: string,
    toStation?: string,
    station?: string,
    seats?: string,
    price?: string,
    stationId?: IStation | string,
    _id?: string
}

