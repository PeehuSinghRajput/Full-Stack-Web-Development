import express from 'express'
import path from 'path'

const app=express()
// console.log(path.resolve())
// app.use(express.static(path.join(path.resolve(),'public')))

app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.render('index.ejs')
})


app.post('/form-submit',(req,res)=>{

    console.log("using form handling route")
    console.log("request body:",req.body)
    res.json({
        message:"Your Form has been submitted successfully",
        success:true
    })
})

const port=2000
app.listen(port,()=>console.log(`server is running on ${port}`))