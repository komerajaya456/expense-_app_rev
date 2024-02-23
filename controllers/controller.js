const usermodel=require("../models/usermodel")
 

const register=async(req,res)=>{console.log("doned");
console.log(req.body);
console.log(typeof(req.body));
const uv=await usermodel.insertMany(req.body)
  console.log(uv)
}
 

module.exports=register   