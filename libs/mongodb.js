import mongoose from "mongoose";
import dotenv from 'dotenv';
export const connectDB = async () =>{
    dotenv.config();
    try{
        const {connection} = await mongoose.connect(`${process.env.MONGO_URL}`);
    }catch(error)
    {
        console.log(error);
    }

}

export default connectDB;