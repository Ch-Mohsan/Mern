const express=require('express');
const router=express.Router();
const authControles=require('../controles/auth_control');
const signupSchema=require('../validators/signup_validator')
const vatidator=require('../middlewares/auth_middleware')
const loginSchema=require('../validators/login_validator')
const isAuthorized=require('../middlewares/isAuthorized')

router.route('/').get(authControles.home)
router.route('/register').post(vatidator(signupSchema),authControles.register);
router.route('/login').post(vatidator(loginSchema),authControles.login);
router.route('/user').get(isAuthorized, authControles.user)
module.exports=router; 