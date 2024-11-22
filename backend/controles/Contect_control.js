const Contect=require('../models/Contect_model')

const Contect_Info= async(req,res)=>{
    try {
        const {username,email,message}=req.body; 
        const contect=new Contect({username,email,message})
        await contect.save();
        res.status(200).json({message:'Contect saved successfully'})
    } catch (error) {
        res.status(500).json({message:'Contect not send', error:error.error})
        
    }
}
const getAllContacts = async (req, res) => {
    try {
      const allContacts = await Contect.find();
  
      // Check if contacts exist
      if (!allContacts || allContacts.length === 0) {
        return res.status(404).json({ message: 'Contacts not found' });
      }
  
      // Send successful response
      return res.status(200).json({ allContacts });
    } catch (error) {
      // Handle server error
      return res.status(500).json({ message: 'Server error', error: error.message });
    }
  };
  
  
module.exports = {
    Contect_Info,
    getAllContacts
};