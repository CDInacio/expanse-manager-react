import { Response } from "express";
import { Expanse } from "../models/Expanse.js";
import { IGetUserAuthInfoRequest } from "../types/express/request.js";

export const createExpanse = async (
  req: IGetUserAuthInfoRequest,
  res: Response
) => {
  try {
    const { title, value, description, category, date } = req.body;
    console.log(req.body);

    let newExpanse = new Expanse({
      _user: req.user.id,
      title,
      value,
      description,
      date,
      category,
    });

    const response = await newExpanse.save();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const getExpenses = async (
  req: IGetUserAuthInfoRequest,
  res: Response
) => {
  try {
    const expanses = await Expanse.find();
    res.status(200).send(expanses);
  } catch (error) {
    console.log(error);
  }
};

export const getExpense = async (
  req: IGetUserAuthInfoRequest,
  res: Response
) => {
  try {
    const expanse = await Expanse.find({ _user: req.user.id });
    console.log(expanse);
    res.status(200).send(expanse);
  } catch (error) {}
};
