import express from 'express';
import Joi from "joi";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import { modelAuth } from '../Models/Model.js';

const register = async (req, res) => {
    const body = req.body;
    body.role = false 
    body.password = await bcrypt.hash(body.password, 10) ; 
    try {
        const users = await new modelAuth(body).save();
        res.send(users);
    } catch (error) {
        res.send({ status: false, message: "Email đã tồn tại!" });
    }
}; 

const login =  async (req,res) =>{
    const body = req.body ; 
        try {
            const user = await modelAuth.findOne({email: body.email}) ; 
            if(user === null){
                res.send({status:false,message:"Người dùng không tồn tại"}) ; 
            }else{
                const newPassword = user.password
                const isCheck = await bcrypt.compare(body.password,newPassword) ;
                if (isCheck){
                    const token = jwt.sign({uid:user._id},'123456')
                    res.send({status:true,message:"Đăng nhập thành công",user:user,token:token})
                }
                else {
                    res.send({status:false,message:"Mật khẩu không chính xác"})
                }
            }
        } catch (error) {
            res.send({status:false,message:"Xảy ra lỗi"})
        }
} ; 


export {register,login}