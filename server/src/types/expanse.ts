import { ObjectId } from "mongoose";

export interface IExpanse extends Document {
  _user: ObjectId;
  title: string;
  description: string;
  value: number;
  date: Date;
  category: string;
}
