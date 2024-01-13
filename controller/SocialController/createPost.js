import User from "../../models/user.js"
import { Posts } from "../../models/Posts.js"
export const createPost = async (req, res) => {
    try {
        const userId = req.id;
        console.log("create post called")
        const { content, img } = req.body;
        console.log(req.body)
        console.log(userId);
        console.log(content);
        const user = await User.findById(userId);
        const myPost = await Posts.create({
            user: userId,
            name: user.name,
            content,
            img
        })
        await myPost.save();

        res.json({
            success: true,
            message: "Post Created"
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Post failed"
        })
    }
}