import express from 'express'
import { createTodo } from '../controllers/createtodo.controller.js';
import { removeTodo } from '../controllers/removetodo.controller.js';

const router = express.Router();

router.post("/createTodo",createTodo);
router.delete("/removeTodo/:id",removeTodo);

export default router;