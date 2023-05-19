import mongoose from 'mongoose';
const {Shema} = mongoose;

const UserShema = new mongoose.Schema({
    //Nombre
    username:{
        type:'String',
        required:true,
        unique:true
    },
    email:{
        type:'String',
        required:true,
        unique:true
    },
    //Tipo
    password:{
        type:'String',
        required:true
    },
    //Ciudad
    city:{
        type:'String',
        
    },
    //Direccion
    address:{
        type:'String',
        
    },
    //Distancia
    distance:{
        type:'String',
    },
    //Fotos
    photos:{
        type:'String',
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
    },

    isAdmin:{
        type:Boolean,
        default:false
    },
},
    {timestamps:true}
)

export default mongoose.model("User", UserShema)