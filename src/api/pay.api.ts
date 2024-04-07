import instance from "./instance"
export const pay = (price:string|number,id:string,name:string,email:string,phone:number) => {
    return instance.post(`pay?price=${price}&id=${id}&name=${name}&email=${email}&phone=${phone}`)
}