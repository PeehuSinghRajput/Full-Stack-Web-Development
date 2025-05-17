import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path'

dotenv.config({path: '../.env'})


import { UserRegister } from './controllers/UserRegister.js';


const app = express()


app.use(express.urlencoded({extended:true}))

const mongoURI = process.env.MVC_Project_Mongodb_host;

mongoose.connect(
    mongoURI,
    {
        dbName: "MVC_Project",
    }
).then(()=>console.log("Mongo db database connected...!")).catch((err)=>console.log(err))


app.get('/',(req,res)=>{
    console.log("My form page get rendered");
    res.render('index.ejs');
})


app.post('/user', UserRegister );


const port = 30000
app.listen(port,()=>{console.log(`MVC project is running on ${port}`)})