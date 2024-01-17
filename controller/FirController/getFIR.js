import Fir from '../../models/fir.js'

export const getFIR = async (req, res) => {

    try {
        const totalFirs = await Fir.find({}).sort({ createdAt: -1 });

        if (!totalFirs) {
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

export const getFIROld = async (req, res) => {
    try {
        const totalFirs = await Fir.find({}).sort({ createdAt: 1 });

        if (!totalFirs) {
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