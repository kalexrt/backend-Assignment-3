import express from "express";

import { authenticate, authorize } from "../middlewares/auth.middleware";

import { createUser, getUserById, getUsers, updateUserById, deleteUserById } from "../controller/user.controller";

const router = express();

router.route("/")
    .get(authenticate, authorize("users.getAll"), getUsers)
    .post(authenticate, authorize("users.create"), createUser);

router.route("/:id")
    .get(authenticate, authorize("users.getById"), getUserById)
    .put(authenticate, authorize("users.updateById"), updateUserById)
    .delete(authenticate, authorize("users.deleteById"), deleteUserById);

export default router;