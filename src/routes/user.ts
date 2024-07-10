import express from "express";

import { authenticate, authorize } from "../middlewares/auth";

import { createUser, getUserById, getUsers } from "../controller/user";

const router = express();

router.route("/")
    .get(authenticate, authorize("users.get"), getUsers)
    .post(createUser);

router.route("/")
    .get(authenticate, getUserById);

export default router;