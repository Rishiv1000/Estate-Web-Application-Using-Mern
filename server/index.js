import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { userRoute } from './routes/userRoute.js';
import { residencyRoute } from './routes/residencyRoute.js';

const app  = express()
const PORT = process.env.PORT || 3000;

dotenv.config();
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use('/api/user' , userRoute)
app.use('/api/residency' , residencyRoute)



app.listen(PORT , ()=>{
    console.log(`SERVER IS RUNNING AT ${PORT}`);
})