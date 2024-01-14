import User from "../../models/user.js";
import { Posts } from "../../models/Posts.js";
import Likes from "../../models/like.js";

export const fetchFeed = async (req, res) => {
  try {
    const userId = req.id;
    const userFeed = await Posts.find({}).sort({ timestamp: -1 });
    const userLikes = await Likes.find({ userId });
    const userLikesMap = userLikes.reduce((map, like) => {
      map[like.postId] = true;
      return map;
    }, {});
    const updatedUserFeed = userFeed.map((post) => ({
      ...post._doc,
      liked: userLikesMap[post._id] || false,
    }));


    res.json({
      success: true,
      updatedUserFeed
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Unable to fetch feed",
    });
  }
};