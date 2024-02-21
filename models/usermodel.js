const mongoose=require('mongoose')
const collectionname='users'
const userschema=new mongoose.Schema(
  {
    name:{
      type:String,
      // required:[true,"name is required"]
    },
    email:{
      type:String,
// required:[true,"email is required"]
    },
    password:{
      type:String,
      // required:[true,"password is required"]
    },
    repassword:{
      type:String,
      // required:[true,"re-enter password required"]
    }
    
  }
  
  )
  
  const usermodel=mongoose.model(collectionname,userschema)
  
  module.exports=usermodel;