import instance from "./instance";
import { ILogin } from "../interface/login";

export const signUp = (data:ILogin) => {
    return instance.post("/auth/register",data) ; 
}

export const signIn = (data:{email: string, password:string}) => {
    return instance.post("/auth/login",data) ; 
}
