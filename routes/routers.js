const express=require("express")
const register=require('../controllers/controller')
const router=express.Router()

router.post('/',register)

module.exports=router

