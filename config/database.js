import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const connectDB = () => {
    mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log("mongodb is connected");
    })
    .catch((error)=>{
        console.log("mongodb is unable to connect:",error);
        process.exit(1);
    })
}

// module.exports = connectDB;