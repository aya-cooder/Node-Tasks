const { response } = require('express')
const express = require('express')
const router = express.Router()
const users= require('../controles/user')
router.post ('/',async(req,res) =>{
    const {body} =req
    await users.create(body)
     res.status(204).end()
})
router.get ('/', async(req,res) =>{
   const allusers =await users.getalldata()
   res.json(allusers)
})
router.get ('/:id',async (req,res) =>{
    const {id} =req.params
   const  user=await users.getdatabyid(id)
   if(!user)
   {
      res.status(404).end()
      return
   }
   res.json(user)

})
router.patch ('/:id',async(req,res) =>{
       const {body,params: {id}} =req  
      await users.update(body,id)
      res.status(204).end()
})
router.delete ('/:id',async(req,res) =>{
    const {id}= req.params
   await users.deletByid(id)
   res.status(204).end()
})
module.exports=
{
   router 
}