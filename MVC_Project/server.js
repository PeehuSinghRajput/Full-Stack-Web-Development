import express from 'express';
import mongoose from 'mongoose';

import { UserRegister } from './controllers/UserRegister.js';


const app = express()


app.use(express.urlencoded({extended:true}))
mongoose.connect(
    "mongodb+srv://peehusingh2003:itatfSK9wgaaXNw7@cluster0.1ydy4so.mongodb.net/",
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