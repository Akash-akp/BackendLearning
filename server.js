import express from 'express';
import dotenv from 'dotenv';
import {connectDB} from './config/database.js';
import createTodoRoutes from './routes/createtodo.route.js'

dotenv.config();
const app = express();

connectDB();


app.use(express.json());

const port = process.env.PORT || 4000;

app.listen(port,()=>{
    console.log("Server is running on",port);
})


app.use("/api/v1",createTodoRoutes);

app.get('/',(req,res)=>{
    res.send("Hello")
})