import { Posts } from "../../models/Posts.js";
import Likes from "../../models/like.js";
export const likeUpdate = async (req, res) => {
    try {
        const { postId }  = req.body;
        const userId = req.id;
        const existingLike = await Likes.findOne({postId,userId })

        if (!existingLike) {
            await Likes.create({postId, userId});
            await Posts.findByIdAndUpdate(
                postId,
                {$inc: {likeCount: 1}},
                {new: true}
            )
            return res.status(200).json({message: "Like added sucessfully..!!"})
        }
        else{
            await Likes.findByIdAndDelete(existingLike._id);
            await Posts.findByIdAndUpdate(
                postId,
                {$inc: {likeCount: -1}}
            )
            return res.status(200).json({message: "Like removed sucessfully..!!"})
        }
    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Error: " + error
        });
    }
};
