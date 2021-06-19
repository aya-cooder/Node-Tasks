const { response } = require('express')
const express = require('express')
const router = express.Router()
const todos= require('../controles/todo')
router.post ('/',async(req,res) =>{
    const {body} =req
   await todos.create(body)
     res.status(204).end()
})
router.get ('/', async(req,res) =>{
   const alltodos =await todos.getalldata()
   res.json(alltodos)
})
router.get ('/:id',async (req,res) =>{
    const {id} =req.params
   const  todo=await todos.getdatabyid(id)
   if(!todo)
   {
      res.status(404).end()
      return
   }
   res.json(todo)

})
router.patch ('/:id',async(req,res) =>{
       const {body,params: {id}} =req  
      await todos.update(body,id)
      res.status(204).end()
})
router.delete ('/:id',async(req,res) =>{
    const {id}= req.params
   await todos.deletByid(id)
   res.status(204).end()
})
module.exports=
{
   router 
}