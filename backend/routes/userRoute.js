import express from 'express';
import User from '../models/UserModel';

const router=express.Router();

router.post('/register',async(req,res)=>{
    try {
        const user=new User({
            name:req.body.name,
            email:req.body.email,
            phoneNumber:req.body.phoneNumber
        })
        const newUser=await user.save()
        res.send(newUser)
    
        
    } catch (error) {
        res.status(401).send({message:'Invalid user Data'})
    }
   
})


router.get('/test', async(req,res)=>{
    try{
        const user=new User({
            name:'ramu',
            phoneNumber:'9591858987'
        })
        const newUser=await user.save();
        res.send(newUser)
        console.log('successs')
    } 
    catch (error) {
        res.send({msg:error.message})
    }
    
   
})
export default router;