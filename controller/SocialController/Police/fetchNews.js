import News from "../../../models/NewsChips.js"

export const newsfeed = async (req, res) => {
    try {
        const news = await News.find().sort({ createdAt: -1 }).exec();
        if(!news){
            res.status(204).json({
                success: false,
                message: "Couldn't find news"
            })
        }

        res.status(200).send({
            success: true,
            news
        })
    } catch (error) {
        console.log(error);
    }
    
}