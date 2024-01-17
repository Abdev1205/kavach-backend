import Fir from '../../models/fir.js'

export const getFIR = async (req, res) => {
<<<<<<< HEAD

    try {
        const totalFirs = await Fir.find({}).sort({ timestamp: -1 });

        if (!totalFirs) {

=======
    try{
        const totalFirs = await Fir.find({}).sort({createdAt: -1});
        
        if(!totalFirs){
            res.status(404).json({
                success: false,
                message : "No firs found"
            })
        }else{
            res.status(200).json({
                success: true,
                totalFirs
            })
        }
        
    } catch(error){
        console.log(error);
    }
}

export const getFIROld = async (req, res) => {
    try{
        const totalFirs = await Fir.find({}).sort({createdAt: 1});
        
        if(!totalFirs){
>>>>>>> ca37c77e555128f32c3a4e1b2b8ad378cac23308
            res.status(404).json({
                success: false,
                message: "No firs found"
            })

        } else {

            res.status(200).json({
                success: true,
                totalFirs
            })
        }

    } catch (error) {
        console.log(error);
    }
}