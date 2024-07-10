import express from "express";
import taskRouter from "./task";
import userRouter from "./user";
import authRouter from "./auth"

const router = express();
router.use("/tasks", taskRouter);
router.use("/users", userRouter);
router.use("/auth", authRouter);

export default router;