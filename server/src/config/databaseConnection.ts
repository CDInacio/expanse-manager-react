import mongoose from "mongoose";

let uri =
  "mongodb+srv://claudiodantas:general01@cluster0.1pd6mhf.mongodb.net/expanse-manager";

export const databaseConnection = () => {
  try {
    mongoose.connect(uri);
    console.log("Database connected!");
  } catch (error) {
    console.log(error);
  }
};
