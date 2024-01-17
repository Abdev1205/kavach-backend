import Fir from '../../models/fir.js'

export const getUserFIR = async (req, res) => {

  try {
    const userId = req.id;
    const totalFirs = await Fir.findById(userId).sort({ createdAt: -1 });

    console.log(userId);

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

export const getUserFIROld = async (req, res) => {
  try {
    const totalFirs = await Fir.FindById(userId).sort({ createdAt: 1 });

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