const express=require("express")
const app=express()
const router=require('./routes/routers')

app.use('/login',router)
 

app.listen(3000,()=>{console.log(`running in port ${3000}`)})