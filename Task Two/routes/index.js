const express = require('express')
const router = express.Router()
const todosroute = require('./todo')
const userroute = require('./user')
//router.use('/todo',todosroute)
//router.use('/user',userroute)
module.exports=
{
    router
}