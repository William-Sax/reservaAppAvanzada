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
    isAdmin:{
        type:Boolean,
        default:false
    },
},
    {timestamps:true}
)

export default mongoose.model("User", UserShema)