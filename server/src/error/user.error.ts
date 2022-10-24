import { Error } from "./types";

export const userError = {
  AlreadyExisted: {
    statusCode: 409,
    code: "10001",
    msg: "用户已存在",
  } as Error,
  InfoMissing: {
    statusCode: 400,
    code: "10002",
    msg: "用户名或密码为空",
  } as Error,
  RegisterFaild: {
    code: "10003",
    msg: "用户注册失败",
  } as Error,
  DoesNotExisted: {
    statusCode: 400,
    code: "10004",
    msg: "用户不存在",
  } as Error,
  WrongPassword: {
    statusCode: 400,
    code: "10005",
    msg: "用户密码错误",
  } as Error,
  LoginFailed: {
    code: "10006",
    msg: "用户登陆失败",
  } as Error,
  PswMissing: {
    statusCode: 400,
    code: "10007",
    msg: "用户密码为空",
  } as Error,
  PswEditFailed: {
    code: "10008",
    msg: "用户密码修改失败",
  } as Error,
  GetInfoFailed: {
    code: "10009",
    msg: "获取用户信息失败",
  } as Error,
};
