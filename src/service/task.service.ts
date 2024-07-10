import {
  createTaskInDB,
  deleteTaskByIdFromDB,
  getTaskByIdFromDB,
  getTasksFromDB,
  updateTaskInDB,
} from "../model/task.model";
import { ITask } from "../interfaces/ITask.interface";

//get tasks
export function getTasks(userId: number) {
  return getTasksFromDB(userId);
}

//get task by id
export function getTaskById(id: number, userId: number) {
  return getTaskByIdFromDB(id, userId);
}

//delete task
export function deleteTaskById(id: number, userId: number) {
  deleteTaskByIdFromDB(id, userId);
}

//create task
export function createTask(task: ITask, userId: number) {
  const taskWithUserId = { ...task, userId }; //add userId to the task
  createTaskInDB(taskWithUserId);
}

//update task
export function updateTaskById(id: number, task: ITask, userId: number) {
  updateTaskInDB(id, task, userId);
}
