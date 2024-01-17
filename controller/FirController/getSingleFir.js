import Fir from '../../models/fir.js'

export const getSingleFir = async (req, res) => {
    try{
        const userFir = await Fir.findById(req.params.id);
        
        if(!userFir){
            res.status(404).json({
                success: false,
                message : "No firs found"
            })
        }else{
            res.status(200).json({
                success: true,
                userFir
            })
        }
        
    } catch(error){
        console.log(error);
    }
}