import { Request } from "express";
import { IUser } from "../user.js";

export interface IGetUserAuthInfoRequest extends Request {
  user: IUser; // or any other type
}
