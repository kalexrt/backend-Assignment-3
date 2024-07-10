import { ITask } from "../interfaces/ITask.interface";
import { STATUS } from "../interfaces/status.interface";

export const db: ITask[] = [
  {
    id: 1,
    name: "walk the dog",
    status: STATUS.TODO,
    userId: 1
  },
  {
    id: 2,
    name: "feed the cat",
    status: STATUS.TODO,
    userId: 1
  },
  {
    id: 3,
    name: "assignment 1",
    status: STATUS.TODO,
    userId: 2
  },
];

//find task
function findTask(searchId: number, userId: number) {
  return db.findIndex(task => task.id === searchId && task.userId === userId) || null;
}

//validate task
function isTaskInvalid(task: ITask) {
  return !task.id || !task.name || task.status === undefined || !task.userId;
}

//get all tasks
export function getTasksFromDB(userId: number) {
  return db.filter(task => task.userId === userId);
}

//get task from id
export function getTaskByIdFromDB(taskId: number, userId: number) {
  const index = findTask(taskId, userId);
  if (index !== null) {
    return db[index];
  } else {
    throw new Error("Task not found");
  }
}

//delete task
export function deleteTaskByIdFromDB(idToBeDeleted: number, userId: number) {
  const index = findTask(idToBeDeleted, userId);
  if (index !== null) {
    db.splice(index, 1); //remove task
  } else {
    throw new Error("Task not found");
  }
}

//create task
export function createTaskInDB(task: ITask) {
  if (isTaskInvalid(task)) {
    throw new Error("Invalid task data");
  }
  db.push(task);
}

//update task
export function updateTaskInDB(taskId: number, updatedTask: ITask, userId: number) {
  const index = findTask(taskId, userId);
  if (index !== null) { //check index
    if (isTaskInvalid(updatedTask)) { //check task
      throw new Error("Invalid task data");
    }
    db[index] = updatedTask; //update task
  } else {
    throw new Error("Task not found");
  }
}
