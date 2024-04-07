import instance from "./instance";

export const getStation = () => {
    const data = instance.get("/station")
    return data
}
