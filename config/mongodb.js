const mongoose=require("mongoose")
const usermodel=require("../models/usermodel")

const uri = "mongodb+srv://komerajaya7259:eihlGz2XfQOM3FoJ@secondcluster.vzmnsfg.mongodb.net/expenseapprev?retryWrites=true&w=majority"
const connectdb=async()=>{
  try{
    await mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true })
    console.log(`connect to {2}cluste;r  db`) 
    // const iny= await usermodel.insertMany([{name:"valye",email:"komera987@gmail.com"}]);
    // console.log(iny);
    
  }  
  catch(error){
    console.log(error)
  }
}



module.exports=connectdb;
