import mongoose from "mongoose";
const { Schema } = mongoose;

const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

let Category;
try {
  Category = mongoose.model("category");
} catch {
  Category = mongoose.model("category", categorySchema);
}

export default Category;
