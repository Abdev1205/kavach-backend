import Complaint from "../../models/complaint.js";

export const createComplaint = async (req, res) => {
  try {
    const {
      informantName,
      suspectName,
      accusedAge,
      informantAge,
      suspectAge,
      informantCity,
      informantComplaint,
      informantReply,
      policeReply,
      stages,
      hero,
    } = req.body;

    await Complaint.create({
      informantName,
      suspectName,
      accusedAge,
      informantAge,
      suspectAge,
      informantCity,
      informantComplaint,
      informantReply,
      policeReply,
      stages,
      hero,
    });
    res.status(201).json({
      success: true,
      message: "Complaint Added Succesfully",
    });
  } catch (error) {
    console.log(error);
  }
};
