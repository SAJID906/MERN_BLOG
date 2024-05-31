import mongoose from "mongoose";
const UserSchema=new mongoose.Schema(
    {
        Name:{
            type:String,
            require:true
        },
        Email:{
            type:String,
            require:true,
            unique:true,
        },
        Password:{
            type:String,
            require:true,
            unique:true,
        },
        role:{
            type:String,
            enum:['admin','user'],
            default:'user'
        },
    },
    {timestamps:true}
)
export const User=mongoose.model("User",UserSchema)