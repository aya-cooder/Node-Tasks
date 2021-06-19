const {DataTypes} = require('sequelize')
const sequlize = require('../db')
const Users=sequlize.define('user',{
    username:
    {
        type:DataTypes.STRING
    }
})  
Users.sync({})
module.exports={
    Users
}