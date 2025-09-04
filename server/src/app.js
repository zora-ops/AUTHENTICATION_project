import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import cookieParser from 'cookie-parser'
import connectDB from '../config/mongodb.js'
import authRouter from '../routes/authRoutes.js'

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json())
app.use(cookieParser())
app.use(cors({credential: true})) 


//######################---------API ENDPOINTS------------######################
app.get('/',(req,res)=>{res.json({avi: "hiv"})});

//######################-------MIDDLEWARE--------------#########################
app.use('/api/auth', authRouter)


connectDB().then(()=>{
    app.listen(port, ()=>console.log("the server is runnig at Port: ", port))
    console.log('database has connected successfully')
})
