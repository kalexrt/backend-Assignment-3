import {
  createTaskInDB,
  deleteTaskByIdFromDB,
  getTaskByIdFromDB,
  getTasksFromDB,
  updateTaskInDB,
} from "../model/task";
import { ITask } from "../interfaces/ITask";

//get tasks
export function getTasks() {
  return getTasksFromDB();
}

//get task by id
export function getTaskById(id: number) {
  getTaskByIdFromDB(id);
}

//delete task
export function deleteTaskById(id: number) {
  deleteTaskByIdFromDB(id);
}

//create task
export function createTask(task: ITask) {
  createTaskInDB(task);
}

//update task
export function updateTaskById(id: number, task: ITask) {
  updateTaskInDB(id, task);
}
