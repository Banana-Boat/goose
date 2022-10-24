import { User } from "./types";
import { userModel } from "./user.mongo";

/**
 * 创建用户
 * @param user
 * @returns 除密码外的所有用户信息
 */
async function createUser(user: User) {
  const userInfo = await userModel.create(user);
  const { userPsw, ...restInfo } = userInfo.toObject();
  return restInfo;
}

/**
 * 查询单个用户信息
 * @param userName
 * @returns 所有用户信息，若失败则返回null
 */
async function queryUser(userName: string) {
  const userInfo = await userModel.findOne({ userName });
  return userInfo?.toObject();
}

/**
 * 更新单个用户信息
 * @param where
 * @param value
 * @returns 是否成功更新
 */
async function updateUser(
  where: { userName: string },
  value: Omit<User, "userName">
) {
  const res = await userModel.updateOne(where, value);
  return res.modifiedCount === 1 ? true : false;
}

export { createUser, queryUser, updateUser };
