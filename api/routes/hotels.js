import express from 'express'
import Hotel from '../models/Hotel.js'
const router = express.Router();

//create
router.post("/", async(req,res)=>{
    const newHotel = new Hotel(req.body);

    try{
        const savedHotel= await newHotel.save();
        res.status(200).json(savedHotel);
    }catch(err){
        res.json(err.message);
        
    }
});
//Update
router.put("/:id", async(req,res)=>{
    try
    {
        const updatedHotel= await Hotel.findByIdAndUpdate(req.params.id, 
            {$set: req.body},
            {new: true}
            );
        res.status(200).json(updatedHotel);
    }catch(err){
        res.status(err.message);    
    }
});

//Delate
router.delete("/:id", async(req,res)=>{
    try
    {
        await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel eliminado");
    }catch(err){
        res.status(err.message);    
    }
});

//Get
router.get("/:id", async(req,res)=>{
    try
    {
        const hotel= await Hotel.findById(
            req.params.id
        );
        res.status(200).json(hotel);
    }catch(err){
        res.status(err.message);    
    }
});

//Get All
router.get("/", async(req,res)=>{
    try
    {
        const hotels= await Hotel.find()
        res.status(200).json(hotels);
    }catch(err){
        res.status(err.message);    
    }
});

export default router