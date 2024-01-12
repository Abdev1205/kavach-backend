import {Posts} from "../../models/Posts.js"

export const likeUpdate = async (req, res) => {
    try {
        const {PostID, liked} = req.body;
        const post = await Posts.findById(PostID);
        
        if(!post){
            res.json({
                success:false,
                message: "Failed"
            })
        }
        
        (liked) ? post.likes += 1 : post.likes -=1;

        post.save();

        res.json({
            success: true,
            message: "Liked"
        })
    }catch (error){
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Something went wrong"
        })
    }
}