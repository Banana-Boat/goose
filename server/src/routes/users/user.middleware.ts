import { Request, Response, NextFunction } from "express";
import * as bcrypt from "bcryptjs";

function encryptPassword(req: Request, res: Response, next: NextFunction) {
  const { password } = req.body;
  if (password) {
    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync(password, salt);
    req.body.password = hash;
  }
  next();
}

export { encryptPassword };
