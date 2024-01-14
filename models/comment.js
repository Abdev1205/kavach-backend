import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema.Types;

const commentSchema = new mongoose.Schema(
  {
    name: {type: String, required: true, default: "Anonymous"},
    userId: { type: ObjectId, required: true, ref: "User" },
    postId: { type: ObjectId, required: true, ref: "Post" },
    comment: { type: String, required: true },
  },
  { timestamps: true }
);

export const Comments = mongoose.model("Comment", commentSchema);
