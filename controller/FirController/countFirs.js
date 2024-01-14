import Fir from '../../models/fir.js'

export const countFirs = async (req, res) => {
    try{
        const totalNo = await Fir.countDocuments({});
        

        if(!totalNo){
            res.status(404).json({
                success: false,
                message : "No firs found"
            })
        }else{
            res.status(200).json({
                success: true,
                totalNo
            })
        }
        
    } catch(error){
        console.log(error);
    }
}