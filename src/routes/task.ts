import express from "express";
import {
  getAllTasks,
  deleteTaskById,
  createTask,
  getTaskById,
  updateTaskById
} from "../controller/task";


const router = express();

router.route('/')
  .get(getAllTasks)
  .post(createTask)

router.route('/:id')
  .get(getTaskById)
  .put(updateTaskById)
  .delete(deleteTaskById)

export default router;
