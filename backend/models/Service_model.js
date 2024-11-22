const mongoose=require('mongoose');
const serviceSchema=new mongoose.Schema({
    serivce:{
        type : String,
        required:true
    },
    descripsion:{
        type : String,
        required:true
    },
    price:{
        type : String,
        required:true
    },
    provider:{
        type : String,
        required:true
    },
    image:{
        type:String,
        
    }
})
const serivce=mongoose.model('Service',serviceSchema)
module.exports=serivce