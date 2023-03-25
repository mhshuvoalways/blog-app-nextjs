import serverError from "@/utils/serverError";
import mongoose from "mongoose";

const dbConnect = (res) => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Database connect successfully");
    })
    .catch(() => {
      serverError(res);
    });
};

export default dbConnect;
