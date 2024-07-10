import * as taskService from "../service/task.service";
import { Request, Response } from "express";

//get all tasks
export function getAllTasks(req: Request, res: Response) {
  const tasks = taskService.getTasks(); //get all tasks from the services
  res.json(tasks);
}

//get task by id
export function getTaskById(req: Request, res: Response) {
  try {
    const { id } = req.params;   //extract the task ID
    const task = taskService.getTaskById(parseInt(id)); //get specific task
    res.json(task);
  } catch (error) {
    const err = error as Error;
    res.json({ message: err.message });
  }
}

//delete task by id
export function deleteTaskById(req: Request, res: Response) {
  try {
    const { id } = req.params; //extract the task ID
    res.json(taskService.deleteTaskById(parseInt(id))); //delete specific task
  } catch (error) {
    const err = error as Error;
    res.json({ message: err.message });
  }
}

//create new task
export function createTask(req: Request, res: Response) {
  try {
    const { body } = req; //extract the body in json
    taskService.createTask(body); //ccreate the task
    res.json({ message: "Task created" });
  } catch (error) {
    const err = error as Error;
    res.json({ message: err.message });
  }
}

//update specific task
export function updateTaskById(req: Request, res: Response) {
  try {
    const  id  = parseInt(req.params.id); //extract the task ID
    const { body } = req; //extract the body in json
    taskService.updateTaskById(id,body); //make changes to the task
    res.json({ message: "Task Updated" });
  } catch (error) {
    const err = error as Error;
    res.json({ message: err.message });
  }
}

