import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config({
    path: '../.env'
})

const app = express();

const mongoURI = process.env.Express_Mongodb_Form_Handling_Mongodb_host

mongoose.connect(
    mongoURI,{
        dbName:"Express_Form_Handling"
    }
).then(()=>console.log("Mongodb Connected...!")).catch((err)=>console.log(err))

const port = 3000;
app.listen(port,()=>{console.log("My mongodb express form handling project is running")})