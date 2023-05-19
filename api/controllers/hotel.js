import Hotel from '../models/Hotel.js'

export const createHotel =async(req,res,next)=>{
    const newHotel = new Hotel(req.body);

    try{
        const savedHotel= await newHotel.save();
        res.status(200).json(savedHotel);
        console.log("Se ha creado un nuevo hotel")
        next()
    }catch(err){
        res.json(err.message);
        
    }
}
//update
export const updateHotel =async(req,res,next)=>{
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
        res.status(err.message);    
    }
};
//delete
export const deleteHotel =async(req,res,next)=>{
    try
    {
        console.log("Registro eliminado" )
        next()
        await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel eliminado");
    }catch(err){
        res.status(err.message);    
    }
}
//get All
export const getAllHotel =async(req,res,next)=>{
    try
    {
        const hotels= await Hotel.find()
        res.status(200).json(hotels);
        console.log("Registros encontrados")
    }catch(err){
        res.status(err.message);
        console.log(err.message);
    }
}
//get
export const getHotel =async(req,res,next)=>{
    try
    {
        const hotel= await Hotel.findById(
            req.params.id
        );
        res.status(200).json(hotel);
        console.log("Registro Encontrado")
        return next()
    }catch(err){
        res.status(err.message);
        console.log("Registro no existe")
        return next()    
    }
    
}