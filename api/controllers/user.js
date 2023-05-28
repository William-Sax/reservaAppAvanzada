import User from "../models/User.js";

 
//update
export const updateUser =async(req,res,next)=>{
    try
    {
        console.log("Se a actualizado un registro")
        next()
        const updatedHotel= await Hotel.findByIdAndUpdate(req.params.id, 
            {$set: req.body},
            {new: true}
            );
        res.status(200).json(updatedHotel);
    }catch(err){
        next(err)  
    }
};
//delete
export const deleteUser =async(req,res,next)=>{
    try
    {
        console.log("Registro eliminado" )
        next()
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("Usuario eliminado");
    }catch(err){
        next(err)   
    }
}
//get All
export const getAllUser =async(req,res,next)=>{
    try
    {
        const users= await Hotel.find()
        res.status(200).json(users);
        console.log("Usuarios encontrados")
    }catch(err){
        next(err)
        console.log(err.message);
    }
}
//get
export const getUser =async(req,res,next)=>{
    try
    {
        const user= await User.findById(
            req.params.id
        );
        res.status(200).json(user);
        console.log("usuario Encontrado")
        return next()
    }catch(err){
        next(err)  
        console.log("Registro no existe")
         
    }
    
}