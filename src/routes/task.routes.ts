import express from "express";
import {
  getAllTasks,
  deleteTaskById,
  createTask,
  getTaskById,
  updateTaskById
} from "../controller/task.controller";
import { authenticate } from "../middlewares/auth.middleware";

const router = express();

router.route('/')
  .get(authenticate, getAllTasks)
  .post(authenticate, createTask)

router.route('/:id')
  .get(authenticate, getTaskById)
  .put(authenticate, updateTaskById)
  .delete(authenticate, deleteTaskById)

export default router;
