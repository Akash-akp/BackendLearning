import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
    title:{
        type: String,
        required: true,
        maxLength: 50
    },
    description:{
        type: String,
        required: true,
        maxLength: 100
    }
},{timestamps: true});

// module.exports = mongoose.model('Todo',todoSchema);

const Todo = mongoose.model('Todo',todoSchema);
export default Todo;
