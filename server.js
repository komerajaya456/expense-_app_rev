const express=require("express")
const app=express()
const router=require('./routes/routers')
const cors = require('cors');
const connectdb=require('./config/mongodb')

app.use(express.json())
app.use(cors({ origin: 'http://localhost:3000' }));//we use this to not get error for using nxt line app.use(ppost link)
app.use('/login',router)
connectdb()
  
app.listen(8080,()=>{console.log(`running in port ${8080} in chrome`)})
//hello
<<<<<<< HEAD
//git operation  
//other 
//other2
//other 3

=======
//second 
//third 
//fourth
//fifth
//sixth1  
//7thr
>>>>>>> e361f0c ("")
