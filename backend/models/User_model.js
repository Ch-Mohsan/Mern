const mongoose=require('mongoose')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken');
const jwt_secret=process.env.jwt_key;
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin: {
        type: String,
        required: true, // Force inclusion
      },
      
})
userSchema.pre('save',async function(next){
    const userInfo=this
    if (!userInfo.isModified('password')) {
        return next();
    }
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(userInfo.password, salt);
        next();
    } catch (error) {
        next(error);
    }
});
userSchema.methods.gerenteToken=function async(){
 
 const token=jwt.sign({
    userId:this._id,
   email:this.email,
isAdmin:this.isAdmin},
jwt_secret,
{ expiresIn: '1h' }

)
return token;
console.log(token);
}

const User=mongoose.model('user',userSchema);
module.exports=User;