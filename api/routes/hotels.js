import express from 'express'
import Hotel from '../models/Hotel.js'
import { createHotel, deleteHotel, getAllHotel, getHotel, updateHotel } from '../controllers/hotel.js';
const router = express.Router();

//create
router.post("/", createHotel);
//Update
router.put("/:id", updateHotel);

//Delate
router.delete("/:id", deleteHotel);

//Get
router.get("/:id", getHotel)

//Get All
router.get("/",getAllHotel);

export default router