import { Request, Response, NextFunction } from "express";
import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";

import { userError } from "../../error/user.error";

async function register(req: Request, res: Response, next: NextFunction) {
  const { user_name, password } = req.body;

  try {
    // 校验用户名密码是否存在
    if (!user_name || !password) return next(userError.InfoMissing);

    // 校验用户名是否已被注册
    // if (await getOneUserInfo({ user_name }))
    //   return next(userError.AlreadyExisted);

    // 创建用户
    // const user = await createUser(user_name, password);
    // const { password: hash, ...restInfo } = user.get(); // 剔除password

    // res.status(200).json({
    //   code: "0",
    //   msg: "注册成功",
    //   data: restInfo,
    // });
  } catch (err) {
    next(userError.RegisterFaild);
  }
}

async function login(req: Request, res: Response, next: NextFunction) {
  const { user_name, password } = req.body;

  try {
    // 校验用户名密码是否存在
    if (!user_name || !password) return next(userError.InfoMissing);

    // 校验用户名是否存在
    // const user = await getOneUserInfo({ user_name });
    // if (!user) return next(userError.AlreadyExisted);

    // const { password: hash, ...restInfo } = user.get();

    // // 校验密码是否正确
    // if (!bcrypt.compareSync(password, hash))
    //   return next(userError.WrongPassword);

    // // 颁发token
    // const token = jwt.sign(restInfo, process.env.JWT_SECRET as string, {
    //   expiresIn: "1d",
    // });

    // res.status(200).json({
    //   code: "0",
    //   msg: "登陆成功",
    //   data: { token, ...restInfo },
    // });
  } catch (err) {
    return next(userError.LoginFailed);
  }
}

async function editPassword(req: Request, res: Response, next: NextFunction) {
  const { password, oldPassword } = req.body;

  try {
    // 校验新旧密码是否存在
    if (!password || !oldPassword) return next(userError.PswMissing);

    // 校验旧密码是否正确
    // const { user_name } = req.body.user;
    // const user = await getOneUserInfo({ user_name });
    // if (!user) return next(userError.DoesNotExisted);

    // const { password: hash, ...restInfo } = user.get();

    // if (!bcrypt.compareSync(oldPassword, hash))
    //   return next(userError.WrongPassword);

    // // 修改密码;
    // if (!(await updateUserInfo({ user_name, password })))
    //   return next(userError.PswEditFailed);

    // res.status(200).json({
    //   code: "0",
    //   msg: "修改密码成功",
    //   data: { ...restInfo },
    // });
  } catch (err) {
    next(userError.PswEditFailed);
  }
}

export { register, login, editPassword };
