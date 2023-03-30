import mongoose from "mongoose";
const { Schema } = mongoose;

const commentSchema = new Schema(
  {
    postId: {
      type: Schema.Types.ObjectId,
      ref: "post",
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

let Comment;
try {
  Comment = mongoose.model("comment");
} catch {
  Comment = mongoose.model("comment", commentSchema);
}

export default Comment;
