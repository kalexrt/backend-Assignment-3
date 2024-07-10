import express from "express";

import { authenticate, authorize } from "../middlewares/auth.middleware";

import { createUser, getUserById, getUsers } from "../controller/user.controller";

const router = express();

router.route("/")
    .get(authenticate, authorize("users.get"), getUsers)
    .post(createUser);

router.route("/")
    .get(authenticate, getUserById);

export default router;