import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema.Types;

const NewsSchema = new mongoose.Schema(
  {
    userId: { type: ObjectId, required: true, ref: "User" },
    name: {type: String},
    News: {type: String},
    profileImage: {type: String}
  },
  { timestamps: true }
);

const News = mongoose.model("News", NewsSchema);
export default News;
