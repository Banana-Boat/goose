import { Request, Response } from "express";
import { Error } from "./types";

export function errorHandler(error: Error, req: Request, res: Response) {
  console.log("Error: ", error);

  let status = 500;
  switch (error.code) {
  }

  res.status(status).json(error);
}
