const isAdmin = (req, res, next) => {
    try {
        const role=req.user.isAdmin
        if(!role){
            res.status(404).json({message:"not a admin"})
        }
    else{
        next();
    }
    
    } catch (error) {
      res.status(401).json({ message: 'Server error in admin',error });
    }
  };
  
  module.exports = isAdmin;
  