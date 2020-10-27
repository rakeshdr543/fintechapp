import mongoose from 'mongoose';

const answerSchema=new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    q1:{
        type:String,
        required:true,
        max:1
    },
    q2:{
        type:String,
        required:true,
        max:1
    },
    q3:{
        type:String,
        required:true,
        max:1
    },
    q4:{
        type:String,
        required:true,
        max:1
    },
    q5:{
        type:String,
        required:true,
        max:1
    }

},
{timestamps:true}
)
const ansModel=mongoose.model('Answers',answerSchema)

export default ansModel;