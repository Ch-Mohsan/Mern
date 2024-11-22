const user=require('../models/User_model')
const getAllusers= async(req,res)=>{
try {
    const usres= await user.find({},{password:0});
    if(!usres){
    res.status(404).json({ message:'Users not found'})
    }
    res.status(200).json(usres);
    
} catch (error) {
    
}

}
const getOneuser = async (req, res) => {
  try {
    const id = req.params.id;
    const getuser = await user.findById(id);
    if (!getuser) {
      return res.status(404).json({ message: 'User not found' }); // Use 404 for not found
    }
    res.status(200).json(getuser);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ message: 'Server error' }); // Use 500 for server errors
  }
};

const deleteUser = async (req, res) => {
    try {
      const id = req.params.id; // Correctly get the dynamic parameter from the URL
      const currentUser = await user.findById(id);
  
      if (!currentUser) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      await user.findByIdAndDelete(id);
      res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Server error in delete user', error });
    }
  };
  const updateUser= async(req,res)=>{
    try {
      const id= req.params.id;
      const data= req.body;
      const updateData= await user.updateOne({_id:id},{
        $set:data
      })
      return res.status(200).json(updateData);
    } catch (error) {
      res.status(500).json({ message: 'Server error in delete user', error });
    }

  }
  
module.exports={getAllusers,deleteUser, getOneuser,updateUser}