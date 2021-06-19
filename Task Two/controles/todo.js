const Todo= require('../models/todos')
const create = (data)=>
{
    return Todo.create(data).catch(console.log)
}
const getalldata=()=>
{
    
      return Todo.FindAll();
    
}
const getdatabyid=(id)=>
{   
    return Todo.find({where:{id},include:'users'})
}
const update = (body,id)=>
{
    return Todo.update(body,{where:{id}})
}
const deletByid =(id)=>
{
    return Todo.destroy({where:{id}})
}
module.exports={
    create,
    getalldata,
    getdatabyid,
    update,
    deletByid
}