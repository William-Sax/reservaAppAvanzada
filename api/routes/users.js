import express from 'express'
import { deleteUser, getAllUser, getUser, updateUser } from '../controllers/user.js';
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();


//Update
router.put("/:id", updateUser);

//getToken
router.get("/chechTokent", verifyToken,(req,res,next)=>{
    res.send("Hola")
})

router.get("/checkuser/:id", verifyUser,(req,res,next)=>{
    res.send("Bienvenido, Usted a iniciado session y puede eliminar su cuenta")
})

router.get("/checkadmin/:id", verifyAdmin,(req,res,next)=>{
    res.send("Bienvenido administrador, Usted a iniciado session y puede eliminar todas las cuentas")
})

//Delate
router.delete("/:id", deleteUser);

//Get
router.get("/:id", getUser)

//Get All
router.get("/",getAllUser);

export default router