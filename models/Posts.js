import mongoose from "mongoose";
const { Schema } = mongoose;

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    image: {
      url: String,
      publicId: String,
    },
  },
  {
    timestamps: true,
  }
);

let Post;
try {
  Post = mongoose.model("post");
} catch {
  Post = mongoose.model("post", postSchema);
}

export default Post;
