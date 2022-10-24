import { Request, Response, NextFunction } from "express";
import { Error } from "./types";

export function errorHandler(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error("Error: ", error);

  let status = error.statusCode || 500;
  const { statusCode, ...restInfo } = error;

  res.status(status).json(restInfo);
}
