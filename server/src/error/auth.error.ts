import { ErrorTypes } from "./types";

export default {
  TokenError: {
    code: "10101",
    msg: "token错误",
  },
  TokenExpired: {
    code: "10102",
    msg: "token过期",
  },
} as ErrorTypes;
