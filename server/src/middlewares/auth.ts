import { NextFunction, Response } from "express";
import jwt from "jsonwebtoken";
import { IGetUserAuthInfoRequest } from "../types/express/request.js";

export const verifyToken = (
  req: IGetUserAuthInfoRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    res.status(401).send({ error: "Usuário não autenticado" });
  }
  const token = authHeader.split(" ")[1];

  jwt.verify(token, process.env.JWT_KEY, (err: any, user: any) => {
    if (err) res.status(403).send({ error: "Token inválido" });

    req.user = <any>user;
  });
  next();
};
