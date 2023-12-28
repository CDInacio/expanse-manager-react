import bcrypt from "bcrypt";
import { Model, Schema, model } from "mongoose";
import { IUser } from "../types/user.js";

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

UserSchema.pre("save", function (next) {
  var user = this;

  bcrypt.genSalt(10, function (err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});
export const User: Model<IUser> = model<IUser>("User", UserSchema);
