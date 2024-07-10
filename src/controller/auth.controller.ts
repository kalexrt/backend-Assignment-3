import { Request, Response } from "express";
import * as authService from "../service/auth.service";

export async function login(req: Request, res: Response) {
  const { body } = req;

  const data = await authService.login(body);

  res.json(data);
}

export async function refresh(req:Request, res: Response){
  const  { refreshToken }  = req.body;
  
  if (!refreshToken) {
    return res.status(400).json({ error: "Refresh token is required" });
  }

  const data = await authService.refresh(refreshToken);
  res.json(data);
}
