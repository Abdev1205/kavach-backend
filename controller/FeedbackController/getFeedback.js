import Feedback from '../../models/Feedback.js'

export const getFeedback = async (req, res) => {
    try{
        const total = await Feedback.find({});

        if(!total){
            res.status(404).json({
                success: false,
                message : "No Feedback found"
            })
        }else{   
            res.status(200).json({
                success: true,
                total
            })
        }
        
    } catch(error){
        console.log(error);
    }
}