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
        ProfilePicture:{
            type:String,
            default:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        }
    },
    {timestamps:true}
)
export const User=mongoose.model("User",UserSchema)