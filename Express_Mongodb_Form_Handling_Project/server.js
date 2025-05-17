import express from 'express'
import mongoose from 'mongoose'

const app = express();

mongoose.connect(
    "mongodb+srv://peehusingh2003:p93XZsykVLVU7LU0@cluster0.slo61qc.mongodb.net/",{
        dbName:"Express_Form_Handling"
    }
).then(()=>console.log("Mongodb Connected...!")).catch((err)=>console.log(err))

const port = 3000;
app.listen(port,()=>{console.log("My mongodb express form handling project is running")})