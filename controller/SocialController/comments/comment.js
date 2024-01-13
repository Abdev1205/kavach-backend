import {Comments} from "../../../models/comment.js";
import {Posts} from "../../../models/Posts.js";
import Users from "../../../models/user.js"
const addComment = async (req, res) => {
  const { postId, comment } = req.body;
  const userId = req.id;
  const user = await Users.findById(userId);
  const name = user.name;

  // console.log("user: " + user);
  // console.log("name: " + name);
  // console.log("Comment: " + postId);
  // console.log(userId);
  // console.log(comment);
  try {
    const result = await Comments.create({
      name,
      userId,
      postId,
      comment
    });
    await Posts.findByIdAndUpdate(
      postId,
      { $inc: { commentCount: 1 } },
      { new: true }
    );
    res.send({
      status: 200,
      message: "comment added succesfully..!!",
      data: result,
    });
  } catch (error) {
    res.status(403).json({ status: false, error: error });
  }
};

const deleteComment = async (req, res) => {
  const { commentId, userId } = req.body;
  try {
    const deleteComment = await Comments.findByIdAndDelete({
      _id: commentId,
      userId,
    });

    if (!!deleteComment) {
      await Posts.findByIdAndUpdate(
        deleteComment.postId,
        { $inc: { commentCount: -1 } },
        { new: true }
      );
      res.send({
        data: "comment deleted succesfully..!!",
        status: 200,
      });
    } else {
      res.status(403).json({ status: false, message: "Commnet not deleted" });
    }
  } catch (error) {
    res.status(403).json({ status: false, error: error });
  }
};

const postComments = async (req, res) => {
  const postId = req.query.postId;

  const totalComments = await Comments.countDocuments({ postId });
  console.log("totalComments", totalComments);

  try {
    const result = await Comments.find({ postId: postId })
    console.log("Post Comments: " + result);
    res.send({
      successs: true,
      result
    });
  } catch (error) {
    res.status(403).json({ status: false, error: error });
  }
};

export { addComment, deleteComment, postComments };
