import Todo from "../models/todo.model.js";

export const removeTodo = async(req,res,next) =>{
    try{
        const {id} = req.params;
        console.log(id);
        const deletedTodo = await Todo.findById(id);
        await Todo.deleteOne(deletedTodo)
        .then(()=>{
            if(deletedTodo){
                console.log(`${id} product is deleted`);
                res.status(200).json({
                    success: true,
                    message: `${id} product is deleted`
                })
            }else{
                console.log(`${id} product is not available`)
                res.status(404).json({
                    success: false,
                    message: `${id} product is not available`
                })
            }
        })
        .catch(()=>{
            res.status(500).json({
                success: false,
                data: error,
                message: "Task cannot be created"
            })
        })
    }catch(error){
        res.status(500).json({
            success: false,
            data: error,
            message: "Task cannot be created"
        })
    }
}