import instance from "./instance";

export const getBushouses = () => {
    const data = instance.get("/bushouses") ; 
    return data
}
