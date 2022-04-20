const router = require('express').Router();
const userSchema = require('../models/sig.model');
//const userSchema = require('../models/userJoi');
const auth = require('../controller/Auth');


router.post('/sigin',auth.register);

router.post('/login',auth.login);

router.post('/logout/:uuid',auth.logout);

router.post('/forgetPass',auth.forgetPassword);

router.post('/resetPass',auth.resetPassword);





// router.get('/getData',async(req,res)=>{
//     try{
//     const data = await userSchema.find();
//     if(data){
//         return res.json({status:'success','result':data});
//     }else{
//         return res.json({status:'failure',message:'not added user data'});
//     }
//        }catch(err){
//            return res.json({'error':err.message});
//        }
// })    

module.exports=router