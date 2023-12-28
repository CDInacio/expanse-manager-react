import { Router } from "express";
import { signin, signup } from "../controllers/userController.js";
import { verifyToken } from "../middlewares/auth.js";

export const categoriesRouter = Router();

categoriesRouter.get("/", verifyToken, signin);
categoriesRouter.post("/signup", signup);
categoriesRouter.post("/signin", signin);
