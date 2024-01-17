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
      stages,
      hero,
      phoneno
    } = req.body;
    const userId = req.id;

    await Fir.create({
      accusedName,
      suspectName,
      accusedAge,
      suspectAge,
      accusedCity,
      suspectCity,
      accusedReport,
      stages,
      hero,
      phoneno,
      userId
    });
    res.status(201).json({
      success: true,
      message: "FIR Added Succesfully",
    });
  } catch (error) {
    console.log(error);
  }
};
