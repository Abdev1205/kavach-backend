import User from "../../models/user.js"
import { Posts } from "../../models/Posts.js"
export const fetchFeed = async (req, res) => {
    try {
        const userID = req.user._id;
        const userFeed = await Posts.find();
        res.json({
            success: true,
            userFeed
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Unable to fetch feed"
        })
    }
}