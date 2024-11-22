const mongoose=require('mongoose');
const uri = process.env.DB_URI;

const connectToDb= async()=>{
    try {
        await mongoose.connect(uri);
        console.log('connect to Db successfull');
    } catch (error) {
        console.log(`connect to Db filed ${error}`)
        
    }
}
module.exports=connectToDb;