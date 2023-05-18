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
//apdate

export default router