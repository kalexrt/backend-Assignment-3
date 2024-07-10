import * as taskService from "../service/task.service";
import { Response } from "express";
import { Request } from "../interfaces/auth.interface";

//get all tasks
export function getAllTasks(req: Request, res: Response) {
  const user =  req.user!; //extract user
  const tasks = taskService.getTasks(parseInt(user.id)); //get all tasks from the services
  res.json(tasks);
}

//get task by id
export function getTaskById(req: Request, res: Response) {
  try {
    const user =  req.user!; //extract user
    const { id } = req.params;   //extract the task ID
    const task = taskService.getTaskById(parseInt(id), parseInt(user.id)); //get specific task
    res.json(task);
  } catch (error) {
    const err = error as Error;
    res.json({ message: err.message });
  }
}

//delete task by id
export function deleteTaskById(req: Request, res: Response) {
  try {
    const user =  req.user!; //extract user
    const { id } = req.params; //extract the task ID
    res.json(taskService.deleteTaskById(parseInt(id), parseInt(user.id))); //delete specific task
  } catch (error) {
    const err = error as Error;
    res.json({ message: err.message });
  }
}

//create new task
export function createTask(req: Request, res: Response) {
  const { body } = req; //extract the body in json
  const userId =  req.user?.id!; //extract user
  taskService.createTask(body, parseInt(userId)); //create the task
  res.json({ message: "Task created" });
}

//update specific task
export function updateTaskById(req: Request, res: Response) {
  try {
    const user =  req.user!; //extract user
    const  id  = parseInt(req.params.id); //extract the task ID
    const { body } = req; //extract the body in json
    taskService.updateTaskById(id, body, parseInt(user.id)); //make changes to the task
    res.json({ message: "Task Updated" });
  } catch (error) {
    const err = error as Error;
    res.json({ message: err.message });
  }
}

