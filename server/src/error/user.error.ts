import { ErrorTypes } from "./types";

export default {
  UserAlreadyExisted: {
    code: "10001",
    msg: "用户已存在",
  },
  UserInfoMissing: {
    code: "10002",
    msg: "用户名或密码为空",
  },
  UserRegisterError: {
    code: "10003",
    msg: "用户注册失败",
  },
  UserDoesNotExisted: {
    code: "10004",
    msg: "用户不存在",
  },
  UserWrongPassword: {
    code: "10005",
    msg: "用户密码错误",
  },
  UserLoginError: {
    code: "10006",
    msg: "用户登陆失败",
  },
  UserPswMissing: {
    code: "10007",
    msg: "用户密码为空",
  },
  UserPswEditError: {
    code: "10008",
    msg: "用户密码修改错误",
  },
} as ErrorTypes;
