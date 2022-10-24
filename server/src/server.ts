import * as http from "http";
import * as dotenv from "dotenv";
import * as path from "path";
import * as mongoose from "mongoose";

import app from "./app";

dotenv.config({
  path: path.join(__dirname, "..", `.env.${process.env.NODE_ENV}`),
});

const { PORT, DB_HOST, DB_PORT, DB_USER, DB_PSW, DB_NAME } = process.env;

const server = http.createServer(app);

(async () => {
  await mongoose.connect(
    `mongodb://${DB_USER}:${DB_PSW}@${DB_HOST}:${DB_PORT}/${DB_NAME}`
  );

  server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}...`);
  });
})();
