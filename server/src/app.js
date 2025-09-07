import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import cookieParser from 'cookie-parser'
import connectDB from '../config/mongodb.js'
import authRouter from '../routes/authRoutes.js'
import userRouter from '../routes/userRoutes.js'

const app = express();
const port = process.env.PORT || 5000;

//######################-------MIDDLEWARE--------------#########################
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
})) 


//######################---------API ENDPOINTS------------######################
app.use('/api/auth', authRouter)
app.use('/api/user', userRouter);




connectDB().then(()=>{
    app.listen(port, ()=>console.log("the server is runnig at Port: ", port))

})
