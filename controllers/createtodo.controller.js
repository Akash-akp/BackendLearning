import Todo from "../models/todo.model.js";

// export.createTodo = async()=>{}

export const createTodo = async(req,res,next) => {
    try{
        const { title , description } = req.body;
        const newTask = await Todo.create({title,description});
        res.status(200).json({
            success: true,
            data: newTask,
            message: "New task is created"
        })
    }catch(error){
        res.status(500).json({
            success: false,
            data: error,
            message: "Task cannot be created"
        })
    }
}