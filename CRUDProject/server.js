import express from 'express'
import path from 'path'


const app = express()

const port = 2000

const product =[
    { product_id:1, product_name:"Sony Bravia"},
    { product_id:2, product_name:"Samsung Galaxy S24 phone"},
    { product_id:3, product_name:"Goodrej Refrigerator"},
]

const dir =path.resolve();
console.log("dir:",dir)
const url= path.join(dir,'./index.html')

app.get('/',(req,res)=>{
    res.json(product)
})
app.get('/html',(req,res)=>{
    res.send('<h1>I am Peehu and I am Software Engineer</h1>')
})
app.get('/peehu',(req,res)=>{
    res.sendFile(url)
})

app.listen(port,console.log(`My crud project is running on ${port}`))