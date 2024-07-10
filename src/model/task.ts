import { ITask } from "../interfaces/ITask";
import { STATUS } from "../interfaces/status";

export const db: ITask[] = [
  {
    id: 1,
    name: "walk the dog",
    status: STATUS.TODO,
  },
  {
    id: 2,
    name: "feed the cat",
    status: STATUS.TODO,
  },
];

//find task
function findTask(searchId: number) {
  return db.findIndex(task => task.id === searchId) || null;
}

//validate task
function isTaskInvalid(task:ITask) {
  return !task.id || !task.name || task.status === undefined;
}

//get all tasks
export function getTasksFromDB() {
  return db;
}

//get task from id
export function getTaskByIdFromDB(taskId: number) {
  const index = findTask(taskId);
  if (index !== null) {
    return db[index];
  } else {
    throw new Error("Task not found");
  }
}

//delete task
export function deleteTaskByIdFromDB(idToBeDeleted: number) {
  const index = findTask(idToBeDeleted);
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
export function updateTaskInDB(taskId: number, updatedTask: ITask) {
  const index = findTask(taskId);
  if (index !== null) { //check index
    if (isTaskInvalid(updatedTask)) { //ccheck task
      throw new Error("Invalid task data");
    }
    db[index] = updatedTask; //update task
  } else {
    throw new Error("Task not found");
  }
}
