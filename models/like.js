import mongoose from "mongoose"
const {ObjectId} = mongoose.Schema.Types

const likeSchema = new mongoose.Schema({
userId: {type: ObjectId, required: true, ref: 'User'},
postId: {type: ObjectId, required: true, ref: 'Post'},
},{timestamps: true})

const Likes = mongoose.model("Likes", likeSchema);
export default Likes;