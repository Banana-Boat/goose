import { Request, Response, NextFunction } from "express";
import * as bcrypt from "bcryptjs";

function encryptPassword(req: Request, res: Response, next: NextFunction) {
  const { userPsw } = req.body;
  if (userPsw) {
    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync(userPsw, salt);
    req.body.userPsw = hash;
  }
  next();
}

export { encryptPassword };
