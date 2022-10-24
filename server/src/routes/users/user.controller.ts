import { Request, Response, NextFunction } from "express";
import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";

import { userError } from "../../error/user.error";
import {
  createUser,
  queryUser,
  updateUser,
} from "../../models/users/user.model";

async function register(req: Request, res: Response, next: NextFunction) {
  const { userName, userPsw, isAdmin } = req.body;

  try {
    // 校验用户名密码是否存在
    if (!userName || !userPsw) return next(userError.InfoMissing);

    // 校验用户名是否已被注册
    if (await queryUser(userName)) return next(userError.AlreadyExisted);

    // 创建用户
    const userInfo = await createUser({ userName, userPsw, isAdmin });

    res.status(200).json({
      code: "0",
      msg: "注册成功",
      data: userInfo,
    });
  } catch (err) {
    console.error(err);
    next(userError.RegisterFaild);
  }
}

async function getUserInfo(req: Request, res: Response, next: NextFunction) {
  const { userName } = req.body; // token中解析获得

  try {
    // 校验该用户是否存在
    const userInfo = await queryUser(userName);
    if (!userInfo) return next(userError.DoesNotExisted);

    const { userPsw, ...restInfo } = userInfo;

    res.status(200).json({
      code: "0",
      msg: "获取用户信息成功",
      data: restInfo,
    });
  } catch (err) {
    console.error(err);
    next(userError.GetInfoFailed);
  }
}

async function login(req: Request, res: Response, next: NextFunction) {
  const { userName, userPsw } = req.body;

  try {
    // 校验用户名密码是否存在
    if (!userName || !userPsw) return next(userError.InfoMissing);

    // 校验该用户是否存在
    const userInfo = await queryUser(userName);
    if (!userInfo) return next(userError.DoesNotExisted);

    const { userPsw: hash, ...restInfo } = userInfo;

    // 校验密码是否正确
    if (!bcrypt.compareSync(userPsw, hash))
      return next(userError.WrongPassword);

    // 颁发token
    const token = jwt.sign({ userName }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.status(200).json({
      code: "0",
      msg: "登陆成功",
      data: { token, ...restInfo },
    });
  } catch (err) {
    console.error(err);
    return next(userError.LoginFailed);
  }
}

async function updatePassword(req: Request, res: Response, next: NextFunction) {
  const { userName, userPsw, oldUserPsw } = req.body;

  try {
    // 校验新旧密码是否存在
    if (!userPsw || !oldUserPsw) return next(userError.PswMissing);

    // 校验旧密码是否正确
    const userInfo = await queryUser(userName);
    if (!userInfo) return next(userError.DoesNotExisted);

    const { userPsw: hash, ...restInfo } = userInfo;

    if (!bcrypt.compareSync(oldUserPsw, hash))
      return next(userError.WrongPassword);

    // 修改密码
    if (!(await updateUser({ userName }, { userPsw })))
      return next(userError.PswEditFailed);

    res.status(200).json({
      code: "0",
      msg: "修改密码成功",
      data: restInfo,
    });
  } catch (err) {
    console.error(err);
    next(userError.PswEditFailed);
  }
}

export { register, getUserInfo, login, updatePassword };
