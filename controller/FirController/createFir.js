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
      phoneno
    });
    res.status(201).json({
      success: true,
      message: "FIR Added Succesfully",
    });
  } catch (error) {
    console.log(error);
  }
};
