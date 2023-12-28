import { Model, Schema, model } from "mongoose";
import { IExpanse } from "../types/expanse.js";

const ExpanseSchema: Schema = new Schema({
  _user: { type: Schema.Types.ObjectId, ref: "User" },
  title: { type: String, required: true },
  description: { type: String, required: false },
  value: { type: Number, required: true },
  date: { type: Date, required: true },
  category: { type: String, required: true },
});

export const Expanse: Model<IExpanse> = model<IExpanse>(
  "Expanse",
  ExpanseSchema
);
