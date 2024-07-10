import bcrypt from "bcrypt";

import { getUserQuery, User } from "../interfaces/user.interface";
import * as taskModel from "../model/task.model"
import * as userModel from "../model/user.model";

export function getUserById(id: string) {
  const data = userModel.getUserById(id);

  if (!data) {
    return {
      error: `User with id: ${id} not found`,
    };
  }

  return data;
}

export async function createUser(user: User) {
  const password = await bcrypt.hash(user.password, 10);

  userModel.createUser({
    ...user,
    password,
  });
}

export function getUsers(query: getUserQuery) {
  return userModel.getUsers(query);
}

export function getUserByEmail(email: string) {
  const data = userModel.getUserByEmail(email);
  return data;
}

export function deleteUserById(id:number){
  const taskDeletionResult = taskModel.deleteAllTasksByUserId(id); //delete all user tasks
  const userDeletionResult = userModel.deleteUserById(id); //delete user
  
  return {
    taskDeletionResult,
    userDeletionResult,
  };
}