import { Router } from "express";
import { signin, signup } from "../controllers/userController.js";
import { verifyToken } from "../middlewares/auth.js";

export const userRouter = Router();

userRouter.post("/signup", signup);
userRouter.post("/signin", signin);
userRouter.get("/", verifyToken, signin);
