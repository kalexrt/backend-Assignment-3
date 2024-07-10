import { Request, Response } from "express";

import * as userService from "../service/user.service";
import { getUserQuery } from "../interfaces/user.interface";
import HttpStatusCodes from "http-status-codes";
import loggerWithNameSpace from "../utils/logger";

const logger = loggerWithNameSpace("UserController");

export function getUsers(
  req: Request<any, any, any, getUserQuery>,
  res: Response
) {
  const { query } = req;
  const data = userService.getUsers(query);
  res.status(HttpStatusCodes.OK).json(data);
}

export function getUserById(req: Request, res: Response) {
  const { id } = req.params;

  logger.info("Called getUserbyId")
  const data = userService.getUserById(id);
  res.status(HttpStatusCodes.OK).json(data);
}

export async function createUser(req: Request, res: Response) {
  const { body } = req;
  logger.info("Called createUser")
  await userService.createUser(body);
  res.status(HttpStatusCodes.OK).json({
    message: "User created",
  });
}

export function updateUserById(req: Request, res: Response){
  
}

export function deleteUserById(req: Request, res: Response){
  const { id } = req.params; //extract the user ID
  res.json(userService.deleteUserById(parseInt(id))); //delete specific user
}
