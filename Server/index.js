import express from 'express'
import 'dotenv/config'
import mongoose from 'mongoose';
import router from './route/route.signup.js'; 
import cors from 'cors'
const app=express();
const Port=process.env.PORT;
// Mongodb Connection
const DB=process.env.URL;
try{mongoose.connect(DB)
    console.log("Database connected")}
    catch(error){
console.log(error)
}
// middleWare use
app.use(express.json())
app.use(cors())
app.use('/signup',router)
app.use('/login',router)
app.use("/auth",router)
// Port Connection

app.listen(Port,()=>{console.log(`Server Connected at Port${Port}`)})