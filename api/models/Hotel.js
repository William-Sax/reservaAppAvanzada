import mongoose from 'mongoose';
const {Shema} = mongoose;

const HotelShema = new mongoose.Schema({
    //Nombre
    name:{
        type:'String',
        required:true
    },
    //Tipo
    type:{
        type:'String',
        required:true
    },
    //Ciudad
    city:{
        type:'String',
        required:true
    },
    //Direccion
    address:{
        type:'String',
        required:true
    },
    //Distancia
    distance:{
        type:'String',
        required:true
    },
    //Fotos
    photos:{
        type:'String',
    },
    //Titulo
    title:{
        type:'String',
        required:true
    },
    //Descripcion
    desc:{
        type:'String',
        required:true
    },
    //Clasificacion
    rating:{
        type:Number,
        min:0,
        max:5
    },
    //Habitaciones
    rooms:{
        type:[String],
    },
    //El precio mas barato
    chapestPrice:{
        type:Number,
        required:true
    },

    featured:{
        type:Boolean,
        default:false
    },

})

export default mongoose.model("Hotel", HotelShema)