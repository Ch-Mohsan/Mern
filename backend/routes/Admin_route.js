const isAdmin=require('../middlewares/isAdmin')
const isAuthorized=require('../middlewares/isAuthorized')
const express=require('express');
const router=express.Router();
const Admin_control=require("../controles/Admin_control")
router.route('/users').get(isAuthorized,isAdmin,Admin_control.getAllusers)
router.route('/deleteUser/:id').delete(isAuthorized, isAdmin, Admin_control.deleteUser);
router.route('/getUser/:id').get(isAuthorized, isAdmin, Admin_control.getOneuser);
router.route('/updateUser/:id').put(isAuthorized, isAdmin, Admin_control.updateUser);


module.exports=router;