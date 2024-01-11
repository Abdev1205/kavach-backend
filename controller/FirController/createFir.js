import Fir from "../../models/fir.js";

export const createFir = async (req, res) => {
  try {
    const {
      accusedName,
      suspectName,
      accusedAge,
      suspectAge,
      accusedCity,
      suspectCity,
      accusedReport,
      Stages,
      hero,
    } = req.body;

    await Fir.create({
      accusedName,
      suspectName,
      accusedAge,
      suspectAge,
      accusedCity,
      suspectCity,
      accusedReport,
      Stages,
      hero
    });
    
    res.status(201).json({
      success: true,
      message: "FIR Added Succesfully",
    });
  } catch (error) {
    console.log(error);
  }
};
