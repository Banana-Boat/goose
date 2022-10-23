import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";

import { authError } from "../error/auth.error";

async function verifyToken(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;

  if (!authorization) return next(authError.WrongToken);

  const token = authorization.replace("Bearer ", "");

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);

    // 验证通过，将内容存入req.body中
    req.body.user = decoded;
    next();
  } catch (err) {
    if ((err as jwt.VerifyErrors).name === "TokenExpiredError")
      return next(authError.TokenExpired);

    next(authError.WrongToken);
  }
}

export { verifyToken };
