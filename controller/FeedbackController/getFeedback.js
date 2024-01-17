import Feedback from '../../models/Feedback.js'

export const getFeedback = async (req, res) => {
    try{
        const feedbacks = await Feedback.find({}).sort({timestamp: -1});

        if(!feedbacks){
            res.status(404).json({
                success: false,
                message : "No Feedback found"
            })
        }else{   
            res.status(200).json({
                success: true,
                feedbacks
            })
        }
        
    } catch(error){
        console.log(error);
    }
}