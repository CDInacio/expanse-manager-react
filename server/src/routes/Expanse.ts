import { Router } from "express";
import {
  createExpanse,
  getExpense,
  getExpenses,
} from "../controllers/expansesController.js";
import { verifyToken } from "../middlewares/auth.js";

const expanseRouter = Router();

expanseRouter.post("/create", verifyToken, createExpanse);
expanseRouter.get("/getAll", verifyToken, getExpenses);
expanseRouter.get("/get", verifyToken, getExpense);

export default expanseRouter;
