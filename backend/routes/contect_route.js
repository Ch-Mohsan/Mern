const vatidator=require('../middlewares/auth_middleware')
const ContectSchema=require('../validators/contect_validator')
const { Contect_Info, getAllContacts } = require('../controles/Contect_control');
const isAuthorized=require('../middlewares/isAuthorized')
const isAdmin=require('../middlewares/isAdmin')
const express=require('express');
const router=express.Router();

router.route('/contect').post(vatidator(ContectSchema), Contect_Info)
router.route('/getAllcontact').get(isAuthorized,isAdmin,getAllContacts)

module.exports=router;