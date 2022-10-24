import { Schema, model } from "mongoose";
import { User } from "./types";

const userSchema = new Schema<User>({
  userName: {
    type: String,
    require: true,
  },
  userPsw: {
    type: String,
    require: true,
  },
  isAdmin: {
    type: Number,
    default: 0,
  },
});

export const userModel = model("User", userSchema);
