const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const userSchema=new Schema({
    name:{
        type:String,
        required:true
    },

    dob:{
        type:Date,
        required:true
    },

    blood_group:{
        type:String,
        required:true
    },

    gender:{
        type:String,
        default:false
    },

    email:{
        type:String,
        required:true,
        unique:true
    },
   
    phone:{
        type:String,
        required:true
    },

    address:{
        type:String,
        required:true
    },
    
});

const userModel=mongoose.model('users',userSchema);

module.exports=userModel;