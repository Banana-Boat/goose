import * as express from "express";

import { verifyToken } from "../../middlewares/auth.middleware";
import { encryptPassword } from "./user.middleware";
import {
  updatePassword,
  getUserInfo,
  login,
  register,
} from "./user.controller";

const router = express.Router();

router.post("/register", encryptPassword, register);

router.post("/login", login);

router.get("/getUserInfo", verifyToken, getUserInfo);

router.patch("/updatePassword", verifyToken, encryptPassword, updatePassword);

export default router;
