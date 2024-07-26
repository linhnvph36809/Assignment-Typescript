import instance from "./instance";

export const getTrips = () => {
    const data = instance.get("/trips")
    return data
}

export const getTripsLimit = () => {
    const data = instance.get("/tripslimit")
    return data
}



export const postTrips = (data: any) => {  
    return instance.post("/trips",data)
}


export const getTripById = (id: string|number) => {
    return instance.get(`/trips/${id}`) 
}


export const putTrip = (id:any,data: any) => {
    return instance.put(`/trips/${id}`,data) 
}

export const searchTrips = (query:string) => {
    const data = instance.get("/searchTrips?"+query) ;
    return data
}

export const searchTripsOneHour = () => {
    const data = instance.get("/searchTripsOneHour") ;
    return data 
}

export const getTripsHistory = () => {
    const data = instance.get("/tripshistory") ;
    return data 
}

export const getTripsTime = (day:string|null) => {
    const data = instance.get(`/tripsTime?day=${day}`) ;
    return data 
}


export const deleteTrip = (id:string) => {
    return instance.delete(`trips/${id}`);
}