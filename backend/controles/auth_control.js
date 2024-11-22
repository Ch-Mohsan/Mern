const User=require('../models/User_model');
const bcrypt=require('bcryptjs')

const home=(req,res)=>{
    try {
        res.status(200).send(' controles Home')
        
    } catch (error) {
        
    }
   }


   const register = async (req, res) => {
    console.log("Request body:", req.body);
  
    try {
      const { username, email, password, isAdmin } = req.body;
  
      // Log the isAdmin value explicitly
      console.log(req.body.isAdmin);
  
      // Check if the email already exists
      const emailExist = await User.findOne({ email });
      if (emailExist) {
        return res.status(400).json({ message: 'Email already exists' });
      }
  
      // Create the user with all fields, ensuring isAdmin is properly set
      const user = new User({
        username,
        email,
        password,
        isAdmin: isAdmin || false, // Ensure isAdmin is set
      });
  
      await user.save();
  
      // Generate a token for the user
      const token = await user.gerenteToken();
  
      res.status(200).json({ message: 'User Registered successfully', token });
    } catch (error) {
      console.error("Error during registration:", error);
      res.status(400).json({ message: 'Internal Server Error', error });
    }
  };
  
  
   const login= async(req,res)=>{
    try {
        const {email,password}=req.body;
        const user=await User.findOne({email});
        if(!user){
            res.status(400).json({message:'user not exist',error:error});
        }
        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch){
            res.status(400).json({message:'password does not match',error:error});
        } 
        const token=await user.gerenteToken();
        res.status(200).json({message:'login successfully',token})
        
    } catch (error) {
        res.status(500).json({message:'Internal Server Error',error:error});
        
    }
   }
   const user= async(req,res)=>{

    try {
        const userData= req.user
        //res.status(200).json({message:"hi user"})
        res.status(200).json({userData})
        
    } catch (error) {
        res.status(500).json({message:'Internal Server Error',error:error});
    }

   }
   module.exports={home,register,login,user}