import mongoose from 'mongoose';


const connectDB= async ()=> {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/mern-auth`)
    } catch (error) {
        console.log('error connecting to the database')
    }
}

export default connectDB