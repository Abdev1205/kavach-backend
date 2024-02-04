import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema.Types;

const commentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, default: "Anonymous" },
    senderId: { type: ObjectId, required: true, ref: "User" },
    recieverId: { type: ObjectId, required: true, ref: "User" },
    firId: { type: ObjectId, required: true, ref: "Fir" },
    reply: { type: String, required: true },
  },
  { timestamps: true }
);

export const Comments = mongoose.model("Comment", commentSchema);

