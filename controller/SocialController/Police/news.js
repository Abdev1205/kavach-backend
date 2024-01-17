import User from "../../../models/user.js"
import News from "../../../models/NewsChips.js"
export const createNewsChip = async (req, res) => {
    try {
        const userId = req.id;
        const {content} = req.body;

        const user = await User.findById(userId);
        const news = await News.create({
            userId,
            name: user.name,
            News: content,
            profileImage: user.profileImage,
        })
        await news.save();
        
        res.json({
            success: true,
            message: "Post Created"
        })
    }catch (error){
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Post failed"
        })
    }
}