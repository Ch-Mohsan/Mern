const Service=require('../models/Service_model')
const services= async(req,res)=>{
    try {
        const responce= await Service.find();
        if(!responce){
            return res.status(500).json({message:'Services not found'})
        }
        res.status(200).json({message:'Services fetched successfully',responce})

        
    } catch (error) {
        res.status(500).json({message:'Services error',error})
        
    }
}
module.exports=services