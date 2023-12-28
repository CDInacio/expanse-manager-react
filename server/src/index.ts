import cors from "cors";
import dotenv from "dotenv";
import express, { Application } from "express";
import { databaseConnection } from "./config/databaseConnection.js";
import expanseRouter from "./routes/Expanse.js";
import { userRouter } from "./routes/User.js";

dotenv.config();

const app: Application = express();
app.use(express.json());

databaseConnection();
app.use(cors());

app.use("/api/user", userRouter);
app.use("/api/expanse", expanseRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
