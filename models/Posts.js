import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  name : {
    type: String
  },
  content: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required : true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  comments: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // Reference to the User model
      },
      content: {
        type: String,
        required: true,
      },
      timestamp: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  likes: {
    type: Number,
    default: 0
  },
});

export const Posts = mongoose.model("Posts", postSchema);
