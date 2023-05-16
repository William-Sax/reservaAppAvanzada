import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
const app = express();
dotenv.config();

const connect = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO);
        console.log('Connected a mongodb')
    }catch(error){
        throw error;
    }
};

mongoose.connection.on('disconnected',()=>{
    console.log('mongoDB desconectado');
})

mongoose.connection.on('connected',()=>{
    console.log('mongoDB Conectado');
})



app.listen(8000,()=>{
    connect()
    console.log("Conencado al banck")
})
