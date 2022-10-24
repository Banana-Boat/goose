import { Error } from "./types";

export const authError = {
  WrongToken: {
    statusCode: 400,
    code: "10101",
    msg: "token错误",
  } as Error,
  TokenExpired: {
    statusCode: 400,
    code: "10102",
    msg: "token过期",
  } as Error,
};
