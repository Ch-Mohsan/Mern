const jwt = require('jsonwebtoken');
const User = require('../models/User_model');
const jwtKey = process.env.jwt_key;

const isAuthorized = async (req, res, next) => {
  try {
    
    const token = req.header('Authorization')?.replace('Bearer ', '');
  

    if (!token) {
      return res.status(401).json({ message: 'Access Denied: No token provided' });
    }

    
    const decoded = jwt.verify(token, jwtKey);
    
    
    const user = await User.findById(decoded.userId);
    if (!user) {
      console.log("User ID from token:", decoded.userId); 
      return res.status(401).json({ message: 'Access Denied: User not found' });
    }

    
    req.user = user;
    next(); 
  } catch (error) {
    res.status(401).json({ message: 'Invalid or expired token', error });
  }
};

module.exports = isAuthorized;
