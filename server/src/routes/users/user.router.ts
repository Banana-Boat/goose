import * as express from "express";

import { verifyToken } from "../../middlewares/auth.middleware";
import { encryptPassword } from "./user.middleware";
import { editPassword, login, register } from "./user.controller";

const router = express.Router();

router.post("/register", encryptPassword, register);

router.post("/login", login);

router.patch("/editPassword", verifyToken, encryptPassword, editPassword);

export default router;
