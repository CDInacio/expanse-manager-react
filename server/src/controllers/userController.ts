import bcrypt from "bcrypt";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { User } from "../models/User.js";
import { IGetUserAuthInfoRequest } from "../types/express/request.js";

export const signup = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      res.status(400).send({ error: "Usuário já cadastrado!" });
    }

    user = new User({ name, email, password });
    await user.save();
    res.status(200).send({ message: "Usuário cadastrado com sucesso!" });
  } catch (error) {}
};

export const signin = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      res.status(400).send({ error: "Usuário não cadastrado" });
      return;
    }

    const passwordMath = await bcrypt.compare(password, user.password);

    if (!passwordMath) {
      res.status(400).send({ error: "Email e/ou senha incorretos" });
      return;
    }

    const userToken = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_KEY,
      {
        expiresIn: "15d",
      }
    );

    const payload = {
      name: user.name,
      email: user.email,
    };

    res.status(200).send({ user: payload, token: userToken });
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async (req: IGetUserAuthInfoRequest, res: Response) => {
  try {
    const user = await User.findById(req.user);
    res.status(200).send(user);
  } catch (error) {}
};
