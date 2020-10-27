import express from 'express';
import Answers from '../models/AnswerSchema';

const router=express.Router();

router.post('/',async(req,res)=>{
    try {
        const answers=new Answers({
            userId:req.body.userId,
            q1:req.body.q1,
            q2:req.body.q2,
            q3:req.body.q3,
            q4:req.body.q4,
            q5:req.body.q5,

        })
        const newAnswers=await answers.save();
        console.log('inserted answers')
        res.send(newAnswers)


    } catch (error) {
        res.status(401).send({message:'Invalid Answers Data'})
    }
})
export default router;

