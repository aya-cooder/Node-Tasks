const User= require('../models/users')
const create = (data)=>
{
    return User.create(data).catch(console.log)
}
const getalldata=()=>
{
    
      return User.FindAll();
    
}
const getdatabyid=(id)=>
{   
    return User.find({where:{id}})
}
const update = (body,id)=>
{
    return User.update(body,{where:{id}})
}
const deletByid =(id)=>
{
    return User.destroy({where:{id}})
}
module.exports={
    create,
    getalldata,
    getdatabyid,
    update,
    deletByid
}