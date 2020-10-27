import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import config from './config';

import bodyParser from 'body-parser';
import userRoute from './routes/userRoute';
import answerRoute from './routes/AnswerRoute';


const app=express();
app.use(cors())
app.use(bodyParser.json())
dotenv.config();

const mongodbUrl=config.MONGODB_URL;
mongoose.connect(mongodbUrl,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true
},
    ()=>{console.log('Database connected successfully')
})

app.use('/api/users',userRoute,()=>{console.log('User Data inserted successfully')});
app.use('/api/answers',answerRoute,()=>{console.log('Answers Data inserted successfully')});


app.listen(8000,()=>{console.log('server is listening at 8000')})