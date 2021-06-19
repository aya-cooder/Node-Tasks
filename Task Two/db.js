const {Sequelize}= require('sequelize')
 const sequlize = new  Sequelize('my_db','root','root',
 {
     dialect:'mssql'
 }) 

 
module.exports=sequlize
