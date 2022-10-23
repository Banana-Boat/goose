import * as express from "express";
import * as cors from "cors";
import * as morgan from "morgan";

import { errorHandler } from "./error/errorHandler";
import userRouter from "./routes/users/user.router";

const app = express();

app.use(cors());

app.use(morgan("short"));

app.use(express.json());

app.use("/user", userRouter);

app.use(errorHandler);

export default app;
