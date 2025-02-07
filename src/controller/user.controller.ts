import { Request, Response, NextFunction } from "express";

import * as userService from "../service/user.service";
import { getUserQuery } from "../interfaces/user.interface";
import HttpStatusCodes from "http-status-codes";
import loggerWithNameSpace from "../utils/logger";
import { ServerError } from "../error/ServerError";

const logger = loggerWithNameSpace("UserController");

//get all users
export function getUsers(
  req: Request<any, any, any, getUserQuery>,
  res: Response,
  next: NextFunction
) {
  try {
    logger.info("Called getUsers");
    const { query } = req;
    const data = userService.getUsers(query);
    res.status(HttpStatusCodes.OK).json(data);
  } catch (error) {
    next(new ServerError("Data Could Not Be Fetched")); // pass error to the error handling middleware
  }
}

//get user by id
export function getUserById(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;
    logger.info("Called getUserbyId");
    const data = userService.getUserById(id);
    res.status(HttpStatusCodes.OK).json(data);
  } catch (error) {
    next(new ServerError("Data Could Not Be Fetched")); // pass error to the error handling middleware
  }
}

//create a new user
export async function createUser(req: Request, res: Response, next: NextFunction) {
  try {
    const { body } = req;
    logger.info("Called createUser");
    await userService.createUser(body);
    res.status(HttpStatusCodes.OK).json({
      message: "User created",
    });
  } catch (error) {
    next( new ServerError("User Could Not Be Created"));
  }
}

//update user by id
export function updateUserById(req: Request, res: Response, next: NextFunction) {
  try {
    logger.info("Called updateUserById");
    const id = parseInt(req.params.id);
    const updatedUserData = req.body;
    const updatedUser = userService.updateUserById(id, updatedUserData);
    res.status(HttpStatusCodes.OK).json({ message: "User updated", data: updatedUser });
  } catch (error) {
    next( new ServerError("User Could Not Be Updated"));
  }
}

//delete user by id
export function deleteUserById(req: Request, res: Response, next:NextFunction){
  try {
    const { id } = req.params; //extract the user ID
    res.status(HttpStatusCodes.OK).json(userService.deleteUserById(parseInt(id))); //delete specific user
  } catch (error) {
    next( new ServerError("User Could Not be Deleted"))
  }
}
