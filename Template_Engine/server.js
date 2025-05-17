import express from 'express'
import path from 'path'

const app = express();

app.use(express.static(path.join(path.resolve(),'public')))

app.get('/',(req,res)=>{
    let name = "Peehu"
    res.render('index.ejs',{name})
})

const port =1000;

app.listen(port,()=> console.log(`my node project is running on ${port}.`))

