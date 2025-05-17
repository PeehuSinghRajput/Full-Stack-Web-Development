// console.log("I am lerning express now ")

import express from "express";

const app=express();

app.get('/',(req,res)=>{
    res.send("You are requested")
})

app.get('/srk',(req,res)=>{
    res.send("we are a great fan of srk.")
})
const port=3000;

app.listen(port,()=>{console.log(`Express created successfully on ${port}.`)})

