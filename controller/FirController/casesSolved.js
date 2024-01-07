import Fir from '../../models/fir.js'

export const casesSolvedCounter = async (req, res) => {
    try{
        const total = await Fir.countDocuments({Stages : 'Solved'});

        if(!total){
            res.status(404).json({
                success: false,
                message : "No solved cases found"
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