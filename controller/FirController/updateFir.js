import Fir from "../../models/fir.js";

export const updateFir = async (req, res) => {
  try {
    const Report = await Fir.findById(req.params.id);

    if(!Report){
      res.status(404).json({
        success: false,
        message: "FIR Was not Found",
      });
    }
    
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

    Report.accusedName = accusedName;
    Report.suspectName = suspectName;
    Report.accusedAge = accusedAge;
    Report.suspectAge = suspectAge;
    Report.accusedCity = accusedCity;
    Report.suspectCity = suspectCity;
    Report.accusedReport = accusedReport;
    Report.Stages = Stages;
    Report.hero = hero;
    
    await Report.save();
    
    res.status(201).json({
      success: true,
      message: "FIR Updated Succesfully",
    });
  } catch (error) {
    console.log(error);
  }
};
