const express=require('express')
const dataService=require('./services/dataService')

const cors=require('cors')

const app=express()

app.use(express.json())

app.listen(3000,()=>{
    console.log('Listening on port 3000');
})

app.use(cors({
    origin:'http://localhost:4200'
}))


app.post('/register',(req,res)=>{
    console.log(req.body);
    dataService.register(req.body.profilepic,req.body.name,req.body.subtitle,req.body.email,req.body.mobile,req.body.highest,req.body.year,req.body.skills,req.body.location,req.body.uname,req.body.pswd,req.body.cv)
    .then(result=>{
        res.status(result.statusCode).json(result)
    }) 
    
})

app.post('/login',(req,res)=>{
    console.log(req.body);
    dataService.login(req.body.uname,req.body.pswd)
    .then(result=>{
        res.status(result.statusCode).json(result);
    })
    
})

app.get('/all-products',(req,res)=>{
    dataService.getProducts()
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})

app.delete('/deleteuser/:uname',(req,res)=>{
    dataService.deleteuser(req.params.uname)
    .then(result=>{
        res.status(result.statusCode).json(result);
    })

    
})

app.get('/getdetails/:uname',(req,res)=>{
    dataService.getdetails(req.body.uname)
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})