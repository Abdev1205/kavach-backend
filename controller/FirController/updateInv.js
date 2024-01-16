import Fir from "../../models/fir.js";

export const updateInvStage = async (req, res) => {
  try {
    const Report = await Fir.findById(req.params.id);
    console.log("Inv Stage");
    console.log(req.params.invStg);
    if (!Report) {
      res.status(404).json({
        success: false,
        message: "FIR Was not Found",
      });
    }

    Report.stages = req.params.invStg;

    await Report.save();

    res.status(201).json({
      success: true,
      message: "FIR Updated Succesfully",
    });
  } catch (error) {
    console.log(error);
  }
};
