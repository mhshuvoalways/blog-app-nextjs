import serverError from "@/utils/serverError";
import mongoose from "mongoose";

const dbConnect = (res) => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/blog-web")
    .then(() => {
      console.log("Database connect successfully");
    })
    .catch(() => {
      serverError(res);
    });
};

export default dbConnect;
